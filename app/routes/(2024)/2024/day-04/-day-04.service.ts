export const calculatePartOne = (input: string | null | undefined): number => {
  if (!input) return 0

  const grid = input.split('\n').filter((line) => line.length > 0)
  if (grid.length === 0) return 0

  const rows = grid.length
  const cols = grid[0].length
  let count = 0

  // Helper function to check if a position is valid
  const isValid = (row: number, col: number) =>
    row >= 0 && row < rows && col >= 0 && col < cols

  // Helper function to get character at position, returns empty string if invalid
  const getChar = (row: number, col: number) =>
    isValid(row, col) ? grid[row][col] : ''

  // Directions: right, down-right, down, down-left, left, up-left, up, up-right
  const directions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ]

  // Keep track of found words to avoid counting the same word twice
  const foundWords = new Set<string>()

  // Check each position as a potential start of "XMAS"
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Only check positions that start with 'X'
      if (grid[row][col] === 'X') {
        // Try each direction
        for (const [dr, dc] of directions) {
          // Check if we have "XMAS" in this direction
          let valid = true
          let word = ''

          for (let i = 0; i < 4; i++) {
            const newRow = row + dr * i
            const newCol = col + dc * i

            if (
              !isValid(newRow, newCol) ||
              grid[newRow][newCol] !== 'XMAS'[i]
            ) {
              valid = false
              break
            }
            word += grid[newRow][newCol]
          }

          if (valid && word === 'XMAS') {
            // Create a unique identifier for this word instance
            const key = `${row},${col},${dr},${dc}`
            if (!foundWords.has(key)) {
              count++
              foundWords.add(key)
            }
          }
        }
      }
    }
  }

  return count
}

export const calculatePartTwo = (input: string | null | undefined): number => {
  if (!input) return 0

  const grid = input.split('\n').filter((line) => line.length > 0)
  if (grid.length === 0) return 0

  const rows = grid.length
  const cols = grid[0].length
  let count = 0

  // Helper function to check if a position is valid
  const isValid = (row: number, col: number) =>
    row >= 0 && row < rows && col >= 0 && col < cols

  // Helper function to check if a sequence matches MAS (forward or backward)
  const isMAS = (chars: string[]) => {
    const forward = chars.join('')
    const backward = [...chars].reverse().join('')
    return forward === 'MAS' || backward === 'MAS'
  }

  // Check each position as a potential center of an X
  for (let row = 1; row < rows - 1; row++) {
    for (let col = 1; col < cols - 1; col++) {
      // Check if this position is 'A' (center of X)
      if (grid[row][col] === 'A') {
        // Get the diagonals
        const diagonal1 = [
          grid[row - 1][col - 1],
          grid[row][col],
          grid[row + 1][col + 1],
        ]
        const diagonal2 = [
          grid[row - 1][col + 1],
          grid[row][col],
          grid[row + 1][col - 1],
        ]

        // Check if both diagonals contain MAS (in either direction)
        if (isMAS(diagonal1) && isMAS(diagonal2)) {
          count++
        }
      }
    }
  }

  return count
}
