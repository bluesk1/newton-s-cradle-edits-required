class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}

class constrain {
  constructor(pointA,bodyB) {
    this.pointA = pointA;
    this.bodyB = bodyB;
    var options = {
      pointA: pointA,
      bodyB: bodyB,
      stiffness: 0.02,
      length: 200
    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
  }
  display() {
    stroke("white");
    line(this.pointA.x,this.pointA.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
  }
}
