import { expect, test } from 'bun:test'
import { day03 } from './day03'

// Part 1

const testInput1 = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

const testInput2 = `.*1
1..`

test('Day 03 - isSymbol', () => {
  expect(day03.isSymbol('1')).toBe(false)
  expect(day03.isSymbol('a')).toBe(true)
  expect(day03.isSymbol('!')).toBe(true)
  expect(day03.isSymbol('.')).toBe(false)
})

test('Day 03 - Part 1: Test input2 answer', async () => {
  const { validParts } = await day03.findMissingParts({
    input: testInput2,
  })
  const sum = validParts.reduce((acc, curr) => acc + curr, 0)
  expect(sum).toBe(2)
})

test('Day 03 - Part 1: Test input1 answer', async () => {
  const { validParts } = await day03.findMissingParts({ input: testInput1 })
  const sum = validParts.reduce((acc, curr) => acc + curr, 0)
  expect(sum).toBe(4361)
})

test('Day 03 - Part 1: Answer', async () => {
  const { validParts, missingParts } = await day03.findMissingParts()
  const sum = validParts.reduce((acc, curr) => acc + curr, 0)
  expect(sum).toBe(539713)
})
