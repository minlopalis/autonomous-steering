import Mouse from "./mouse.js";

export default class Canvas{
    static canvasId = "canvas";
    static canvas = null;
    static context = null;
    static backgroundColor = '#2B5480';
    static border = "solid 3px #3E7AB9"
    static width = 500;
    static height = 500;
    static mouseX = null;
    static mouseY = null;


    static drawCanvas(){
        Canvas.canvas = document.createElement('canvas');
        Canvas.context = Canvas.canvas.getContext('2d');
        Canvas.canvas.id = Canvas.canvasId;
        
        document.body.append(Canvas.canvas);

        Canvas.addEventListeners();
        Canvas.setBackgroundColor(Canvas.backgroundColor);
        Canvas.setBorder(Canvas.border);
    }


    static setBackgroundColor(bgColor){
        Canvas.backgroundColor = bgColor;

        if (Canvas.context != null) {
            Canvas.context.fillStyle = Canvas.backgroundColor;
            Canvas.context.fillRect(0,0, Canvas.canvas.width, Canvas.canvas.height);
        }
    }

    static setBorder(border){
        Canvas.canvas.style.border = border;
    }


    static resize(){
        Canvas.canvas.width = Canvas.width;
        Canvas.canvas.height = Canvas.height;
    }


    static addEventListeners(){
        document.addEventListener('onresize', Canvas.resize());

        Canvas.canvas.addEventListener("mousemove", (e)=>{
            const cRect = Canvas.canvas.getBoundingClientRect();
            Canvas.mouseX = Math.round(e.clientX - cRect.left);
            Canvas.mouseY = Math.round(e.clientY - cRect.top);
            //console.log(Canvas.mouseX, Canvas.mouseY)
        });
    }



}
