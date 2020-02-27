function main() {
  const height = 15
  const width = 15
  const gridCellCount = height * width
  const grid = document.querySelector('.grid')
  const cells = []
  const junctions = [16, 19, 25, 28, 46, 49, 55, 58, 76, 79, 82, 85, 88, 106, 112, 118, 136, 139, 142, 145, 148, 169, 172, 175, 196, 199, 202, 205, 208]
  const walls = []
  let eaterPosition = 112
  let scale1Position = 22
  let scale1PositionDirection = 'right'
  let scaleMove = 1
  let scale1Path = []
  let eaterPath = []
  // DIRECTION ARRAYS
  const directionLeft = ['up', 'right', 'down']
  const directionRight = ['up', 'left', 'down']
  const directionUp = ['left', 'right', 'down']
  const directionDown = ['up', 'right', 'left']
  const directionLeftRight = ['up', 'down']
  const directionLeftUp = ['right', 'down']
  const directionLeftDown = ['right', 'up']
  const directionRightUp = ['left', 'down']
  const directionRightDown = ['left', 'up']
  const directionUpDown = ['up', 'down']
  // DIRECTIONS
  const up = scale1Position - width
  const down = scale1Position + width
  const right = scale1Position + 1
  const left = scale1Position - 1

  // FUNCTIONS FOR RANDOM DIRECTIONS
  function randomButLeft() {
    const random = Math.floor(Math.random() * directionLeft.length)
    // console.log(random) 
    // console.log(direction[random])
    return directionLeft[random]
  }
  function randomButRight() {
    const random = Math.floor(Math.random() * directionRight.length)
    return directionRight[random]
  }
  function randomButUp() {
    const random = Math.floor(Math.random() * directionUp.length)
    return directionUp[random]
  }
  function randomButDown() {
    const random = Math.floor(Math.random() * directionDown.length)
    return directionDown[random]
  }
  function randomButLeftRight() {
    const random = Math.floor(Math.random() * directionLeftRight.length)
    return directionLeftRight[random]
  }
  function randomButLeftUp() {
    const random = Math.floor(Math.random() * directionLeftUp.length)
    return directionLeftUp[random]
  }
  function randomButLeftDown() {
    const random = Math.floor(Math.random() * directionLeftDown.length)
    return directionLeftDown[random]
  }
  function randomButRightUp() {
    const random = Math.floor(Math.random() * directionRightUp.length)
    return directionRightUp[random]
  }
  function randomButRightDown() {
    const random = Math.floor(Math.random() * directionRightDown.length)
    return directionRightDown[random]
  }
  function randomButUpDown() {
    const random = Math.floor(Math.random() * directionUpDown.length)
    return directionUpDown[random]
  }
  function scale1Chase() {
    setInterval(() => {
      if (scale1PositionDirection === 'right') {
        if (junctions.includes(scale1Position)) {
          if (cells[scale1Position - width].classList.contains('walls')) {

            scale1PositionDirection = randomButUp()
            console.log('but up')
            return 
          }
          // } else if (cells[scale1Position - width].classList.contains('walls')) {
          //   scale1PositionDirection = randomDirection()
          // }
        } else {

          cells[scale1Position].classList.remove('scale1')
          scale1Position++
          cells[scale1Position].classList.add('scale1')
        }

      } else if (scale1PositionDirection === 'left') {
        if (junctions.includes(scale1Position)) {
          if (cells[scale1Position - 1].classList.contains('walls')) {

            scale1PositionDirection = randomButLeft()
            console.log('but left')
            return 
          }
          // } else if (cells[scale1Position - width].classList.contains('walls')) {
          //   scale1PositionDirection = randomDirection()
          // }
        } else {

          cells[scale1Position].classList.remove('scale1')
          scale1Position--
          cells[scale1Position].classList.add('scale1')
        }
      } else if (scale1PositionDirection === 'up') {
        if (junctions.includes(scale1Position)) {
          if (cells[scale1Position - width].classList.contains('walls')) {

            scale1PositionDirection = randomButDown()
          }
          // } else if (cells[scale1Position - width].classList.contains('walls')) {
          //   scale1PositionDirection = randomDirection()
          // }
        } else {

          cells[scale1Position].classList.remove('scale1')
          scale1Position -= width
          cells[scale1Position].classList.add('scale1')
        }


      } else if (scale1PositionDirection === 'down') {
        if (junctions.includes(scale1Position)) {
          if (cells[scale1Position + width].classList.contains('walls')) {

            scale1PositionDirection = randomButDown()
          }
          // } else if (cells[scale1Position - width].classList.contains('walls')) {
          //   scale1PositionDirection = randomDirection()
          // }
        } else {

          cells[scale1Position].classList.remove('scale1')
          scale1Position += width
          cells[scale1Position].classList.add('scale1')
        }
      }

    }, 300)
  }
  scale1Chase()


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
  // SET INTERVAL SCALE 1
  // const scale1Interval = setInterval(() => {
  //   if (scale1Position === 0) {
  //     clearInterval(scale1Interval)
  //     return
  //   }
  // SCALE1 COLLISION WITH EATER 
  // if (cells[scale1Position + 1].classList.contains('eater') || cells[scale1Position - 1].classList.contains('eater') || cells[scale1Position + width].classList.contains('eater') || cells[scale1Position - width].classList.contains('eater')) {
  //   cells[eaterPosition].classList.remove('eater')
  //   eaterPosition = 112
  //   cells[112].classList.add('eater')
  // }


  // cells[scale1Position].classList.remove('scale1')
  // // cells[scale1Position].classList.add('fries')
  // scale1Position -= scaleMove
  // // cells[scale1Position].classList.remove('fries')
  // cells[scale1Position].classList.add('scale1')







  //   let currentDirection = left

  //   function scale1Move() {
  //     let newDirection = randomDirection()
  //     if ((currentDirection === left || currentDirection === right) && (cells[scale1Position + 1].classList.contains('path') || cells[scale1Position + 1].classList.contains('empty') || cells[scale1Position + 1].classList.contains('fries') || cells[scale1Position - 1].classList.contains('path') || cells[scale1Position - 1].classList.contains('empty') || cells[scale1Position - 1].classList.contains('fries'))
  //       ||
  //       ((currentDirection === up || currentDirection === down) && (cells[scale1Position + width].classList.contains('path') || cells[scale1Position + width].classList.contains('fries') || cells[scale1Position - width].classList.contains('path') || cells[scale1Position - width].classList.contains('empty') || cells[scale1Position - 1].classList.contains('walls')))) {
  //       while (newDirection === currentDirection) {
  //         console.log(newDirection, currentDirection)
  //         newDirection = randomDirection()
  //       }
  //       currentDirection = newDirection
  //     }
  //     if (currentDirection === left && (cells[scale1Position - 1].classList.contains('path') || cells[scale1Position - 1].classList.contains('empty') || cells[scale1Position - 1].classList.contains('fries'))) {
  //       scale1Position--
  //     } else if (currentDirection === right && (cells[scale1Position + 1].classList.contains('path') || cells[scale1Position + 1].classList.contains('empty') || cells[scale1Position + 1].classList.contains('fries'))) {
  //       scale1Position++
  //     } else if (currentDirection === down && (cells[scale1Position + width].classList.contains('path') || cells[scale1Position + width].classList.contains('empty') || cells[scale1Position + width].classList.contains('fries'))) {
  //       scale1Position++
  //     } else if (currentDirection === up && (cells[scale1Position - width].classList.contains('path') || cells[scale1Position - width].classList.contains('empty') || cells[scale1Position - width].classList.contains('fries'))) {
  //       scale1Position--
  //     }
  //   }

  //   scale1Move()
  // }, 500)

  // SCALE1 SETINTERVAL 300
  // function scale1Chase() {
  //   setInterval(() => {
  //     if (scale1PositionDirection === 'right') {
  //       if (scale1Position === 25) {
  //         scale1PositionDirection = randomDirection()
  //         if (cells[scale1Position + 1].classList.contains('walls')) {
  //           scale1PositionDirection = randomDirection()
  //         } else if (cells[scale1Position - width].classList.contains('walls')) {
  //           scale1PositionDirection = randomDirection()
  //         }
  //       } else {
  //         cells[scale1Position].classList.remove('scale1')
  //         scale1Position++
  //         cells[scale1Position].classList.add('scale1')
  //       }
  //     } else if (scale1PositionDirection === 'left') {
  //       if (scale1Position === 19) {
  //         scale1PositionDirection = coords()
  //       } else if (cells[scale1Position - 1].classList.contains('walls')) {
  //         scale1PositionDirection = coords()
  //         return
  //       } else {
  //         cells[scale1Position].classList.remove('scale1')
  //         scale1Position--
  //         cells[scale1Position].classList.add('scale1')
  //       }
  //     } else if (scale1PositionDirection === 'up') {
  //       if (scale1Position === 19) {
  //         scale1PositionDirection = coords()
  //       } else if (cells[scale1Position - width].classList.contains('walls')) {
  //         scale1PositionDirection = coords()
  //         return
  //       } else {
  //         cells[scale1Position].classList.remove('scale1')
  //         scale1Position -= width
  //         cells[scale1Position].classList.add('scale1')
  //       }
  //     } else if (scale1PositionDirection === 'down') {
  //       if (scale1Position === 19) {
  //         scale1PositionDirection = coords()
  //       } else if (cells[scale1Position + width].classList.contains('walls')) {
  //         scale1PositionDirection = coords()
  //         return
  //       } else {
  //         cells[scale1Position].classList.remove('scale1')
  //         scale1Position += width
  //         cells[scale1Position].classList.add('scale1')
  //       }
  //     }
  //   }, 300)
  // }
  // scale1Chase()


  // FIXED PATH
  //   if (eaterPosition <= scale1Zone) {
  //     return coords
  //   }
  //   if (scale1Position === 19 && cells[scale1Position].classList.contains('path')) {
  //     scaleMove = -width
  //   }
  //   if (scale1Position === 79) {
  //     scaleMove = -1
  //   }
  //   if (scale1Position === 82) {
  //     scaleMove = -15
  //   }
  //   if (scale1Position === 112) {
  //     scaleMove = 1
  //   }
  //   if (scale1Position === 106) {
  //     scaleMove = width
  //   }
  //   if (scale1Position === 76) {
  //     scaleMove = -1
  //   }

  // }, 500)



  // cells[scale1Position].classList.add('fries')

  // if (cells[scale1Position - 1].classList.contains('walls') || scale1Position === width) {
  //   cells[scale1Position].classList.add('scale1')
  //   return
  // }
  // } if (scale1Position === scale1Path[length + 1]) {
  //   scale1Position += scaleMove + width
  // }

  // scale1Position -= scaleMove
  // scale1Path.push(scale1Position)



  // if (cells[scale1Position - 1].classList.contains('walls')) {
  //   cells[scale1Position].classList.remove('scale1')
  //   cells[scale1Position].classList.add('fries')
  //   scale1Position += scaleMove
  //   cells[scale1Position + 1].classList.remove('fries')
  //   cells[scale1Position + 1].classList.add('scale1')
  //   console.log('there is a wall behind')
  // } else if (cells[scale1Position + 1].classList.contains('walls')) {
  //   cells[scale1Position].classList.remove('scale1')
  //   cells[scale1Position].classList.add('fries')
  //   scale1Position -= 1
  //   cells[scale1Position - 1].classList.remove('fries')
  //   cells[scale1Position - 1].classList.add('scale1')
  //   console.log('there is a wall ahead')
  // } else if (cells[scale1Position].classList.remove('scale1')) {
  //   cells[scale1Position].classList.add('fries')
  //   scale1Position -= width
  //   cells[scale1Position - width].classList.remove('fries')
  //   cells[scale1Position - width].classList.add('scale1')
  //   console.log('plain sailing')
  //   // } if (cells[scale1Position - width].classList.contains('walls')) {
  //   //     
  // } else {
  //   // cells[scale1Position].classList.remove('scale1')
  //   cells[scale1Position].classList.add('fries')
  //   scale1Position += width
  //   cells[scale1Position + width].classList.remove('fries')
  //   cells[scale1Position + width].classList.add('scale1')
  //   console.log('there is a wall behind')

  // }

  // }, 500)


  // DRAWING A GRID 
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (!cell.classList.contains('wall')) {
      cell.classList.add('path')
    }
    // if (cell.classList.contains('path')) {
    //   cell.classList.add('fries')
    // }

    // // BORDER WALLS
    while (i <= width - 1 || i === width || i === width * 2 - 1 || i === width * 3 || i === width * 4 - 1 || i === width * 5 || i === width * 6 - 1 || i === width * 6 || i === width * 7 - 1 || i === width * 7 || i === width * 8 - 1 || i === width * 8 || i === width * 9 - 1 || i === width * 9 || i === width * 10 - 1 || i >= width * 14) {
      cell.classList.remove('fries')
      cell.classList.remove('path')
      cell.classList.add('walls')
      break
    }
    // CORNERS OF THE MAP
    if (i === 0) {
      cell.classList.add('wallTopLeftCorner')
    }
    if (i === width - 1) {
      cell.classList.add('wallTopRightCorner')
    }
    if (i === width * 14) {
      cell.classList.add('wallBottomLeftCorner')
    }
    if (i === width * height - 1) {
      cell.classList.add('wallBottomRightsCorner')
    }
    // SCALE HOUSE 
    while (i >= 35 && i <= 36 || i >= 38 && i <= 39 || i === 50 || i === 54 || i >= 65 && i <= 69) {
      cell.classList.remove('fries')
      cell.classList.add('walls')
      break
    }
    // SCATTERED WALLS
    while (i === width * 2 || i >= width * 2 + 2 && i <= width * 2 + 3 || i >= width * 3 - 4 && i <= width * 3 - 3 || i === width * 3 - 1 || i === width * 4 || i >= width * 4 + 2 && i <= width * 4 + 3 || i >= width * 5 - 4 && i <= width * 5 - 3 || i === width * 5 - 1 || i >= width * 6 + 2 && i <= width * 6 + 6 || i >= width * 7 - 7 && i <= width * 7 - 3 || i >= width * 8 + 2 && i <= width * 8 + 6 || i >= width * 9 - 7 && i <= width * 9 - 3 || i === width * 10 || i === width * 11 - 1 || i >= width * 10 + 2 && i <= width * 10 + 3 || i >= width * 10 + 5 && i <= width * 10 + 6 || i >= width * 11 - 7 && i <= width * 11 - 6 || i >= width * 11 - 4 && i <= width * 11 - 3 || i === width * 11 || i >= width * 11 + 2 && i <= width * 11 + 3 || i >= width * 12 - 4 && i <= width * 12 - 3 || i === width * 12 - 1 || i === width * 12 || i >= width * 12 + 2 && i <= width * 12 + 3 || i >= width * 12 + 5 && i <= width * 12 + 6 || i >= width * 13 - 7 && i <= width * 13 - 6 || i >= width * 13 - 4 && i <= width * 13 - 3 || i === width * 13 - 1 || i === width * 13 || i === width * 14 - 1) {
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
    if (i === eaterPosition) {
      cell.classList.remove('fries')
      cell.classList.add('eater')
    }
    if (i === scale1Position) {
      cell.classList.remove('fries')
      cell.classList.add('scale1')
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
        cells[0].classList.remove('fries')
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
      cells[eaterPosition].classList.remove('fries')
      cells[eaterPosition].classList.add('eater')
      // LEFT ARROW
    } else if (event.key === 'ArrowLeft') {
      // PASSING FROM ONE END TO ANOTHER
      if (eaterPosition === 0) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition = width - 1
        cells[width - 1].classList.remove('fries')
        cells[width - 1].classList.add('eater')
      } if (eaterPosition === width * 14) {
        cells[eaterPosition].classList.remove('eater')
        eaterPosition += width - 1
        cells[width * 15 - 1].classList.remove('fries')
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
      cells[eaterPosition].classList.remove('fries')
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
      cells[eaterPosition].classList.remove('fries')
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
      cells[eaterPosition].classList.remove('fries')
      cells[eaterPosition].classList.add('eater')
    }
  })

}

window.addEventListener('DOMContentLoaded', main)