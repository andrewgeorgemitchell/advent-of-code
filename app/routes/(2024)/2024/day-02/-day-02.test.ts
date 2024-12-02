import { expect, test, describe } from 'bun:test'
import { calculatePartOne, calculatePartTwo } from './-day-02.service'

describe('Day 02: Red-Nosed Reports', () => {
  const exampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

  describe('Part 1', () => {
    test('should handle example case from prompt', () => {
      expect(calculatePartOne(exampleInput)).toBe(2)
    })

    test('should handle empty input', () => {
      expect(calculatePartOne('')).toBe(0)
    })

    test('should handle null input', () => {
      expect(calculatePartOne(null)).toBe(0)
    })

    test('should handle single number', () => {
      expect(calculatePartOne('5')).toBe(1)
    })

    test('should handle valid decreasing sequence', () => {
      expect(calculatePartOne('9 7 5 3 1')).toBe(1)
    })

    test('should handle valid increasing sequence', () => {
      expect(calculatePartOne('1 3 5 7 9')).toBe(1)
    })

    test('should reject invalid difference', () => {
      expect(calculatePartOne('1 5 7 9')).toBe(0)
    })
  })

  describe('Part 2', () => {
    test('should handle example case from prompt', () => {
      expect(calculatePartTwo(exampleInput)).toBe(4)
    })

    test('should handle empty input', () => {
      expect(calculatePartTwo('')).toBe(0)
    })

    test('should handle null input', () => {
      expect(calculatePartTwo(null)).toBe(0)
    })

    test('should handle single number', () => {
      expect(calculatePartTwo('5')).toBe(1)
    })

    test('should handle already safe sequence', () => {
      expect(calculatePartTwo('1 3 5 7 9')).toBe(1)
    })

    test('should handle sequence made safe by removing middle number', () => {
      expect(calculatePartTwo('1 3 2 4 5')).toBe(1)
    })

    test('should handle sequence that cannot be made safe', () => {
      expect(calculatePartTwo('1 5 2 6 9')).toBe(0)
    })
  })
}) 