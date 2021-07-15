
class Arrow{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.rotation = 0;
    }

    

}


var Polygon = function(kind, x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rotation = 0;
  
    var generateShape = function(kind) {
      switch(kind) {
        case 'arrow':
          return [
            this.x + this.width * 0.25, this.y + this.height,
            this.x + this.width * 0.25, this.y + this.height * 0.5,
            this.x, this.y + this.height * 0.5,
            this.x + this.width * 0.5, this.y,
            this.x + this.width, this.y + this.height * 0.5,
            this.x + this.width * 0.75, this.y + this.height * 0.5,
            this.x + this.width * 0.75, this.y + this.height
          ];
          break;
      }
    }
  
    generateShape = generateShape.bind(this);
    this.points = generateShape(kind);
  
    this.render = function(ctx) {
      ctx.save();
  
      // Rotation
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.translate(-(this.x + this.width / 2), -(this.y + this.height /2));
  
      // Draw arrow
      ctx.beginPath();
      ctx.moveTo(this.points[0], this.points[1]);
      for (var i = 2, len = this.points.length; i < len; i+=2) {
        ctx.lineTo(this.points[i], this.points[i + 1]);
      }
      ctx.lineTo(this.points[0], this.points[1]);
      ctx.closePath();
      ctx.fillStyle = '#2793ef';
      ctx.fill();
  
      ctx.restore();
    }
  }