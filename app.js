function main() {
  const height = 15
  let width = 15
  const gridCellCount = height * width
  const grid = document.querySelector('.grid')
  const cells = []
  const scale1path = []
  const walls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  let eaterPosition = 127
  let scale1Position = 22


  const up = height - 1
  const right = width + 1
  const down = height + 1
  const left = width - 1
  const direction = [up, right, down, left]
  // SCALE 1 
  const randomDirection = direction[Math.floor(Math.random() * direction.length)]
  // const moves = (!cells.contains.classList('eater') || !cells.contains.classList('scale1')) ?
  //   [up, down] : [left, right]
  console.log(randomDirection)

  let eaterCoordinates = []
  let scale1Coordinates = []
  function coordinates() {
    console.log('eater position:', eaterPosition)
    const eaterX = (eaterPosition + 1) % width
    console.log('eater X:', eaterX)
    const eaterY = ((eaterPosition + 1) - eaterX) / width
    console.log('eater Y:', eaterY)
    eaterCoordinates.push(eaterX, eaterY)
    console.log('eater coordinates:', eaterCoordinates)
    console.log('scale1 position:', scale1Position)
    const scale1X = (scale1Position + 1) % width
    console.log('scale1 X:', scale1X)
    const scale1Y = ((scale1Position + 1) - scale1X) / width
    console.log('scale1 Y:', scale1Y)
    scale1Coordinates.push(scale1X, scale1Y)
    console.log('scale1 coordinates:', scale1Coordinates)
  }
  coordinates()




  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.classList.add('fries')

    if (i === eaterPosition) {
      cell.classList.remove('fries')
      cell.classList.add('eater')
    }
    if (i === scale1Position) {
      cell.classList.add('scale1')
    }
    while (i !== 0 && i < width - 1 || i !== width * 15 - 1 && i > width * 15 - width) {
      cell.classList.remove('fries')
      cell.classList.add('walls')
      break
    }
    while (i >= 35 && i <= 36 || i >= 38 && i <= 39 || i === 50 || i === 54 || i >= 65 && i <= 69) {
      cell.classList.remove('fries')
      cell.classList.add('walls')
      break
    }
    while (i === width * 2 || i >= width * 2 + 2 && i <= width * 2 + 3 || i >= width * 3 - 4 && i <= width * 3 - 3 || i === width * 3 - 1 || i === width * 4 || i >= width * 4 + 2 && i <= width * 4 + 3 || i >= width * 5 - 4 && i <= width * 5 - 3 || i === width * 5 - 1 ) {
      cell.classList.remove('fries')
      cell.classList.add('walls')
      break
    }
    if (i === 37) {
      cell.classList.remove('fries')
    }
    if (i === 51) {
      cell.classList.remove('fries')
      cell.classList.add('scale2')
    }
    if (i === 52) {
      cell.classList.remove('fries')
      cell.classList.add('scale3')
    }
    if (i === 53) {
      cell.classList.remove('fries')
      cell.classList.add('scale4')
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
    cells[scale1Position].classList.add('fries')
    scale1Position -= 1
    cells[scale1Position].classList.remove('fries')
    cells[scale1Position].classList.add('scale1')

  }, 100)

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (eaterPosition === cells.length - 1) {
        cells[cells.length - 1].classList.remove('eater')
        eaterPosition = (cells.length - 1) - width
      }
      // } if (eaterPosition.contains('wall')) {
      //   return
      // }

      cells[eaterPosition].classList.remove('eater')
      eaterPosition += 1
      cells[eaterPosition].classList.remove('fries')
      cells[eaterPosition].classList.add('eater')
    } else if (event.key === 'ArrowLeft') {
      if (eaterPosition === 0) {
        cells[0].classList.remove('eater')
        eaterPosition = 0 + width
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition -= 1
      cells[eaterPosition].classList.remove('fries')
      cells[eaterPosition].classList.add('eater')

    } else if (event.key === 'ArrowUp') {
      if (eaterPosition < width) {
        return
      }
      // } if (cells[eaterPosition].contains('wall')) {
      //   return 
      // }

      cells[eaterPosition].classList.remove('eater')
      eaterPosition -= width
      cells[eaterPosition].classList.remove('fries')
      cells[eaterPosition].classList.add('eater')
    } else if (event.key === 'ArrowDown') {
      if (eaterPosition > cells.length - width - 1) {
        return
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition += width
      cells[eaterPosition].classList.remove('fries')
      cells[eaterPosition].classList.add('eater')
    }
  })

  // for (let i = 0; i < walls.length; i++) {
  //   walls[i].classList.add('walls')
  // }

  // function map() {
  //   if (height = 1) 
  // }



}


window.addEventListener('DOMContentLoaded', main)