function main() {
  const height = 15
  const width = 15
  const gridCellCount = height * width
  const grid = document.querySelector('.grid')
  const cells = []
  const junctions = [16, 19, 25, 28, 46, 49, 55, 58, 76, 79, 82, 85, 88, 106, 112, 118, 136, 139, 142, 145, 148, 169, 172, 175, 196, 199, 202, 205, 208]
  const walls = []
  let eaterPosition = 112
  let scale1Position = 16
  let scale1PositionDirection = 'right'
  let scale2Position = 28
  let scale2PositionDirection = 'right'
  let scale3Position = 196
  let scale3PositionDirection = 'right'
  let scale4Position = 208
  let scale4PositionDirection = 'left'
  // DIRECTION ARRAYS
  const direction = ['up', 'right', 'down', 'left']
  const directionButLeft = ['up', 'right', 'down']
  const directionButRight = ['up', 'left', 'down']
  const directionButUp = ['left', 'right', 'down']
  const directionButDown = ['up', 'right', 'left']
  const directionButLeftRight = ['up', 'down']
  const directionButLeftUp = ['right', 'down']
  const directionButLeftDown = ['right', 'up']
  const directionButRightUp = ['left', 'down']
  const directionButRightDown = ['left', 'up']
  const directionButUpDown = ['right', 'left']
  // DIRECTIONS
  // const up = scale1Position - width
  // const down = scale1Position + width
  // const right = scale1Position + 1
  // const left = scale1Position - 1

  // COORDINATES FOR CHASING PACMAN
  function coords(input) {
    const eaterX = eaterPosition % width
    const eaterY = (eaterPosition - eaterX) / width

    const scale1X = input % width
    const scale1Y = (input - scale1X) / width

    if (scale1X < eaterX) {
      return 'right'
    } else if (scale1X > eaterX) {
      return 'left'
    } else if (scale1Y < eaterY) {
      return 'down'
    } else if (scale1Y > eaterY) {
      return 'up'
    }
  }
  console.log(scale1Position)

  // FUNCTIONS FOR RANDOM DIRECTIONS
  function randomDirection() {
    const random = Math.floor(Math.random() * direction.length)
    return direction[random]
  }

  function randomButLeft() {
    const random = Math.floor(Math.random() * directionButLeft.length)
    // console.log(random) 
    // console.log(direction[random])
    return directionButLeft[random]
  }
  function randomButRight() {
    const random = Math.floor(Math.random() * directionButRight.length)
    return directionButRight[random]
  }
  function randomButUp() {
    const random = Math.floor(Math.random() * directionButUp.length)
    // console.log(directionButUp[random])
    return directionButUp[random]
  }
  function randomButDown() {
    const random = Math.floor(Math.random() * directionButDown.length)
    return directionButDown[random]
  }
  function randomButLeftRight() {
    const random = Math.floor(Math.random() * directionButLeftRight.length)
    return directionButLeftRight[random]
  }
  function randomButLeftUp() {
    const random = Math.floor(Math.random() * directionButLeftUp.length)
    return directionButLeftUp[random]
  }
  function randomButLeftDown() {
    const random = Math.floor(Math.random() * directionButLeftDown.length)
    return directionButLeftDown[random]
  }
  function randomButRightUp() {
    const random = Math.floor(Math.random() * directionButRightUp.length)
    return directionButRightUp[random]
  }
  function randomButRightDown() {
    const random = Math.floor(Math.random() * directionButRightDown.length)
    return directionButRightDown[random]
  }
  function randomButUpDown() {
    const random = Math.floor(Math.random() * directionButUpDown.length)
    return directionButUpDown[random]
  }

  // SCALE1 MOVEMENTS
  function scale1Chase() {
    setInterval(() => {
      console.log(scale1PositionDirection)
      // CURRENT DIRECTION - LEFT
      if (scale1PositionDirection === 'left') {
        if (cells[scale1Position - 1].classList.contains('walls') && cells[scale1Position - width].classList.contains('walls')) {
          scale1PositionDirection = randomButLeftUp()
          return
        } else if (cells[scale1Position - 1].classList.contains('walls') && cells[scale1Position + width].classList.contains('walls')) {
          scale1PositionDirection = randomButLeftDown()
          return
        } else if (cells[scale1Position - 1].classList.contains('walls')) {
          scale1PositionDirection = randomButLeft()

          return
        } else if (cells[scale1Position - width].classList.contains('walls') && !cells[scale1Position - 1].classList.contains('walls')) {
          scale1PositionDirection = randomButRightUp()
          if (scale1PositionDirection === 'left') {
            cells[scale1Position].classList.remove('scale1')
            // cells[scale1Position].classList.add('food')
            scale1Position--
            // cells[scale1Position].classList.remove('food')
            cells[scale1Position].classList.add('scale1')
            return
          }
          return
        }
        cells[scale1Position].classList.remove('scale1')
        // cells[scale1Position].classList.add('food')
        scale1Position--
        // cells[scale1Position].classList.remove('food')
        cells[scale1Position].classList.add('scale1')
      } else if (scale1PositionDirection === 'right') {
        // CURRENT DIRECTION - RIGHT

        if (cells[scale1Position + 1].classList.contains('walls') && cells[scale1Position - width].classList.contains('walls')) {
          scale1PositionDirection = randomButRightUp()
          return
        } else if (cells[scale1Position + 1].classList.contains('walls') && cells[scale1Position + width].classList.contains('walls')) {
          scale1PositionDirection = randomButRightDown()
          return
        } else if (cells[scale1Position + 1].classList.contains('walls')) {
          scale1PositionDirection = randomButRight()
          return
        } else if (cells[scale1Position - width].classList.contains('walls') && !cells[scale1Position + width].classList.contains('walls')) {
          scale1PositionDirection = randomButLeftUp()
          if (scale1PositionDirection === 'right') {
            // cells[scale1Position].classList.remove('scale1')
            cells[scale1Position].classList.add('food')
            scale1Position++
            // cells[scale1Position].classList.remove('food')
            cells[scale1Position].classList.add('scale1')
            return
          }
          return
        }
        cells[scale1Position].classList.remove('scale1')
        // cells[scale1Position].classList.add('food')
        scale1Position++
        // cells[scale1Position].classList.remove('food')
        cells[scale1Position].classList.add('scale1')
      } else if (scale1PositionDirection === 'up') {
        // CURRENT DIRECTION - UP
        if (cells[scale1Position - 1].classList.contains('walls') && cells[scale1Position - width].classList.contains('walls')) {
          scale1PositionDirection = randomButLeftUp()
          return
        } else if (cells[scale1Position + 1].classList.contains('walls') && cells[scale1Position - width].classList.contains('walls')) {
          scale1PositionDirection = randomButRightUp()
          return
        } else if (cells[scale1Position - 1].classList.contains('walls') && !cells[scale1Position + 1].classList.contains('walls')) {
          scale1PositionDirection = randomButLeftDown()
          if (scale1PositionDirection === 'up') {
            cells[scale1Position].classList.remove('scale1')
            // cells[scale1Position].classList.add('food')
            scale1Position -= width
            // cells[scale1Position].classList.remove('food')
            cells[scale1Position].classList.add('scale1')
            return
          }
          return
        } else if (cells[scale1Position + 1].classList.contains('walls') && !cells[scale1Position - 1].classList.contains('walls')) {
          scale1PositionDirection = randomButRightDown()
          if (scale1PositionDirection === 'up') {
            cells[scale1Position].classList.remove('scale1')
            // cells[scale1Position].classList.add('food')
            scale1Position -= width
            // cells[scale1Position].classList.remove('food')
            cells[scale1Position].classList.add('scale1')
            return
          }
          return

        } else if (cells[scale1Position - width].classList.contains('walls')) {
          scale1PositionDirection = randomButUp()
          return
        }
        cells[scale1Position].classList.remove('scale1')
        // cells[scale1Position].classList.add('food')
        scale1Position -= width
        // cells[scale1Position].classList.remove('food')
        cells[scale1Position].classList.add('scale1')
        // CURRENT DIRECTION - DOWN
      } else if (scale1PositionDirection === 'down') {

        if (cells[scale1Position - 1].classList.contains('walls') && cells[scale1Position + width].classList.contains('walls')) {
          scale1PositionDirection = randomButLeftDown()
          return
        } else if (cells[scale1Position + 1].classList.contains('walls') && cells[scale1Position + width].classList.contains('walls')) {
          scale1PositionDirection = randomButRightDown()
          return
        } else if (cells[scale1Position - 1].classList.contains('walls') && !cells[scale1Position + 1].classList.contains('walls')) {
          scale1PositionDirection = randomButLeftUp()
          if (scale1PositionDirection === 'down') {
            cells[scale1Position].classList.remove('scale1')
            // cells[scale1Position].classList.add('food')
            scale1Position += width
            // cells[scale1Position].classList.remove('food')
            cells[scale1Position].classList.add('scale1')
            return
          }
          return 
        } else if (cells[scale1Position + 1].classList.contains('walls') && !cells[scale1Position - 1].classList.contains('walls')) {
          scale1PositionDirection = randomButRightUp()
          if (scale1PositionDirection === 'down') {
            cells[scale1Position].classList.remove('scale1')
            // cells[scale1Position].classList.add('food')
            scale1Position += width
            // cells[scale1Position].classList.remove('food')
            cells[scale1Position].classList.add('scale1')
            return
          }
          return
        } else if (cells[scale1Position + width].classList.contains('walls')) {
          scale1PositionDirection = randomButDown()
          return
        }
        cells[scale1Position].classList.remove('scale1')
        // cells[scale1Position].classList.add('food')
        scale1Position += width
        // cells[scale1Position].classList.remove('food')
        cells[scale1Position].classList.add('scale1')
        if (cells[scale1Position + 1] === eaterPosition || cells[scale1Position + width] === eaterPosition) {
          cells[scale1Position].classList.remove('eater')
          eaterPosition = 112
        }
      }
    }, 300)
  }
  scale1Chase()


  // DRAWING A GRID 
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (!cell.classList.contains('walls')) {
      cell.classList.add('food')
    }


    // // BORDER WALLS
    while (i <= width - 1 || i === width || i === width * 2 - 1 || i === width * 3 || i === width * 4 - 1 || i === width * 5 || i === width * 6 - 1 || i === width * 6 || i === width * 7 - 1 || i === width * 7 || i === width * 8 - 1 || i === width * 8 || i === width * 9 - 1 || i === width * 9 || i === width * 10 - 1 || i >= width * 14) {
      cell.classList.remove('food')
      cell.classList.add('walls')
      break
    }
   
    // SCATTERED WALLS
    while (i === width * 2 || i >= width * 2 + 2 && i <= width * 2 + 3 || i >= 35 && i <= 39 || i >= 65 && i <= 69 || i >= width * 3 - 4 && i <= width * 3 - 3 || i === width * 3 - 1 || i === width * 4 || i >= width * 4 + 2 && i <= width * 4 + 3 || i >= width * 5 - 4 && i <= width * 5 - 3 || i === width * 5 - 1 || i >= width * 6 + 2 && i <= width * 6 + 6 || i >= width * 7 - 7 && i <= width * 7 - 3 || i >= width * 8 + 2 && i <= width * 8 + 6 || i >= width * 9 - 7 && i <= width * 9 - 3 || i === width * 10 || i === width * 11 - 1 || i >= width * 10 + 2 && i <= width * 10 + 3 || i >= width * 10 + 5 && i <= width * 10 + 6 || i >= width * 11 - 7 && i <= width * 11 - 6 || i >= width * 11 - 4 && i <= width * 11 - 3 || i === width * 11 || i >= width * 11 + 2 && i <= width * 11 + 3 || i >= width * 12 - 4 && i <= width * 12 - 3 || i === width * 12 - 1 || i === width * 12 || i >= width * 12 + 2 && i <= width * 12 + 3 || i >= width * 12 + 5 && i <= width * 12 + 6 || i >= width * 13 - 7 && i <= width * 13 - 6 || i >= width * 13 - 4 && i <= width * 13 - 3 || i === width * 13 - 1 || i === width * 13 || i === width * 14 - 1) {
      cell.classList.remove('food')
      cell.classList.add('walls')
      break
    }
    if (i === scale1Position) {
      cell.classList.remove('food')
      cell.classList.add('scale1')
    }
    if (i === scale2Position) {
      cell.classList.remove('food')
      cell.classList.add('scale2')
    }
    if (i === scale3Position) {
      cell.classList.remove('food')
      cell.classList.add('scale3')
    }
    if (i === scale4Position) {
      cell.classList.remove('food')
      cell.classList.add('scale4')
    }
    if (i === eaterPosition) {
      cell.classList.remove('food')
      cell.classList.add('eater')
    }
    grid.appendChild(cell)
    cells.push(cell)
  }
  // EVENT LISTENER - KEYS
  document.addEventListener('keydown', (event) => {
    // RIGHT ARROW
    if (event.key === 'ArrowRight') {
      // PASSING FROM ONE END TO ANOTHER
      if (eaterPosition === cells.length - 1) {
        cells[cells.length - 1].classList.remove('eater')
        eaterPosition = (cells.length - 1) - width
      } if (eaterPosition === width - 1) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition -= width - 1
        cells[0].classList.remove('food')
        cells[0].classList.add('eater')
      }
      if (eaterPosition === width * 2 - 1 || eaterPosition === width * 4 - 1 || eaterPosition === width * 6 - 1 || eaterPosition === width * 7 - 1 || eaterPosition === width * 8 - 1 || eaterPosition === width * 9 - 1 || eaterPosition === width * 10 - 1) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition -= width
        cells[eaterPosition].classList.add('eater')
      }
      // CHECKING FOR WALLS AND SCALES
      if (cells[eaterPosition + 1].classList.contains('walls')) {
        return
      } if (cells[eaterPosition + 1].classList.contains('scale1')) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition = 112 - 1
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition += 1
      cells[eaterPosition].classList.remove('food')
      cells[eaterPosition].classList.add('eater')
      // LEFT ARROW
    } else if (event.key === 'ArrowLeft') {
      // PASSING FROM ONE END TO ANOTHER
      if (eaterPosition === 0) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition = width - 1
        cells[width - 1].classList.remove('food')
        cells[width - 1].classList.add('eater')
      } if (eaterPosition === width * 14) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition += width - 1
        cells[width * 15 - 1].classList.remove('food')
        cells[width * 15 - 1].classList.add('eater')
      }
      if (eaterPosition === width || eaterPosition === width * 3 || eaterPosition === width * 5 || eaterPosition === width * 6 || eaterPosition === width * 7 || eaterPosition === width * 8 || eaterPosition === width * 9) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition += width
      }
      // CHECKING FOR WALLS AND SCALE1
      if (cells[eaterPosition - 1].classList.contains('walls')) {
        return
      } if (cells[eaterPosition - 1].classList.contains('scale1')) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition = 112 + 1
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition -= 1
      cells[eaterPosition].classList.remove('food')
      cells[eaterPosition].classList.add('eater')
      // UP ARROW
    } else if (event.key === 'ArrowUp') {
      // BLOCKING THE BORDER
      if (eaterPosition < width) {
        return
        // CHECKING FOR WALLS AND SCALE1
      } if (cells[eaterPosition - width].classList.contains('walls')) {
        return
      } if (cells[eaterPosition - width].classList.contains('scale1')) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition = 112
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition -= width
      cells[eaterPosition].classList.remove('food')
      cells[eaterPosition].classList.add('eater')
      // DOWN ARROW
    } else if (event.key === 'ArrowDown') {
      // BLOCKING THE BORDER
      if (eaterPosition > cells.length - width - 1) {
        return
        // CHECKING FOR WALLS AND SCALE1
      } if (cells[eaterPosition + width].classList.contains('walls')) {
        return
      } if (cells[eaterPosition + width].classList.contains('scale1')) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition = 112
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition += width
      cells[eaterPosition].classList.remove('food')
      cells[eaterPosition].classList.add('eater')
    }
  })

}

window.addEventListener('DOMContentLoaded', main)

