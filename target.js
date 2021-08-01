import Canvas from "./canvas.js";
import Vector from "./vector.js";

export default class Target{
    constructor(x, y){
        this.position = new Vector(x, y);
        this.color = '#00ff00';
        this.size = 10;
    }

    draw(){
        Canvas.context.beginPath();
        Canvas.context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        Canvas.context.stroke();
        Canvas.context.fillStyle = this.color;
        Canvas.context.fill();
        //Canvas.canvas.style.cursor = 'none';
    }

}
