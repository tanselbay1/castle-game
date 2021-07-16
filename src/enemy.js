/* eslint-disable class-methods-use-this */
// enemy class
class Enemy {
    constructor(xPos, yPos) {
        this.element = document.createElement('div').classList.add('enemy');
        this.pos = { x: xPos, y: yPos };
        this.width = 50;
        this.height = 50;
        this.speed = 1;
        this.selected = false; // default false (not selected)
        this.question = '';
        this.answer = '';

        // setting some enemy css
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
    }

    update() {
        // update enemy position
        this.pos.x += this.speed;
    }

    draw() {
        // draw the enemy to different position
        this.style.transform = `translate(${this.pos.x}, ${this.pos.y})`;
    }

    delete() {
        // enemt died
    }
}

export default Enemy;
