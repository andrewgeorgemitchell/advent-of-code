import { expect, test, describe } from 'bun:test'
import { calculatePartOne, calculatePartTwo } from './-day-03.service'

describe('Day 03: Mull It Over', () => {
  const exampleInput =
    'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'

  describe('Part 1', () => {
    test('should handle example case from prompt', () => {
      expect(calculatePartOne(exampleInput)).toBe(161) // 2*4 + 5*5 + 11*8 + 8*5 = 8 + 25 + 88 + 40 = 161
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

    test('should ignore invalid mul instructions', () => {
      const invalidInput = 'mul(4* mul(6,9! ?(12,34) mul ( 2 , 4 )'
      expect(calculatePartOne(invalidInput)).toBe(0)
    })

    test('should handle multiple valid instructions', () => {
      const input = 'mul(10,20)text mul(5,5)more mul(2,3)'
      expect(calculatePartOne(input)).toBe(231) // 10*20 + 5*5 + 2*3 = 200 + 25 + 6 = 231
    })
  })

  describe('Part 2', () => {
    const exampleInput2 =
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)do()?mul(8,5))"

    test('should handle example case from prompt', () => {
      expect(calculatePartTwo(exampleInput2)).toBe(48) // 2*4 + 8*5 = 8 + 40 = 48
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

    test('should handle do() and dont() instructions', () => {
      const inputs = [
        ["mul(2,3)don't()mul(4,5)do()mul(6,7)", 2 * 3 + 6 * 7], // First and last enabled
        ["don't()mul(2,3)mul(4,5)do()mul(6,7)", 6 * 7], // Only last enabled
        ["do()mul(2,3)don't()mul(4,5)", 2 * 3], // Only first enabled
        ["mul(2,3)do()mul(4,5)don't()mul(6,7)", 2 * 3 + 4 * 5], // First two enabled
      ] as const

      for (const [input, expected] of inputs) {
        expect(calculatePartTwo(input)).toBe(expected)
      }
    })
  })
})
