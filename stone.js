class Stone {
    constructor(x, y, r) {
      var options = {
           isStatic : false,
          'restitution': 0,
          'friction': 1,
          'density': 1.0
      }
      
      this.x = x
      this.y = y
      this.r = r
      this.image = loadImage("sprites/stone.png");
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      //this.Matter.body = Matter.bodies.circle(this.x, this.y, this.r*2, options)
      World.add(world, this.body);
    }

    display() {
      
    var stonePos = this.body.position

     push();

     translate(stonePos.x, stonePos.y);
     fill(255,0,255)
     ellipseMode(RADIUS)
     imageMode(CENTER)
     image(this.image, 0, 0, this.r * 2, this.r * 2)

     pop();

    }

  };