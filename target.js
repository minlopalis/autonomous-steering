import Canvas from "./canvas.js";
import Vector from "./vector.js";

export default class Target{
    constructor(){
        this.position = new Vector();
        this.color = '#ff0000';
        this.size = 10;
    }

    draw(x, y){
        this.position.x = x;
        this.position.y = y;

        Canvas.context.beginPath();
        Canvas.context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        Canvas.context.stroke();
        Canvas.context.fillStyle = this.color;
        Canvas.context.fill();
        //Canvas.canvas.style.cursor = 'none';
    }

}