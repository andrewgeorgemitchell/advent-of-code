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
    let sum = 0
    let pos = 0

    while (pos < trimmedInput.length) {
      // Look for 'mul(' sequence
      if (
        pos + 3 < trimmedInput.length &&
        trimmedInput.slice(pos, pos + 4) === 'mul('
      ) {
        // Try to match the numbers and closing parenthesis
        const rest = trimmedInput.slice(pos + 4)
        const numMatch = rest.match(/^(\d{1,3}),(\d{1,3})\)/)

        if (numMatch) {
          const x = parseInt(numMatch[1])
          const y = parseInt(numMatch[2])
          sum += x * y
          pos += 4 + numMatch[0].length
        } else {
          pos++
        }
      } else {
        pos++
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
    let sum = 0
    let pos = 0
    let mulEnabled = true // Initially enabled

    while (pos < trimmedInput.length) {
      // Look for 'do(' sequence
      if (
        pos + 2 < trimmedInput.length &&
        trimmedInput.slice(pos, pos + 3) === 'do('
      ) {
        const rest = trimmedInput.slice(pos + 3)
        if (rest.startsWith(')')) {
          mulEnabled = true
          pos += 4
          continue
        }
      }

      // Look for 'don't(' sequence
      if (
        pos + 5 < trimmedInput.length &&
        trimmedInput.slice(pos, pos + 6) === "don't("
      ) {
        const rest = trimmedInput.slice(pos + 6)
        if (rest.startsWith(')')) {
          mulEnabled = false
          pos += 7
          continue
        }
      }

      // Look for 'mul(' sequence
      if (
        pos + 3 < trimmedInput.length &&
        trimmedInput.slice(pos, pos + 4) === 'mul('
      ) {
        // Try to match the numbers and closing parenthesis
        const rest = trimmedInput.slice(pos + 4)
        const numMatch = rest.match(/^(\d{1,3}),(\d{1,3})\)/)

        if (numMatch) {
          const x = parseInt(numMatch[1])
          const y = parseInt(numMatch[2])
          if (mulEnabled) {
            sum += x * y
          }
          pos += 4 + numMatch[0].length
        } else {
          pos++
        }
      } else {
        pos++
      }
    }

    return sum
  } catch {
    return 0
  }
}
