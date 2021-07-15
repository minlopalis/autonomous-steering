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
    boid.draw();
    target.draw(Canvas.mouseX, Canvas.mouseY);

    boid.seek(target);
    //console.log(target)
    // console.log('target = ', target.position)
    boid.update();
    // console.log('vel = ', boid.velocity)
    // console.log('acc = ', boid.acceleration)
    // console.log('pos = ', boid.position)

    requestAnimationFrame(startAnimation);
}