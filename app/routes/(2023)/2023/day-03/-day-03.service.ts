export function calculatePartOne(input: string | null | undefined): number {
  // Handle invalid input
  if (!input) {
    return 0
  }
  const trimmedInput = String(input).trim()
  if (trimmedInput === '') {
    return 0
  }

  try {
    // Parse input into a 2D array
    const grid = trimmedInput.split('\n').map((line) => line.split(''))
    const height = grid.length
    const width = grid[0].length
    let sum = 0

    // Helper function to check if a character is a symbol
    const isSymbol = (char: string): boolean => {
      return char !== '.' && isNaN(parseInt(char))
    }

    // Helper function to check if a position has an adjacent symbol
    const hasAdjacentSymbol = (row: number, col: number): boolean => {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue
          const newRow = row + dr
          const newCol = col + dc
          if (newRow >= 0 && newRow < height && newCol >= 0 && newCol < width) {
            if (isSymbol(grid[newRow][newCol])) {
              return true
            }
          }
        }
      }
      return false
    }

    // Scan through the grid
    for (let row = 0; row < height; row++) {
      let currentNumber = ''
      let isPartNumber = false

      for (let col = 0; col <= width; col++) {
        const char = col < width ? grid[row][col] : '.'

        if (!isNaN(parseInt(char))) {
          currentNumber += char
          // Check if this digit has an adjacent symbol
          if (!isPartNumber && hasAdjacentSymbol(row, col)) {
            isPartNumber = true
          }
        } else if (currentNumber !== '') {
          // End of number found
          if (isPartNumber) {
            sum += parseInt(currentNumber)
          }
          currentNumber = ''
          isPartNumber = false
        }
      }
    }

    return sum
  } catch {
    return 0
  }
}

export function calculatePartTwo(input: string | null | undefined): number {
  // Handle invalid input
  if (!input) {
    return 0
  }
  const trimmedInput = String(input).trim()
  if (trimmedInput === '') {
    return 0
  }

  try {
    // Parse input into a 2D array
    const grid = trimmedInput.split('\n').map((line) => line.split(''))
    const height = grid.length
    const width = grid[0].length
    let sum = 0

    // Helper function to get a full number starting at a position
    const getFullNumber = (
      row: number,
      col: number,
    ): { number: number; length: number } => {
      let start = col
      while (start > 0 && !isNaN(parseInt(grid[row][start - 1]))) {
        start--
      }

      let end = col
      while (end < width && !isNaN(parseInt(grid[row][end]))) {
        end++
      }

      return {
        number: parseInt(grid[row].slice(start, end).join('')),
        length: end - start,
      }
    }

    // Helper function to find adjacent numbers to a gear
    const findAdjacentNumbers = (row: number, col: number): number[] => {
      const numbers: number[] = []
      const seen = new Set<string>()

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue
          const newRow = row + dr
          const newCol = col + dc

          if (newRow >= 0 && newRow < height && newCol >= 0 && newCol < width) {
            if (!isNaN(parseInt(grid[newRow][newCol]))) {
              const key = `${newRow},${newCol}`
              if (!seen.has(key)) {
                const { number } = getFullNumber(newRow, newCol)
                numbers.push(number)
                // Mark all digits of this number as seen
                let c = newCol
                while (c >= 0 && !isNaN(parseInt(grid[newRow][c]))) {
                  seen.add(`${newRow},${c}`)
                  c--
                }
                c = newCol + 1
                while (c < width && !isNaN(parseInt(grid[newRow][c]))) {
                  seen.add(`${newRow},${c}`)
                  c++
                }
              }
            }
          }
        }
      }

      return numbers
    }

    // Find all gears and their adjacent numbers
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        if (grid[row][col] === '*') {
          const adjacentNumbers = findAdjacentNumbers(row, col)
          if (adjacentNumbers.length === 2) {
            sum += adjacentNumbers[0] * adjacentNumbers[1]
          }
        }
      }
    }

    return sum
  } catch {
    return 0
  }
}
