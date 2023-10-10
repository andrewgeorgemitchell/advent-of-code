const parseFileInput = async () => {
  const fileString = await Bun.file('day01.data.txt').text()

  const directions = fileString.split(', ').map((raw) => {
    const [direction, ...magnitudeStr] = raw
    return [direction, parseInt(magnitudeStr.join(''))] as ['R' | 'L', number]
  })

  return directions
}

const CardinalDirections = ['N', 'E', 'S', 'W'] as const

const findQuickestRoute = (directions: Array<['R' | 'L', number]>) => {
  const coordinates = new Map<'x' | 'y', number>()
  coordinates.set('x', 0)
  coordinates.set('y', 0)

  let currentDirection: (typeof CardinalDirections)[number] = 'N'

  for (let i = 0; i < directions.length; i++) {
    const [turn, magnitude] = directions[i]
    const currentX = coordinates.get('x')
    const currentY = coordinates.get('y')

    if (currentX == null || currentY == null) {
      throw new Error('Coordinates not set')
    }

    if (turn === 'R') {
      currentDirection =
        CardinalDirections[
          (CardinalDirections.indexOf(currentDirection) + 1) % 4
        ]
    } else {
      currentDirection =
        CardinalDirections[
          (CardinalDirections.indexOf(currentDirection) + 3) % 4
        ]
    }

    switch (currentDirection) {
      case 'N':
        coordinates.set('y', currentY + magnitude)
        break
      case 'E':
        coordinates.set('x', currentX + magnitude)
        break
      case 'S':
        coordinates.set('y', currentY - magnitude)
        break
      case 'W':
        coordinates.set('x', currentX - magnitude)
        break
    }
  }

  const x = coordinates.get('x')
  const y = coordinates.get('y')

  if (x == null || y == null) {
    throw new Error('Coordinates not set')
  }

  return Math.abs(x) + Math.abs(y)
}

const findTwiceVisitedPoint = (directions: Array<['R' | 'L', number]>) => {
  const coordinates = new Map<'x' | 'y', number>()
  const visitedPoints = new Set<`${number}-${number}`>()
  coordinates.set('x', 0)
  coordinates.set('y', 0)

  let currentDirection: (typeof CardinalDirections)[number] = 'N'

  for (let i = 0; i < directions.length; i++) {
    const [turn, magnitude] = directions[i]
    const currentX = coordinates.get('x')
    const currentY = coordinates.get('y')

    if (currentX == null || currentY == null) {
      throw new Error('Coordinates not set')
    }

    if (turn === 'R') {
      currentDirection =
        CardinalDirections[
          (CardinalDirections.indexOf(currentDirection) + 1) % 4
        ]
    } else {
      currentDirection =
        CardinalDirections[
          (CardinalDirections.indexOf(currentDirection) + 3) % 4
        ]
    }

    switch (currentDirection) {
      case 'N':
        coordinates.set('y', currentY + magnitude)
        for (let i = 1; i <= magnitude; i++) {
          if (visitedPoints.has(`${currentX}-${currentY + i}`)) {
            return Math.abs(currentX) + Math.abs(currentY + i)
          }
          visitedPoints.add(`${currentX}-${currentY + i}`)
        }

        break
      case 'E':
        coordinates.set('x', currentX + magnitude)
        for (let i = 1; i <= magnitude; i++) {
          if (visitedPoints.has(`${currentX + i}-${currentY}`)) {
            return Math.abs(currentX + i) + Math.abs(currentY)
          }
          visitedPoints.add(`${currentX + i}-${currentY}`)
        }
        break
      case 'S':
        coordinates.set('y', currentY - magnitude)
        for (let i = 1; i <= magnitude; i++) {
          if (visitedPoints.has(`${currentX}-${currentY - i}`)) {
            return Math.abs(currentX) + Math.abs(currentY - i)
          }
          visitedPoints.add(`${currentX}-${currentY - i}`)
        }
        break
      case 'W':
        coordinates.set('x', currentX - magnitude)
        for (let i = 1; i <= magnitude; i++) {
          if (visitedPoints.has(`${currentX - i}-${currentY}`)) {
            return Math.abs(currentX - i) + Math.abs(currentY)
          }
          visitedPoints.add(`${currentX - i}-${currentY}`)
        }
        break
    }
  }
}

export const day01 = {
  parseFileInput,
  findQuickestRoute,
  findTwiceVisitedPoint,
}
