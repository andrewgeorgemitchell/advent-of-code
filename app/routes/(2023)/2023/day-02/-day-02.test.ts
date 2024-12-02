import { expect, test, describe } from 'bun:test'
import { calculatePartOne, calculatePartTwo } from './-day-02.service'

describe('Day 02: Cube Conundrum', () => {
  const exampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

  describe('Part 1', () => {
    test('should handle example case from prompt', () => {
      expect(calculatePartOne(exampleInput)).toBe(8)
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
      expect(calculatePartTwo(exampleInput)).toBe(2286)
    })

    test('should handle empty input', () => {
      expect(calculatePartTwo('')).toBe(0)
    })

    test('should handle null input', () => {
      expect(calculatePartTwo(null)).toBe(0)
    })

    test('should handle single game with one set', () => {
      expect(calculatePartTwo('Game 1: 3 blue, 4 red, 2 green')).toBe(24)
    })
  })
})
