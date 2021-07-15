import Vector from "./vector.js";
import Canvas from "./canvas.js";

export default class Vehicle {
    constructor(){
        this.position = new Vector();
        this.velocity = new Vector();
        this.acceleration = new Vector();
        
        this.maxForce = 0.01; // scalar, (of a quantity) having only magnitude, not direction.
        this.maxSpeed = 0.4; // scalar, (of a quantity) having only magnitude, not direction.
        this.orientation = null; // N basis vectors

        this.size = 20;
        this.color = "#ffffff"
    }


    update(){
        this.velocity.add(this.acceleration);
        //console.log('vehicle vel:', this.velocity)
        this.position.add(this.velocity);
        this.acceleration.set(0, 0);
    }

    applyForce(force){
        console.log('force', force)
        console.log('acceleration before: ', this.acceleration)
        this.acceleration.add(force);
        console.log('acceleration after: ', this.acceleration)
    }

    // steering_force = desired_velocity - velocity
    seek(target) {
        let desiredVelocity = Vector.subtract(target.position, this.position);
        desiredVelocity.setMagnitude(this.maxSpeed);
        let steering = Vector.subtract(desiredVelocity, this.velocity);
        this.applyForce(steering);
    }

    draw() {
        Canvas.context.beginPath();
        Canvas.context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        Canvas.context.stroke();
        Canvas.context.fillStyle = this.color;
        Canvas.context.fill(); // Note: When you call fill(), any open shapes are closed automatically, so you don't have to call closePath(). This is not the case when you call stroke().
    }

}