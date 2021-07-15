import Vehicle from "./vehicle.js";
import Vector from "./vector.js";
import Mouse from "./mouse.js";
import Canvas from "./canvas.js";
import Target from "./target.js";


Canvas.drawCanvas();

const boid = new Vehicle(100,200);
boid.draw();

const target = new Target(300,300);
target.draw();

