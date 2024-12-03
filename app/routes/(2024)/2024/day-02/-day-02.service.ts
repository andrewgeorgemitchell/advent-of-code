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
    // Parse input into arrays of numbers
    const reports = trimmedInput
      .split('\n')
      .map((line) => line.split(' ').map((num) => parseInt(num)))

    // Count safe reports
    return reports.filter((report) => isSafeReport(report)).length
  } catch {
    return 0
  }
}

function isSafeReport(levels: number[]): boolean {
  if (levels.length < 2) return true

  // Check if sequence is strictly increasing or decreasing
  let increasing: boolean | null = null

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1]
    const absDiff = Math.abs(diff)

    // Check if difference is between 1 and 3
    if (absDiff < 1 || absDiff > 3) {
      return false
    }

    // On first comparison, determine direction
    if (increasing === null) {
      increasing = diff > 0
    }
    // On subsequent comparisons, ensure direction matches
    else if (diff > 0 !== increasing) {
      return false
    }
  }

  return true
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
    // Parse input into arrays of numbers
    const reports = trimmedInput
      .split('\n')
      .map((line) => line.split(' ').map((num) => parseInt(num)))

    // Count safe reports (including those that can be made safe with Problem Dampener)
    return reports.filter((report) => isReportSafeWithDampener(report)).length
  } catch {
    return 0
  }
}

function isReportSafeWithDampener(levels: number[]): boolean {
  // If it's already safe, no need to try removing levels
  if (isSafeReport(levels)) {
    return true
  }

  // Try removing each level one at a time to see if it makes the report safe
  for (let i = 0; i < levels.length; i++) {
    const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)]
    if (isSafeReport(modifiedLevels)) {
      return true
    }
  }

  return false
}
