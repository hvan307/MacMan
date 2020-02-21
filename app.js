function main() {
  const height = 15
  const width = 15
  const gridCellCount = height * width
  const grid = document.querySelector('.grid')
  const cells = []
  let eaterPosition = 2
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
      //  } if (eaterPosition === width) {
      //   cells[eaterPosition].classList.remove('eater')
      // block pacman from going down a row and make him go off the grid and appear on the opposite end of the row instead
      // eaterPosition -= width
      // cells[eaterPosition].classList.add('eater')
      // return

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

  let eaterCoordinates = []
  let analogCoordinates = []
  function coordinates() {
    console.log('eater position:', eaterPosition)
    const eaterX = (eaterPosition + 1) % width
    console.log('eater X:', eaterX)
    const eaterY = ((eaterPosition + 1) - eaterX) / width
    console.log('eater Y:', eaterY)
    eaterCoordinates.push(eaterX, eaterY)
    const analogX = (analogPosition + 1) % width
    const analogY = ((analogPosition + 1) - analogX) / width
    analogCoordinates.push(analogX, analogY)
  }
  coordinates()
  console.log(eaterCoordinates)





}


window.addEventListener('DOMContentLoaded', main)