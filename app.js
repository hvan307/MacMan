function main() {
  const height = 15
  const width = 15
  const gridCellCount = height * width
  const grid = document.querySelector('.grid')
  const cells = []
  const scale1zone = []
  const walls = []
  let eaterPosition = 112
  let scale1Position = 22
  let scale1PositionDirection = 'right'
  let scaleMove = 1
  let scale1Path = []
  let eaterPath = []


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





  // COORDINATES
  // let eaterCoordinates = []
  // let scale1Coordinates = []
  // function coordinatesEater() {
  //   console.log('eater position:', eaterPosition)
  //   const eaterX = (eaterPosition + 1) % width
  //   console.log('eater X:', eaterX)
  //   const eaterY = ((eaterPosition + 1) - eaterX) / width
  //   console.log('eater Y:', eaterY)
  //   eaterCoordinates.push(eaterX, eaterY)
  //   console.log('eater coordinates:', eaterCoordinates)
  // }
  // coordinatesEater()

  // function coordinatesScale1() {
  //   console.log('scale1 position:', scale1Position)
  //   const scale1X = (scale1Position + 1) % width
  //   console.log('scale1 X:', scale1X)
  //   const scale1Y = ((scale1Position + 1) - scale1X) / width
  //   console.log('scale1 Y:', scale1Y)
  //   scale1Coordinates.push(scale1X, scale1Y)
  //   console.log('scale1 coordinates:', scale1Coordinates)
  // }
  // coordinatesScale1()

  // const up = scale1Y - width
  // const right = scale1X + 1
  // const down = scale1Y + width
  // const left = scale1X - 1
  // const direction = [up, right, down, left]
  // SCALE 1 
  // const randomDirection = direction[Math.floor(Math.random() * direction.length)]
  // const moves = (!cells.contains.classList('eater') || !cells.contains.classList('scale1')) ?
  //   [up, down] : [left, right]
  // console.log(randomDirection)

  // SET INTERVAL SCALE 1
  const scale1Interval = setInterval(() => {
    if (scale1Position === 0) {
      clearInterval(scale1Interval)
      return
    }
    console.log(scale1Position)

    cells[scale1Position].classList.remove('scale1')
    scale1Position -= scaleMove
    cells[scale1Position].classList.add('scale1')

    // COORDS SET INTERVAL 300
    // setInterval(() => {
    //   if (scale1PositionDirection === 'right') {
    //     if (cells[scale1Position + 1].classList.contains('wall')) {
    //       scale1PositionDirection = coords(scale1Position)
    //       console.log('i am changing')
    //     }
    //     scale1Position++
    //   } else if (scale1PositionDirection === 'left') {
    //     if (cells[scale1Position - 1].classList.contains('wall')) {
    //       scale1PositionDirection = coords(scale1Position)
    //     }
    //     scale1Position--
    //   } else if (scale1PositionDirection === 'up') {
    //     if (cells[scale1Position - width].classList.contains('wall')) {
    //       scale1PositionDirection = coords(scale1Position)
    //     }
    //     scale1Position--
    //   } else if (scale1PositionDirection === 'down') {
    //     if (cells[scale1Position + width].classList.contains('wall')) {
    //       scale1PositionDirection = coords(scale1Position)
    //     }
    //     scale1Position++
    //   }
    // }, 300)


    if (scale1Position === 19 && cells[scale1Position].classList.contains('path')) {
      scaleMove = -width
    }

    if (scale1Position === 19 && scaleMove === 1) {
      console.log('I am changing direction')
      scaleMove = 1
    }



    if (scale1Position === 79) {
      scaleMove = -1
    }
    if (scale1Position === 82) {
      scaleMove = -15
    }
    if (scale1Position === 112) {
      scaleMove = 1
    }   if (scale1Position === 106) {
      scaleMove = width
    }
    if (scale1Position === 76) {
      scaleMove = -1
    } 
   
    



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


    // console.log(scale1Path)
    // cells[scale1Position].classList.remove('fries')
    // cells[scale1Position].classList.add('scale1')



    // else if ()
    // scale1Position += scaleMove + width * 2 + 1
    // || cells[scale1Position - 1].classList.contains('walls') || cells[scale1Position + width].classList.contains('walls') || cells[scale1Position - width].classList.contains('walls')) {
    //   console.log('There is a right wall'






    // } else if (cells[scale1Position + 1].classList.contains('walls')) {
    //   scale1Position -= scaleMove
    //   console.log('wall on the right')
    // } else if (cells[scale1Position + width].classList.contains('walls')) {
    //   scale1Position -= width
    //   console.log('wall below')
    // } else { 
    //   scale1Position += width
    //   console.log('wall above')
    // }


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

  }, 1000)



  // DRAWING A GRID 
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.classList.add('path')
    // cell.classList.add('fries')

    if (i === eaterPosition) {
      cell.classList.remove('fries')
      cell.classList.add('eater')
    }
    if (i === scale1Position) {
      cell.classList.remove('fries')
      cell.classList.add('scale1')
    }
    // BORDER WALLS
    while (i <= width - 1 || i === width || i === width * 2 - 1 || i === width * 3 || i === width * 4 - 1 || i === width * 5 || i === width * 6 - 1 || i === width * 6 || i === width * 7 - 1 || i === width * 7 || i === width * 8 - 1 || i === width * 8 || i === width * 9 - 1 || i === width * 9 || i === width * 10 - 1 || i >= width * 14) {
      cell.classList.remove('fries')
      cell.classList.remove('path')
      cell.classList.add('walls')
      break
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

  // eaterPath.push(onkeydown)
  // console.log(eaterPath)



}


window.addEventListener('DOMContentLoaded', main)