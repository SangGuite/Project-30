class Polygon {
    constructor(x,y,radius) {
      var options = {
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
      };
      this.radius = radius;
      this.body = Bodies.circle(x, y,this.radius,options);
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    };
    display(){
      push();
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,40,40);
      pop();
    };
  };
  