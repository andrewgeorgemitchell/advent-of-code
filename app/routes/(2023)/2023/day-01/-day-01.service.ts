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
    // Parse input
    const lines = trimmedInput.split('\n')

    // Process each line to find first and last digit
    const values = lines.map((line) => {
      const digits = line.match(/\d/g)
      if (!digits || digits.length === 0) {
        return 0
      }
      const firstDigit = digits[0]
      const lastDigit = digits[digits.length - 1]
      return parseInt(firstDigit + lastDigit)
    })

    // Sum all values
    return values.reduce((sum, value) => sum + value, 0)
  } catch {
    return 0
  }
}

const numberMap: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
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
    // Parse input
    const lines = trimmedInput.split('\n')

    // Process each line to find first and last digit
    const values = lines.map((line) => {
      // Create a pattern that matches both digits and spelled numbers
      // Use positive lookahead to handle overlapping matches like "oneight"
      const pattern = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g
      const matches = Array.from(line.matchAll(pattern), (m) => m[1])

      if (!matches || matches.length === 0) {
        return 0
      }

      // Convert spelled numbers to digits
      const firstMatch = matches[0]
      const lastMatch = matches[matches.length - 1]

      const firstDigit = numberMap[firstMatch] || firstMatch
      const lastDigit = numberMap[lastMatch] || lastMatch

      return parseInt(firstDigit + lastDigit)
    })

    // Sum all values
    return values.reduce((sum, value) => sum + value, 0)
  } catch {
    return 0
  }
}
