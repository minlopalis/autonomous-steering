import Vector from "./vector.js"

export default class Mouse {
    static x;
    static y;

    static setMousePosition(e) {
      Mouse.x = e.clientX;
      Mouse.y = e.clientY;
    }

    static getMousePosition(){
        return new Vector(Mouse.x, Mouse.y)
    }

}