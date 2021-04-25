let snd;
let sndclick;
bolas = []


function preload(){
  snd = loadSound('psique.mp3');
  sndclick = loadSound('ratclick.mp3');
  w = document.getElementById('tudo').clientWidth;
  h = window.innerHeight + document.getElementById('tudo').clientHeight;
}

   

function setup() {
    snd.play();
    snd.setVolume(0.05);
    canvas = createCanvas(w, h);
    for (let i = 0; i < 1500; i++) {
        bolas[i] = new Bola();
    }    
}

function draw() {
    canvas.size(w, h);
    background(0);
    for (var bola of bolas) {
        bola.move();
        bola.display();
    }
}   
function mouseClicked() {
    sndclick.play();
    sndclick.setVolume(0.1);
    
}
window.onresize = function () {
    // assigns new values for width and height variables
    w = document.getElementById('tudo').clientWidth;
    h = window.innerHeight + document.getElementById('tudo').clientHeight;
    canvas.size(w, h);
}