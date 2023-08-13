/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

let mouse = {
  x: 0,
  y: 0,
  pressed: false
}

let offset = canvas.getBoundingClientRect()

let emitters = []

 emitters[0] =  new Emitter(250, 50);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let emitter of emitters){
     emitter.addParticles(5);
     emitter.draw();
     emitter.update();
  }
 
  requestAnimationFrame(animate);
}
animate();

canvas.addEventListener('click', (e) => {
  mouse.x = e.clientX - offset.left
  mouse.y = e.clientY - offset.top
  emitters.push(new Emitter(mouse.x, mouse.y))
})

window.addEventListener("resize", () => {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
});
