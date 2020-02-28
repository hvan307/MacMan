function main() {
  // MAP
  const height = 15
  const width = 15
  const gridCellCount = height * width
  const grid = document.querySelector('.grid')
  const cells = []
  // ELEMENTS POSITIONS
  let eaterPosition = 112
  let scale1Position = 16
  let scale1PositionDirection = 'right'
  let scale2Position = 28
  let scale2PositionDirection = 'left'
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
  coords(scale1Position)
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
      // SCALE1 AND EATER COLLISION
      if (scale1Position === eaterPosition) {
        cells[eaterPosition].classList.remove('eater')
        setTimeout(() => {
          eaterPosition = 112
          cells[eaterPosition].classList.add('eater')
        }, 100)
      }
      // SCALES COLLISIONS
      if (cells[scale1Position + 1] === scale2Position || cells[scale1Position + 1] === scale3Position || cells[scale1Position + 1] === scale4Position) {
        return
      }

      // RANDOM DIRECTION MODE

      // CURRENT DIRECTION - LEFT
      if (scale1PositionDirection === 'left') {
        // CHECKS FOR WALL CLASHES
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
            scale1Position--
            cells[scale1Position].classList.add('scale1')
            return
          }
          return
        }
        cells[scale1Position].classList.remove('scale1')
        scale1Position--
        cells[scale1Position].classList.add('scale1')
        // CURRENT DIRECTION - RIGHT
      } else if (scale1PositionDirection === 'right') {
        // CHECKS FOR WALL CLASHES
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
            cells[scale1Position].classList.remove('scale1')
            scale1Position++
            cells[scale1Position].classList.add('scale1')
            return
          }
          return
        }
        cells[scale1Position].classList.remove('scale1')
        scale1Position++
        cells[scale1Position].classList.add('scale1')
        // CURRENT DIRECTION - UP
      } else if (scale1PositionDirection === 'up') {
        // CHECKS FOR WALL CLASHES
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
            scale1Position -= width
            cells[scale1Position].classList.add('scale1')
            return
          }
          return
        } else if (cells[scale1Position + 1].classList.contains('walls') && !cells[scale1Position - 1].classList.contains('walls')) {
          scale1PositionDirection = randomButRightDown()
          if (scale1PositionDirection === 'up') {
            cells[scale1Position].classList.remove('scale1')
            scale1Position -= width
            cells[scale1Position].classList.add('scale1')
            return
          }
          return

        } else if (cells[scale1Position - width].classList.contains('walls')) {
          scale1PositionDirection = randomButUp()
          return
        }
        cells[scale1Position].classList.remove('scale1')
        scale1Position -= width
        cells[scale1Position].classList.add('scale1')
        // CURRENT DIRECTION - DOWN
      } else if (scale1PositionDirection === 'down') {
        // CHECKS FOR WALL CLASHES
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
            scale1Position += width
            cells[scale1Position].classList.add('scale1')
            return
          }
          return
        } else if (cells[scale1Position + 1].classList.contains('walls') && !cells[scale1Position - 1].classList.contains('walls')) {
          scale1PositionDirection = randomButRightUp()
          if (scale1PositionDirection === 'down') {
            cells[scale1Position].classList.remove('scale1')
            scale1Position += width
            cells[scale1Position].classList.add('scale1')
            return
          }
          return
        } else if (cells[scale1Position + width].classList.contains('walls')) {
          scale1PositionDirection = randomButDown()
          return
        }
        cells[scale1Position].classList.remove('scale1')
        scale1Position += width
        cells[scale1Position].classList.add('scale1')
      }
    }, 200)
  }
  scale1Chase()

  // SCALE2 MOVEMENTS
  function scale2Chase() {
    setInterval(() => {
      // When Scale2 catches Eater
      if (scale2Position === eaterPosition) {
        cells[eaterPosition].classList.remove('eater')
        setTimeout(() => {
          eaterPosition = 112
          cells[eaterPosition].classList.add('eater')
        }, 100)
      }
      if (cells[scale2Position + 1] === scale1Position || cells[scale2Position + 1] === scale3Position || cells[scale2Position + 1] === scale4Position) {
        return
      }
      // CURRENT DIRECTION - LEFT
      if (scale2PositionDirection === 'left') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale2Position - 1].classList.contains('walls') && cells[scale2Position - width].classList.contains('walls')) {
          scale2PositionDirection = randomButLeftUp()
          return
        } else if (cells[scale2Position - 1].classList.contains('walls') && cells[scale2Position + width].classList.contains('walls')) {
          scale2PositionDirection = randomButLeftDown()
          return
        } else if (cells[scale2Position - 1].classList.contains('walls')) {
          scale2PositionDirection = randomButLeft()
          return
        } else if (cells[scale2Position - width].classList.contains('walls') && !cells[scale2Position - 1].classList.contains('walls')) {
          scale2PositionDirection = randomButRightUp()
          if (scale2PositionDirection === 'left') {
            cells[scale2Position].classList.remove('scale2')
            scale2Position--
            cells[scale2Position].classList.add('scale2')
            return
          }
          return
        }
        cells[scale2Position].classList.remove('scale2')
        scale2Position--
        cells[scale2Position].classList.add('scale2')
        // CURRENT DIRECTION - RIGHT
      } else if (scale2PositionDirection === 'right') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale2Position + 1].classList.contains('walls') && cells[scale2Position - width].classList.contains('walls')) {
          scale2PositionDirection = randomButRightUp()
          return
        } else if (cells[scale2Position + 1].classList.contains('walls') && cells[scale2Position + width].classList.contains('walls')) {
          scale2PositionDirection = randomButRightDown()
          return
        } else if (cells[scale2Position + 1].classList.contains('walls')) {
          scale2PositionDirection = randomButRight()
          return
        } else if (cells[scale2Position - width].classList.contains('walls') && !cells[scale2Position + width].classList.contains('walls')) {
          scale2PositionDirection = randomButLeftUp()
          if (scale2PositionDirection === 'right') {
            cells[scale2Position].classList.remove('scale2')
            scale2Position++
            cells[scale2Position].classList.add('scale2')
            return
          }
          return
        }
        cells[scale2Position].classList.remove('scale2')
        scale2Position++
        cells[scale2Position].classList.add('scale2')
        // CURRENT DIRECTION - UP
      } else if (scale2PositionDirection === 'up') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale2Position - 1].classList.contains('walls') && cells[scale2Position - width].classList.contains('walls')) {
          scale2PositionDirection = randomButLeftUp()
          return
        } else if (cells[scale2Position + 1].classList.contains('walls') && cells[scale2Position - width].classList.contains('walls')) {
          scale2PositionDirection = randomButRightUp()
          return
        } else if (cells[scale2Position - 1].classList.contains('walls') && !cells[scale2Position + 1].classList.contains('walls')) {
          scale2PositionDirection = randomButLeftDown()
          if (scale2PositionDirection === 'up') {
            cells[scale2Position].classList.remove('scale2')
            scale2Position -= width
            cells[scale2Position].classList.add('scale2')
            return
          }
          return
        } else if (cells[scale2Position + 1].classList.contains('walls') && !cells[scale2Position - 1].classList.contains('walls')) {
          scale2PositionDirection = randomButRightDown()
          if (scale2PositionDirection === 'up') {
            cells[scale2Position].classList.remove('scale2')
            scale2Position -= width
            cells[scale2Position].classList.add('scale2')
            return
          }
          return

        } else if (cells[scale2Position - width].classList.contains('walls')) {
          scale2PositionDirection = randomButUp()
          return
        }
        cells[scale2Position].classList.remove('scale2')
        scale2Position -= width
        cells[scale2Position].classList.add('scale2')
        // CURRENT DIRECTION - DOWN
      } else if (scale2PositionDirection === 'down') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale2Position - 1].classList.contains('walls') && cells[scale2Position + width].classList.contains('walls')) {
          scale2PositionDirection = randomButLeftDown()
          return
        } else if (cells[scale2Position + 1].classList.contains('walls') && cells[scale2Position + width].classList.contains('walls')) {
          scale2PositionDirection = randomButRightDown()
          return
        } else if (cells[scale2Position - 1].classList.contains('walls') && !cells[scale2Position + 1].classList.contains('walls')) {
          scale2PositionDirection = randomButLeftUp()
          if (scale2PositionDirection === 'down') {
            cells[scale2Position].classList.remove('scale2')
            scale2Position += width
            cells[scale2Position].classList.add('scale2')
            return
          }
          return
        } else if (cells[scale2Position + 1].classList.contains('walls') && !cells[scale2Position - 1].classList.contains('walls')) {
          scale2PositionDirection = randomButRightUp()
          if (scale2PositionDirection === 'down') {
            cells[scale2Position].classList.remove('scale2')
            scale2Position += width
            cells[scale2Position].classList.add('scale2')
            return
          }
          return
        } else if (cells[scale2Position + width].classList.contains('walls')) {
          scale2PositionDirection = randomButDown()
          return
        }
        cells[scale2Position].classList.remove('scale2')
        scale2Position += width
        cells[scale2Position].classList.add('scale2')
      }
    }, 200)
  }
  scale2Chase()

  // SCALE3 MOVEMENTS
  function scale3Chase() {
    setInterval(() => {
      // When Scale3 catches Eater
      if (scale3Position === eaterPosition) {
        cells[eaterPosition].classList.remove('eater')
        setTimeout(() => {
          eaterPosition = 112
          cells[eaterPosition].classList.add('eater')
        }, 100)
      }
      if (cells[scale3Position + 1] === scale1Position || cells[scale3Position + 1] === scale2Position || cells[scale3Position + 1] === scale4Position) {
        return
      }
      // CURRENT DIRECTION - LEFT
      if (scale3PositionDirection === 'left') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale3Position - 1].classList.contains('walls') && cells[scale3Position - width].classList.contains('walls')) {
          scale3PositionDirection = randomButLeftUp()
          return
        } else if (cells[scale3Position - 1].classList.contains('walls') && cells[scale3Position + width].classList.contains('walls')) {
          scale3PositionDirection = randomButLeftDown()
          return
        } else if (cells[scale3Position - 1].classList.contains('walls')) {
          scale3PositionDirection = randomButLeft()
          return
        } else if (cells[scale3Position - width].classList.contains('walls') && !cells[scale3Position - 1].classList.contains('walls')) {
          scale3PositionDirection = randomButRightUp()
          if (scale3PositionDirection === 'left') {
            cells[scale3Position].classList.remove('scale3')
            scale3Position--
            cells[scale3Position].classList.add('scale3')
            return
          }
          return
        }
        cells[scale3Position].classList.remove('scale3')
        scale3Position--
        cells[scale3Position].classList.add('scale3')
        // CURRENT DIRECTION - RIGHT
      } else if (scale3PositionDirection === 'right') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale3Position + 1].classList.contains('walls') && cells[scale3Position - width].classList.contains('walls')) {
          scale3PositionDirection = randomButRightUp()
          return
        } else if (cells[scale3Position + 1].classList.contains('walls') && cells[scale3Position + width].classList.contains('walls')) {
          scale3PositionDirection = randomButRightDown()
          return
        } else if (cells[scale3Position + 1].classList.contains('walls')) {
          scale3PositionDirection = randomButRight()
          return
        } else if (cells[scale3Position - width].classList.contains('walls') && !cells[scale3Position + width].classList.contains('walls')) {
          scale3PositionDirection = randomButLeftUp()
          if (scale3PositionDirection === 'right') {
            cells[scale3Position].classList.remove('scale3')
            scale3Position++
            cells[scale3Position].classList.add('scale3')
            return
          }
          return
        }
        cells[scale3Position].classList.remove('scale3')
        scale3Position++
        cells[scale3Position].classList.add('scale3')
        // CURRENT DIRECTION - UP
      } else if (scale3PositionDirection === 'up') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale3Position - 1].classList.contains('walls') && cells[scale3Position - width].classList.contains('walls')) {
          scale3PositionDirection = randomButLeftUp()
          return
        } else if (cells[scale3Position + 1].classList.contains('walls') && cells[scale3Position - width].classList.contains('walls')) {
          scale3PositionDirection = randomButRightUp()
          return
        } else if (cells[scale3Position - 1].classList.contains('walls') && !cells[scale3Position + 1].classList.contains('walls')) {
          scale3PositionDirection = randomButLeftDown()
          if (scale3PositionDirection === 'up') {
            cells[scale3Position].classList.remove('scale3')
            scale3Position -= width
            cells[scale3Position].classList.add('scale3')
            return
          }
          return
        } else if (cells[scale3Position + 1].classList.contains('walls') && !cells[scale3Position - 1].classList.contains('walls')) {
          scale3PositionDirection = randomButRightDown()
          if (scale3PositionDirection === 'up') {
            cells[scale3Position].classList.remove('scale3')
            scale3Position -= width
            cells[scale3Position].classList.add('scale3')
            return
          }
          return

        } else if (cells[scale3Position - width].classList.contains('walls')) {
          scale3PositionDirection = randomButUp()
          return
        }
        cells[scale3Position].classList.remove('scale3')
        scale3Position -= width
        cells[scale3Position].classList.add('scale3')
        // CURRENT DIRECTION - DOWN
      } else if (scale3PositionDirection === 'down') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale3Position - 1].classList.contains('walls') && cells[scale3Position + width].classList.contains('walls')) {
          scale3PositionDirection = randomButLeftDown()
          return
        } else if (cells[scale3Position + 1].classList.contains('walls') && cells[scale3Position + width].classList.contains('walls')) {
          scale3PositionDirection = randomButRightDown()
          return
        } else if (cells[scale3Position - 1].classList.contains('walls') && !cells[scale3Position + 1].classList.contains('walls')) {
          scale3PositionDirection = randomButLeftUp()
          if (scale3PositionDirection === 'down') {
            cells[scale3Position].classList.remove('scale3')
            scale3Position += width
            cells[scale3Position].classList.add('scale3')
            return
          }
          return
        } else if (cells[scale3Position + 1].classList.contains('walls') && !cells[scale3Position - 1].classList.contains('walls')) {
          scale3PositionDirection = randomButRightUp()
          if (scale3PositionDirection === 'down') {
            cells[scale3Position].classList.remove('scale3')
            scale3Position += width
            cells[scale3Position].classList.add('scale3')
            return
          }
          return
        } else if (cells[scale3Position + width].classList.contains('walls')) {
          scale3PositionDirection = randomButDown()
          return
        }
        cells[scale3Position].classList.remove('scale3')
        scale3Position += width
        cells[scale3Position].classList.add('scale3')
      }
    }, 200)
  }
  scale3Chase()

  // SCALE4 MOVEMENTS
  function scale4Chase() {
    setInterval(() => {
      // When Scale4 catches Eater
      if (scale4Position === eaterPosition) {
        cells[eaterPosition].classList.remove('eater')
        setTimeout(() => {
          eaterPosition = 112
          cells[eaterPosition].classList.add('eater')
        }, 100)
      }
      if (cells[scale4Position + 1] === scale1Position || cells[scale4Position + 1] === scale2Position || cells[scale4Position + 1] === scale3Position) {
        return
      }
      // CURRENT DIRECTION - LEFT
      if (scale4PositionDirection === 'left') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale4Position - 1].classList.contains('walls') && cells[scale4Position - width].classList.contains('walls')) {
          scale4PositionDirection = randomButLeftUp()
          return
        } else if (cells[scale4Position - 1].classList.contains('walls') && cells[scale4Position + width].classList.contains('walls')) {
          scale4PositionDirection = randomButLeftDown()
          return
        } else if (cells[scale4Position - 1].classList.contains('walls')) {
          scale4PositionDirection = randomButLeft()
          return
        } else if (cells[scale4Position - width].classList.contains('walls') && !cells[scale4Position - 1].classList.contains('walls')) {
          scale4PositionDirection = randomButRightUp()
          if (scale4PositionDirection === 'left') {
            cells[scale4Position].classList.remove('scale4')
            scale4Position--
            cells[scale4Position].classList.add('scale4')
            return
          }
          return
        }
        cells[scale4Position].classList.remove('scale4')
        scale4Position--
        cells[scale4Position].classList.add('scale4')
        // CURRENT DIRECTION - RIGHT
      } else if (scale4PositionDirection === 'right') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale4Position + 1].classList.contains('walls') && cells[scale4Position - width].classList.contains('walls')) {
          scale4PositionDirection = randomButRightUp()
          return
        } else if (cells[scale4Position + 1].classList.contains('walls') && cells[scale4Position + width].classList.contains('walls')) {
          scale4PositionDirection = randomButRightDown()
          return
        } else if (cells[scale4Position + 1].classList.contains('walls')) {
          scale4PositionDirection = randomButRight()
          return
        } else if (cells[scale4Position - width].classList.contains('walls') && !cells[scale4Position + width].classList.contains('walls')) {
          scale4PositionDirection = randomButLeftUp()
          if (scale4PositionDirection === 'right') {
            cells[scale4Position].classList.remove('scale4')
            scale4Position++
            cells[scale4Position].classList.add('scale4')
            return
          }
          return
        }
        cells[scale4Position].classList.remove('scale4')
        scale4Position++
        cells[scale4Position].classList.add('scale4')
        // CURRENT DIRECTION - UP
      } else if (scale4PositionDirection === 'up') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale4Position - 1].classList.contains('walls') && cells[scale4Position - width].classList.contains('walls')) {
          scale4PositionDirection = randomButLeftUp()
          return
        } else if (cells[scale4Position + 1].classList.contains('walls') && cells[scale4Position - width].classList.contains('walls')) {
          scale4PositionDirection = randomButRightUp()
          return
        } else if (cells[scale4Position - 1].classList.contains('walls') && !cells[scale4Position + 1].classList.contains('walls')) {
          scale4PositionDirection = randomButLeftDown()
          if (scale4PositionDirection === 'up') {
            cells[scale4Position].classList.remove('scale4')
            scale4Position -= width
            cells[scale4Position].classList.add('scale4')
            return
          }
          return
        } else if (cells[scale4Position + 1].classList.contains('walls') && !cells[scale4Position - 1].classList.contains('walls')) {
          scale4PositionDirection = randomButRightDown()
          if (scale4PositionDirection === 'up') {
            cells[scale4Position].classList.remove('scale4')
            scale4Position -= width
            cells[scale4Position].classList.add('scale4')
            return
          }
          return

        } else if (cells[scale4Position - width].classList.contains('walls')) {
          scale4PositionDirection = randomButUp()
          return
        }
        cells[scale4Position].classList.remove('scale4')
        scale4Position -= width
        cells[scale4Position].classList.add('scale4')
        // CURRENT DIRECTION - DOWN
      } else if (scale4PositionDirection === 'down') {
        // CHECKS FOR WALL CLASHES
        if (cells[scale4Position - 1].classList.contains('walls') && cells[scale4Position + width].classList.contains('walls')) {
          scale4PositionDirection = randomButLeftDown()
          return
        } else if (cells[scale4Position + 1].classList.contains('walls') && cells[scale4Position + width].classList.contains('walls')) {
          scale4PositionDirection = randomButRightDown()
          return
        } else if (cells[scale4Position - 1].classList.contains('walls') && !cells[scale4Position + 1].classList.contains('walls')) {
          scale4PositionDirection = randomButLeftUp()
          if (scale4PositionDirection === 'down') {
            cells[scale4Position].classList.remove('scale4')
            scale4Position += width
            cells[scale4Position].classList.add('scale4')
            return
          }
          return
        } else if (cells[scale4Position + 1].classList.contains('walls') && !cells[scale4Position - 1].classList.contains('walls')) {
          scale4PositionDirection = randomButRightUp()
          if (scale4PositionDirection === 'down') {
            cells[scale4Position].classList.remove('scale4')
            scale4Position += width
            cells[scale4Position].classList.add('scale4')
            return
          }
          return
        } else if (cells[scale4Position + width].classList.contains('walls')) {
          scale4PositionDirection = randomButDown()
          return
        }
        cells[scale4Position].classList.remove('scale4')
        scale4Position += width
        cells[scale4Position].classList.add('scale4')
      }
    }, 200)
  }
  scale4Chase()

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
    while (i === width * 2 || i >= width * 2 + 2 && i <= width * 2 + 3 || i >= width * 2 + 5 && i <= width * 2 + 9 || i >= width * 4 + 5 && i <= width * 4 + 9 || i >= width * 3 - 4 && i <= width * 3 - 3 || i === width * 3 - 1 || i === width * 4 || i >= width * 4 + 2 && i <= width * 4 + 3 || i >= width * 5 - 4 && i <= width * 5 - 3 || i === width * 5 - 1 || i >= width * 6 + 2 && i <= width * 6 + 6 || i >= width * 7 - 7 && i <= width * 7 - 3 || i >= width * 8 + 2 && i <= width * 8 + 6 || i >= width * 9 - 7 && i <= width * 9 - 3 || i === width * 10 || i === width * 11 - 1 || i >= width * 10 + 2 && i <= width * 10 + 3 || i >= width * 10 + 5 && i <= width * 10 + 6 || i >= width * 11 - 7 && i <= width * 11 - 6 || i >= width * 11 - 4 && i <= width * 11 - 3 || i === width * 11 || i >= width * 11 + 2 && i <= width * 11 + 3 || i >= width * 12 - 4 && i <= width * 12 - 3 || i === width * 12 - 1 || i === width * 12 || i >= width * 12 + 2 && i <= width * 12 + 3 || i >= width * 12 + 5 && i <= width * 12 + 6 || i >= width * 13 - 7 && i <= width * 13 - 6 || i >= width * 13 - 4 && i <= width * 13 - 3 || i === width * 13 - 1 || i === width * 13 || i === width * 14 - 1) {
      cell.classList.remove('food')
      cell.classList.add('walls')
      break
    }
    if (i === 22 || i === 46 || i === 146 | i === 200) {
      cell.classList.remove('food')
      cell.classList.add('powerfood')
    }
    if (i === scale1Position) {
      cell.classList.add('scale1')
    }
    if (i === scale2Position) {
      cell.classList.add('scale2')
    }
    if (i === scale3Position) {
      cell.classList.add('scale3')
    }
    if (i === scale4Position) {
      cell.classList.add('scale4')
    }
    if (i === eaterPosition) {
      cell.classList.remove('food')
      cell.classList.remove('powerfood')
      cell.classList.add('eater')
    }
    grid.appendChild(cell)
    cells.push(cell)
  }
  // EVENT LISTENER - KEYS
  document.addEventListener('keydown', (event) => {
    // RIGHT ARROW
    if (event.key === 'ArrowRight') {
      // CHECKING FOR WALLS AND SCALES
      if (cells[eaterPosition + 1].classList.contains('walls')) {
        return
      } if (eaterPosition === scale1Position || eaterPosition === scale2Position || eaterPosition === scale3Position || eaterPosition === scale4Position) {
        cells[eaterPosition].classList.remove('eater')
        setTimeout(() => {
          eaterPosition = 112
          cells[eaterPosition].classList.add('eater')
        }, 100)
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition += 1
      cells[eaterPosition].classList.remove('food')
      cells[eaterPosition].classList.add('eater')
      // LEFT ARROW
    } else if (event.key === 'ArrowLeft') {
      // CHECKING FOR WALLS AND SCALE1
      if (cells[eaterPosition - 1].classList.contains('walls')) {
        return
      } if (eaterPosition === scale1Position || eaterPosition === scale2Position || eaterPosition === scale3Position || eaterPosition === scale4Position) {
        cells[eaterPosition].classList.remove('eater')
        setTimeout(() => {
          eaterPosition = 112
          cells[eaterPosition].classList.add('eater')
        }, 100)
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
      } if (eaterPosition === scale1Position || eaterPosition === scale2Position || eaterPosition === scale3Position || eaterPosition === scale4Position) {
        cells[eaterPosition].classList.remove('eater')
        setTimeout(() => {
          eaterPosition = 112
          cells[eaterPosition].classList.add('eater')
        }, 100)
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
      } if (eaterPosition === scale1Position || eaterPosition === scale2Position || eaterPosition === scale3Position || eaterPosition === scale4Position) {
        cells[eaterPosition].classList.remove('eater')
        setTimeout(() => {
          eaterPosition = 112
          cells[eaterPosition].classList.add('eater')
        }, 100)
      }
      cells[eaterPosition].classList.remove('eater')
      eaterPosition += width
      cells[eaterPosition].classList.remove('food')
      cells[eaterPosition].classList.add('eater')
    }
  })

}

window.addEventListener('DOMContentLoaded', main)

