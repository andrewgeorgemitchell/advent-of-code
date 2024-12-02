import { expect, test, describe } from 'bun:test'
import { calculatePartOne, calculatePartTwo } from './-day-03.service'

describe('Day 03: Gear Ratios', () => {
  const exampleInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

  describe('Part 1', () => {
    test('should handle example case from prompt', () => {
      expect(calculatePartOne(exampleInput)).toBe(4361)
    })

    test('should handle empty input', () => {
      expect(calculatePartOne('')).toBe(0)
    })

    test('should handle null input', () => {
      expect(calculatePartOne(null)).toBe(0)
    })
  })

  describe('Part 2', () => {
    test('should handle example case from prompt', () => {
      expect(calculatePartTwo(exampleInput)).toBe(467835)
    })

    test('should handle empty input', () => {
      expect(calculatePartTwo('')).toBe(0)
    })

    test('should handle null input', () => {
      expect(calculatePartTwo(null)).toBe(0)
    })
  })
})
