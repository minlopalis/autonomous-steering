import Vector from "./vector.js"

export default class Mouse {
    static x = 0;
    static y = 0;

    static setMousePosition(e) {
      Mouse.x = e.clientX;
      Mouse.y = e.clientY;
    }

    static getMousePosition(){
        return new Vector(Mouse.x, Mouse.y)
    }

}