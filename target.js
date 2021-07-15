import Canvas from "./canvas.js";

export default class Target{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.color = '#ff0000';
        this.size = 10;
    }


    draw(){
        Canvas.context.beginPath();
        Canvas.context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        Canvas.context.stroke();
        Canvas.context.fillStyle = this.color;
        Canvas.context.fill();
        //Canvas.canvas.style.cursor = 'none';
    }

}