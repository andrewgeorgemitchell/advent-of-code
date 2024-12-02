import { expect, test, describe } from 'bun:test'
import {
  calculateTotalDistance,
  calculateSimilarityScore,
} from './-day-01.service'

describe('Day 1: Historian Hysteria', () => {
  const exampleInput = `3   4
4   3
2   5
1   3
3   9
3   3`

  describe('Part 1 - Total Distance', () => {
    test('should handle example case from prompt', () => {
      expect(calculateTotalDistance(exampleInput)).toBe(11)
    })

    test('should handle empty lists', () => {
      const input = ''
      expect(calculateTotalDistance(input)).toBe(0)
    })

    test('should handle single pair', () => {
      const input = '5   8'
      expect(calculateTotalDistance(input)).toBe(3)
    })

    test('should handle identical numbers', () => {
      const input = `1   1
2   2
3   3`
      expect(calculateTotalDistance(input)).toBe(0)
    })

    test('should handle negative differences', () => {
      const input = `10   5
20   15
30   25`
      expect(calculateTotalDistance(input)).toBe(15)
    })
  })

  describe('Part 2 - Similarity Score', () => {
    test('should handle example case from prompt', () => {
      expect(calculateSimilarityScore(exampleInput)).toBe(31)
    })

    test('should handle empty lists', () => {
      expect(calculateSimilarityScore('')).toBe(0)
    })

    test('should handle single pair with same number', () => {
      expect(calculateSimilarityScore('5   5')).toBe(5)
    })

    test('should handle single pair with different numbers', () => {
      expect(calculateSimilarityScore('5   8')).toBe(0)
    })

    test('should handle multiple occurrences', () => {
      const input = `2   2
2   2
2   3`
      expect(calculateSimilarityScore(input)).toBe(8) // 2 appears twice, so 2 * 2 + 2 * 2 + 2 * 2 = 8
    })

    test('should handle no matches', () => {
      const input = `1   2
3   4
5   6`
      expect(calculateSimilarityScore(input)).toBe(0)
    })
  })
})
