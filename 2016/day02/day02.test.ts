import { expect, test } from 'bun:test'
import { day02 } from './day02'

const testInput = `ULL
RRDDD
LURDL
UUUUD`

test('Day 02 - Part 1: Test input1 answer', () => {
  const result = day02.findCode({ sequences: day02.parseFileString(testInput) })
  expect(result).toBe('1985')
})

test('Day 02 - Part 1: Real input answer', async () => {
  const sequences = day02.parseFileString(await day02.getData())
  const result = day02.findCode({ sequences })
  expect(result).toBe('19636')
})

test('Day 02 - Part 2: Test input answer', async () => {
  const result = day02.findCode({
    sequences: day02.parseFileString(testInput),
    keypadType: '2',
  })
  expect(result).toBe('5DB3')
})

test('Day 02 - Part 2: Real input answer', async () => {
  const sequences = day02.parseFileString(await day02.getData())
  const result = day02.findCode({ sequences, keypadType: '2' })
  expect(result).toBe('3CC43')
})
