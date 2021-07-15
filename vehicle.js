import Vector from "./vector.js";
import Canvas from "./canvas.js";

export default class Vehicle {
    constructor(x, y){
        this.position = new Vector(x,y);
        this.velocity = new Vector(0,0);
        this.acceleration = new Vector(0,0);
        this.size = 20;
        this.target = new Vector(0,0)
        this.color = "#ffffff"
    }


    seek() {

    }

    draw() {
        if (Canvas.canvas != null) {
            Canvas.context.beginPath();
            Canvas.context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
            Canvas.context.stroke();
            Canvas.context.fillStyle = this.color;
            Canvas.context.fill(); // Note: When you call fill(), any open shapes are closed automatically, so you don't have to call closePath(). This is not the case when you call stroke().
        }
        else{
            console.log("Error Drawing Vehicle")
        }
    }

}