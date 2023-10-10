import { expect, test } from 'bun:test'
import { day01 } from './day01'

const testInput1 = [
  ['R', 2],
  ['L', 3],
] as const

const testInput2 = [
  ['R', 2],
  ['R', 2],
  ['R', 2],
]

const testInput3 = [
  ['R', 5],
  ['L', 5],
  ['R', 5],
  ['R', 3],
]

test('Part 1: Test input1 answer', async () => {
  const result = day01.findQuickestRoute(testInput1 as any)
  expect(result).toBe(5)
})

test('Part 1: Test input2 answer', async () => {
  const result = day01.findQuickestRoute(testInput2 as any)
  expect(result).toBe(2)
})

test('Part 1: Test input3 answer', async () => {
  const result = day01.findQuickestRoute(testInput3 as any)
  expect(result).toBe(12)
})

test('Part 1: Real input answer', async () => {
  const input = await day01.parseFileInput()
  const result = day01.findQuickestRoute(input)
  expect(result).toBe(161)
})

const p2TestInput = [
  ['R', 8],
  ['R', 4],
  ['R', 4],
  ['R', 8],
]

test('Part 2: Test input answer', async () => {
  const result = day01.findTwiceVisitedPoint(p2TestInput as any)
  expect(result).toBe(4)
})

test('Part 2: Real input answer', async () => {
  const input = await day01.parseFileInput()
  const result = day01.findTwiceVisitedPoint(input)
  expect(result).toBe(110)
})
