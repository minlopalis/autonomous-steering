import Vehicle from "./vehicle.js";
import Vector from "./vector.js";
import Mouse from "./mouse.js";
import Canvas from "./canvas.js";
import Target from "./target.js";


Canvas.drawCanvas();
const boid = new Vehicle();
const target = new Target();


startAnimation()


function startAnimation() {
    Canvas.context.clearRect(0,0, Canvas.width, Canvas.height);
    Canvas.setBackgroundColor(Canvas.backgroundColor);
    boid.draw(boid.position.x, boid.position.y);
    target.draw(Canvas.mouseX, Canvas.mouseY);
    console.log(target.position.magnitude())
    
    boid.seek(target);
    console.log('target = ', target.position)
    boid.update();

    requestAnimationFrame(startAnimation);
}


function moveToTarget(){

}