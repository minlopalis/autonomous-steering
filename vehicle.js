import Vector from "./vector.js";
import Canvas from "./canvas.js";

export default class Vehicle {
    constructor(){
        this.position = new Vector();
        this.velocity = new Vector();
        this.acceleration = new Vector();
        
        this.maxForce = 0.01; // scalar, (of a quantity) having only magnitude, not direction.
        this.maxSpeed = 4; // scalar, (of a quantity) having only magnitude, not direction.
        this.orientation = null; // N basis vectors

        this.size = 20;
        this.color = "#ffffff"
    }

    update(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.set(0, 0);
    }

    applyForce(force){
        this.acceleration.add(force);
    }

    // steering_force = desired_velocity - velocity
    seek(target) {
        let desiredVelocity = Vector.subtract(target.position, this.position);
        desiredVelocity.setMagnitude(this.maxSpeed);
        let steering = Vector.subtract(desiredVelocity, this.velocity);
        this.applyForce(steering);
    }



    draw(x, y) {
        this.position.x = x;
        this.position.y = y;
        
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