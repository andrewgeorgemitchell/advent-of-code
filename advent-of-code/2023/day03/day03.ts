import { logger } from '../utils/logger'

import.meta.dir
const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const

type Pointer = {
  x: number
  y: number
}

const isNumber = (char: string) =>
  Numbers.some((num) => num.toString() === char)

const isSymbol = (char: string) =>
  !isNumber(char) && char !== '.' && char != null

const checkIfValid = ({
  schematicMatrix,
  point,
}: {
  schematicMatrix: string[][]
  point: Pointer
}) => {
  switch (true) {
    case isSymbol(schematicMatrix[point.y - 1]?.[point.x]): // up
    case isSymbol(schematicMatrix[point.y - 1]?.[point.x - 1]): // up left
    case isSymbol(schematicMatrix[point.y]?.[point.x - 1]): // left
    case isSymbol(schematicMatrix[point.y + 1]?.[point.x - 1]): // down left
    case isSymbol(schematicMatrix[point.y + 1]?.[point.x]): // down
    case isSymbol(schematicMatrix[point.y + 1]?.[point.x + 1]): // down right
    case isSymbol(schematicMatrix[point.y]?.[point.x + 1]): // right
    case isSymbol(schematicMatrix[point.y - 1]?.[point.x + 1]): // up right
      return true
    default:
      return false
  }
}

const findMissingParts = async (params?: {
  input?: string
  debug?: boolean
}) => {
  const { input, debug } = params ?? {}
  const log = logger({
    debug,
  })
  const fileString =
    input ?? (await Bun.file(import.meta.dir + '/day03.data.txt').text())

  const schematicMatrix = fileString
    .split('\n')
    .map((line) => [...line.split(''), '.'])

  let left = {
    x: 0,
    y: 0,
  }
  const right = {
    x: 0,
    y: 0,
  }

  const parts = {
    missingParts: [] as number[],
    validParts: [] as number[],
  }

  while (schematicMatrix?.[right.y]?.[right.x] != null) {
    right.x = (right.x + 1) % schematicMatrix[right.y].length
    if (right.x === 0) {
      right.y = right.y + 1
    }
    const rightPoint = schematicMatrix?.[right.y]?.[right.x]
    const leftPoint = schematicMatrix?.[left.y]?.[left.x]

    log({
      rightPoint,
      leftPoint,
      left,
      right,
    })

    if (isNumber(rightPoint)) {
      if (!isNumber(leftPoint)) {
        left = {
          x: right.x,
          y: right.y,
        }
      }
      continue
    }

    if (!isNumber(leftPoint)) {
      continue
    }
    const partNumber = schematicMatrix?.[left.y].slice(left.x, right.x).join('')

    if (
      Array.from({ length: partNumber.length }).every((_, i) => {
        const point = {
          x: left.x + i,
          y: left.y,
        }
        return !checkIfValid({ schematicMatrix, point })
      })
    ) {
      parts.missingParts.push(parseInt(partNumber))
      left = {
        x: right.x,
        y: right.y,
      }
      continue
    }

    parts.validParts.push(parseInt(partNumber))
    left = {
      x: right.x,
      y: right.y,
    }
  }

  return parts
}

export const day03 = {
  findMissingParts: findMissingParts,
  isSymbol: isSymbol,
}
