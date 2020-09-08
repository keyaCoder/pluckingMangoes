class Mango{
    constructor(x, y, width){
        var options = {
            'isStatic' : true,
            'restitution' : 0,
            'friction' : 1
         
        }
        this.body = Bodies.circle(x, y, width, options);
        this.width = width;
        this.image = loadImage("mango.png");
    
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        image(this.image, pos.x, pos.y, this.width, this.width)
        pop();
    }
}