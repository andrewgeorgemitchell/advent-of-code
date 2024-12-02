import { expect, test, describe } from 'bun:test'
import { calculatePartOne, calculatePartTwo } from './-day-01.service'

describe('Day 01: Trebuchet?!', () => {
  describe('Part 1', () => {
    const exampleInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

    test('should handle example case from prompt', () => {
      expect(calculatePartOne(exampleInput)).toBe(142)
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

    test('should handle input with no digits', () => {
      expect(calculatePartOne('abc\ndef')).toBe(0)
    })
  })

  describe('Part 2', () => {
    const exampleInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

    test('should handle example case from prompt', () => {
      expect(calculatePartTwo(exampleInput)).toBe(281)
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

    test('should handle input with no digits or spelled numbers', () => {
      expect(calculatePartTwo('abc\ndef')).toBe(0)
    })

    test('should handle overlapping spelled numbers', () => {
      expect(calculatePartTwo('oneight')).toBe(18)
      expect(calculatePartTwo('threeight')).toBe(38)
      expect(calculatePartTwo('fiveight')).toBe(58)
      expect(calculatePartTwo('sevenine')).toBe(79)
      expect(calculatePartTwo('eightwo')).toBe(82)
      expect(calculatePartTwo('eighthree')).toBe(83)
    })
  })
})
