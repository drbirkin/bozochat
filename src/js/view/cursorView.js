const cursor = document.querySelector('#cursor')
let mouse = { x: 300, y: 300 }
let pos = { x: 0, y: 0 }
const speed = 0.15 // between 0 and 1

const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed
  pos.y += (mouse.y - pos.y) * speed
  cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)'
}

const updateCoordinates = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

export const moveCursor = function loop() {
  window.addEventListener('mousemove', updateCoordinates)
  updatePosition()
  requestAnimationFrame(loop)
}
