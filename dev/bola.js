class Bola {
    constructor() {
        this.x = random(document.getElementById('tudo').clientWidth);
        this.y = random(window.innerHeight + document.getElementById('tudo').clientHeight / 2);
        this.diameter = random(2, 4);
        this.speedy = random(0.5, 1.2);
        this.acelly = random(0.01);
        this.speedx = 0;
    }

    move() {
        this.speedy += this.acelly;
        if (this.y < 0) {
            this.x = random(document.getElementById('tudo').clientWidth);
            this.y = window.innerHeight + document.getElementById('tudo').clientHeight / 2;
            this.speedy = random(0.5, 1.2);
        }
        this.y += -this.speedy;
    }

    display() {

        fill(226, 88, 34, random(90, 120));
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}
