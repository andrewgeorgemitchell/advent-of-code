import { expect, test, describe } from 'bun:test'
import { calculatePartOne, calculatePartTwo } from './-day-05.service'

describe('Day 05: Print Queue', () => {
  const exampleInput = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`

  describe('Part 1', () => {
    test('should handle example case from prompt', () => {
      expect(calculatePartOne(exampleInput)).toBe(143)
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
      expect(calculatePartTwo(exampleInput)).toBe(123)
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
  })
}) 