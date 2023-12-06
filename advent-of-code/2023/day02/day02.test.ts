import { expect, test } from 'bun:test'
import { day02 } from './day02'

// Part 1

const testInput1 = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

test('Day 02 - Part 1: Test input1 parsing', async () => {
  const result = await day02.parseFileInput(testInput1)
  expect(result).toHaveLength(5)
})

test('Day 02 - Part 1: Test input1 answer', async () => {
  const gameResults = await day02.parseFileInput(testInput1)
  const filteredGames = gameResults.filter((game) => {
    if (
      game.highestFromAllRound.red <= 12 &&
      game.highestFromAllRound.blue <= 14 &&
      game.highestFromAllRound.green <= 13
    ) {
      return true
    }
    return false
  })

  const filteredGamesSums = filteredGames.reduce((acc, game) => {
    return game.gameNum + acc
  }, 0)
  expect(filteredGamesSums).toBe(8)
})

test('Day 02 - Part 1: Answer', async () => {
  const gameResults = await day02.parseFileInput()
  const filteredGames = gameResults.filter((game) => {
    if (
      game.highestFromAllRound.red <= 12 &&
      game.highestFromAllRound.blue <= 14 &&
      game.highestFromAllRound.green <= 13
    ) {
      return true
    }
    return false
  })

  const filteredGamesSums = filteredGames.reduce((acc, game) => {
    return game.gameNum + acc
  }, 0)
  expect(filteredGamesSums).toBe(3059)
})

// Part 2

test('Day 02 - Part 2: Test input2 answer', async () => {
  const gameResults = await day02.parseFileInput(testInput1)
  const sumOfAllRounds = gameResults.reduce((acc, game) => {
    return (
      acc +
      Object.values(game.highestFromAllRound).reduce((acc, val) => {
        return acc === 0 ? val : acc * val
      }, 0)
    )
  }, 0)
  expect(sumOfAllRounds).toBe(2286)
})

test('Day 02 - Part 2: Answer', async () => {
  const gameResults = await day02.parseFileInput()
  const sumOfAllRounds = gameResults.reduce((acc, game) => {
    return (
      acc +
      Object.values(game.highestFromAllRound).reduce((acc, val) => {
        return acc === 0 ? val : acc * val
      }, 0)
    )
  }, 0)
  expect(sumOfAllRounds).toBe(65371)
})
