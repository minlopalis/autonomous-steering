import Vehicle from "./vehicle.js";
import Vector from "./vector.js";
import Mouse from "./mouse.js";
import Canvas from "./canvas.js";
import Target from "./target.js";


Canvas.drawCanvas();
const boid = new Vehicle();
const target = new Target();

// let v1 = new Vector(10, 20)
// let v2 = new Vector(30, 30)

// console.log(v1.subtract(v2))

startAnimation()


function startAnimation() {
    Canvas.context.clearRect(0,0, Canvas.width, Canvas.height);
    Canvas.setBackgroundColor(Canvas.backgroundColor);
    boid.draw();
    target.draw(Canvas.mouseX, Canvas.mouseY);

    console.log('Boid Initial Position:', boid.position)
    boid.seek(target);
    //boid.update();

    console.log('Boid Position:', boid.position)

    requestAnimationFrame(startAnimation);
}