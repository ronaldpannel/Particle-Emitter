class Emitter {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.particles = [];
  }
  addParticles(num) {
    for (let i = 0; i < num; i++) {
      this.particles.push(new Particle(this.pos.x, this.pos.y));
    }
  }
  update() {
    for (let particle of this.particles) {
      let gravity = new Vector(0, 0.1);
      particle.applyForce(gravity);
      particle.update();
    }

    for (let i = this.particles.length -1; i <= 0 ; i--) {
      if (this.particles[i].finished()) {
        this.particles.splice(i, 1);
      }
    }
  }
  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].draw();
    }
  }
}
