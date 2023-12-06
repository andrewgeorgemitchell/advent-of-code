import { expect, test } from 'bun:test'
import { day01 } from './day01'

// Part 1

const testInput1 = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet']

test('Day 01 - Part 1: Test input1 answer', async () => {
  const result = day01.calculateCalibrations(testInput1)
  expect(result).toBe(142)
})

test('Day 01 - Part 1: Answer', async () => {
  const result = day01.calculateCalibrations(await day01.parseFileInput())
  expect(result).toBe(54697)
})

// Part 2

const testInput2 = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
]

test('Day 01 - Part 2: Test input2 answer', async () => {
  const result = day01.calculateCalibrations(testInput2, {
    part2: true,
    // debug: true,
  })
  expect(result).toBe(281)
})

test('Day 01 - Part 2: Answer', async () => {
  const result = day01.calculateCalibrations(await day01.parseFileInput(), {
    part2: true,
    // debug: true,
  })
  expect(result).toBe(54885)
})
