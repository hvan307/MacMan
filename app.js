function main() {
  const height = 15
  const width = 15
  const gridCellCount = height * width
  const grid = document.querySelector('.grid')
  const cells = []
  let eaterPosition = 127
  let scale1Position = 22

  const up = height - 1
  const right = width + 1
  const down = height + 1
  const left = width - 1


  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (i === eaterPosition) {
      cell.classList.add('eater')
    }
    if (i === scale1Position) {
      cell.classList.add('scale1')
    }
    if (i !== eaterPosition && i !== scale1Position) {
      cell.classList.add('fries')
    }
    grid.appendChild(cell)
    cells.push(cell)
  }
  const scale1Interval = setInterval(() => {
    if (scale1Position === 0) {
      clearInterval(scale1Interval)
      return
    }
    cells[scale1Position].classList.remove('scale1')
    scale1Position -= 1
    cells[scale1Position].classList.add('scale1')
  }, 100)

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (eaterPosition === cells.length - 1) {
        return
      }
      //  } if (eaterPosition === width || eaterPosition === ) {
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
  let scale1Coordinates = []
  function coordinates() {
    console.log('eater position:', eaterPosition)
    const eaterX = (eaterPosition + 1) % width
    console.log('eater X:', eaterX)
    const eaterY = ((eaterPosition + 1) - eaterX) / width
    console.log('eater Y:', eaterY)
    eaterCoordinates.push(eaterX, eaterY)
    const scale1X = (scale1Position + 1) % width
    const scale1Y = ((scale1Position + 1) - scale1X) / width
    scale1Coordinates.push(scale1X, scale1Y)
  }
  coordinates()
  console.log(eaterCoordinates)

  // SCALE 1 
  let direction = 0
  function randomDirection() {
    const moves = (direction === left || direction === right) ?
      [up, down] : [left, right]
    return moves[Math.floor(Math.random() * 2)]
  }

  console.log(randomDirection)









}


window.addEventListener('DOMContentLoaded', main)