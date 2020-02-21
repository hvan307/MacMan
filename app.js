function main() {
  const height = 15
  const width = 15
  const gridCellCount = height * width
  const grid = document.querySelector('.grid')
  const cells = []
  let eaterPosition = 58
  let analogPosition = 22

  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (i === eaterPosition) {
      cell.classList.add('eater')
    }
    if (i === analogPosition) {
      cell.classList.add('analogScale')
    }
    grid.appendChild(cell)
    cells.push(cell)
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (eaterPosition === cells.length - 1) {
        return
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition += 1
      cells[eaterPosition].classList.add('eater')
    } else if (event.key === 'ArrowLeft') {
      if (eaterPosition === 0) {
        return
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition -= 1
      cells[eaterPosition].classList.add('eater')
      console.log(eaterPosition)
      console.log(eaterPosition % width)

    } else if (event.key === 'ArrowUp') {
      if (eaterPosition < width) {
        return
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition -= width
      cells[eaterPosition].classList.add('eater')
    } else if (event.key === 'ArrowDown') {
      if (eaterPosition > cells.length - width - 1) {
        return
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition += width
      cells[eaterPosition].classList.add('eater')
    }
  })
  let analogPath = []
  let distance = Math.abs(analogPosition - eaterPosition)
  console.log(distance)
  while (distance < 15) {
    chase ()
    break
  } 



}


window.addEventListener('DOMContentLoaded', main)