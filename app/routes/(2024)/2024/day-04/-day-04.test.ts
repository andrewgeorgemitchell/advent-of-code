import { expect, test, describe } from 'bun:test'
import { calculatePartOne, calculatePartTwo } from './-day-04.service'

describe('Day 04: Ceres Search', () => {
  const exampleInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

  describe('Part 1', () => {
    test('should handle example case from prompt', () => {
      expect(calculatePartOne(exampleInput)).toBe(18)
    })

    test('should handle empty input', () => {
      expect(calculatePartOne('')).toBe(0)
    })

    test('should handle null input', () => {
      expect(calculatePartOne(null)).toBe(0)
    })

    test('should handle undefined input', () => {
      expect(calculatePartOne(undefined)).toBe(0)
    })
  })

  describe('Part 2', () => {
    test('should handle example case from prompt', () => {
      const input = `.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`
      expect(calculatePartTwo(input)).toBe(9)
    })

    test('should handle simple X-MAS pattern', () => {
      const input = `M.S
.A.
M.S`
      expect(calculatePartTwo(input)).toBe(1)
    })

    test('should handle empty input', () => {
      expect(calculatePartTwo('')).toBe(0)
    })

    test('should handle null input', () => {
      expect(calculatePartTwo(null)).toBe(0)
    })

    test('should handle undefined input', () => {
      expect(calculatePartTwo(undefined)).toBe(0)
    })

    test('should handle overlapping X-MAS patterns', () => {
      const input = `M.SM.S
..A.A.
M.SM.S`
      expect(calculatePartTwo(input)).toBe(2)
    })
  })
})
