export default class Vector{
    constructor(x, y){
        this.x = x || 0, 
        this.y = y || 0
    }

    set(x, y){
        this.x = x;
        this.y = y;
    }

    // Calculates the magnitude (length) of the vector 
    // and returns the result as a float (this is simply 
    // the equation sqrt(x*x + y*y + z*z).)
    magnitude(){
        return Math.sqrt(this.x * this.x + this.y * this.y); 
    }


    static magnitude(vector){
        return Math.sqrt(vector.position.x * vector.position.x + vector.position.y * vector.position.y); 
    }


    // Set the magnitude of this vector to the value used for the newMagnitude parameter.
    setMagnitude(newMagnitude){
        //TODO: Write code to handle 0/0 error
        this.x = this.x * newMagnitude / this.magnitude();
        this.y = this.y * newMagnitude / this.magnitude();
        return new Vector(this.x, this.y);
    }


    limitMagnitude(maxMagnitude){
        if(this.magnitude() > maxMagnitude){
            this.setMagnitude(maxMagnitude)
        }
        return this.magnitude();
    }

    
    add(vector){
        this.x += vector.x;
        this.y += vector.y;
        return new Vector(this.x, this.y)
    }


    subtract(vector){
        this.x -= vector.x;
        this.y -= vector.y;
        return new Vector(this.x, this.y)
    }

    static subtract(vector1, vector2){
        return new Vector(vector1.x - vector2.x, vector1.y - vector2.y);
    }



}