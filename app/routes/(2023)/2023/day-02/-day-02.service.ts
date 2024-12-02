export function calculatePartOne(input: string | null | undefined): number {
  // Handle invalid input
  if (!input) {
    return 0
  }
  const trimmedInput = String(input).trim()
  if (trimmedInput === '') {
    return 0
  }

  const MAX_CUBES = {
    red: 12,
    green: 13,
    blue: 14,
  }

  try {
    const lines = trimmedInput.split('\n')
    let sum = 0

    for (const line of lines) {
      // Parse game ID and sets
      const [gameStr, setsStr] = line.split(':')
      const gameId = parseInt(gameStr.replace('Game ', ''))
      const sets = setsStr.split(';')

      let isPossible = true
      // Check each set in the game
      for (const set of sets) {
        const cubes = set
          .trim()
          .split(',')
          .map((s) => s.trim())
        // Check each color count in the set
        for (const cube of cubes) {
          const [count, color] = cube.split(' ')
          if (parseInt(count) > MAX_CUBES[color as keyof typeof MAX_CUBES]) {
            isPossible = false
            break
          }
        }
        if (!isPossible) break
      }

      if (isPossible) {
        sum += gameId
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
    const lines = trimmedInput.split('\n')
    let totalPower = 0

    for (const line of lines) {
      // Parse game sets
      const [, setsStr] = line.split(':')
      const sets = setsStr.split(';')

      // Track minimum cubes needed for each color
      const minCubes = {
        red: 0,
        green: 0,
        blue: 0,
      }

      // Check each set in the game
      for (const set of sets) {
        const cubes = set
          .trim()
          .split(',')
          .map((s) => s.trim())

        // Update minimum required cubes for each color
        for (const cube of cubes) {
          const [countStr, color] = cube.split(' ')
          const count = parseInt(countStr)
          const colorKey = color as keyof typeof minCubes
          minCubes[colorKey] = Math.max(minCubes[colorKey], count)
        }
      }

      // Calculate power for this game
      const power = minCubes.red * minCubes.green * minCubes.blue
      totalPower += power
    }

    return totalPower
  } catch {
    return 0
  }
}
