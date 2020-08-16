class Polygon {
    constructor (x,y,radius) {
        var options = {
          isStatic:false,
          restitution:0,
          friction:0,
          density:1.2,
        }
    this.polygon = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("polygon.png");
    World.add(world,this.polygon)
    }
    display(){
        push();
        var pos = this.body.position
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("blue");
        stroke("white");
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}