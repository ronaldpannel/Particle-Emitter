class Particle {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = Vector.random2D();
    this.vel.mult(Math.random() * 2 + -0.5)
    this.acc = new Vector(0, 0);
    this.radius = 4;
    this.lifespan = 1
  }
  finished(){
    return this.lifespan < 0
  }
  
  applyForce(force) {
    this.acc.add(force);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0)
    this.lifespan -= 0.010
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(0,255,0, ${this.lifespan})`;
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
  edges() {
    if (this.pos.y >= canvas.height - this.radius) {
      this.pos.y = canvas.height - this.radius;
      this.vel.y *= -1;
    }
  }
}
