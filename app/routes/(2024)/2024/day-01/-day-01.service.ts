export function calculateTotalDistance(
  input: string | null | undefined,
): number {
  // Handle null, undefined, or empty string
  if (!input) {
    return 0
  }

  const trimmedInput = String(input).trim()
  if (trimmedInput === '') {
    return 0
  }

  try {
    // Parse the input into arrays
    const lines = trimmedInput.split('\n')
    const pairs = lines.map((line) => {
      const [left, right] = line.trim().split(/\s+/)
      return [Number(left), Number(right)]
    })

    // Sort both lists
    const leftList = pairs.map(([left]) => left).sort((a, b) => a - b)
    const rightList = pairs.map(([, right]) => right).sort((a, b) => a - b)

    // Calculate total distance
    return leftList.reduce(
      (sum, val, i) => sum + Math.abs(val - rightList[i]),
      0,
    )
  } catch {
    return 0
  }
}

export function calculateSimilarityScore(
  input: string | null | undefined,
): number {
  // Handle null, undefined, or empty string
  if (!input) {
    return 0
  }

  const trimmedInput = String(input).trim()
  if (trimmedInput === '') {
    return 0
  }

  try {
    // Parse the input into arrays
    const lines = trimmedInput.split('\n')
    const pairs = lines.map((line) => {
      const [left, right] = line.trim().split(/\s+/)
      return [Number(left), Number(right)]
    })

    const leftList = pairs.map(([left]) => left)
    const rightList = pairs.map(([, right]) => right)

    // Count occurrences of each number in the right list
    const rightListCounts = new Map<number, number>()
    rightList.forEach((num) => {
      rightListCounts.set(num, (rightListCounts.get(num) || 0) + 1)
    })

    // Calculate similarity score
    return leftList.reduce((score, num) => {
      const occurrences = rightListCounts.get(num) || 0
      return score + num * occurrences
    }, 0)
  } catch {
    return 0
  }
}
