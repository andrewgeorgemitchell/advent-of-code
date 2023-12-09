type Colors = 'red' | 'blue' | 'green'

const parseFileInput = async (input?: string) => {
  const fileString =
    input ?? (await Bun.file(import.meta.dir + '/day02.data.txt').text())

  const games = fileString.split('\n').map((gameStr, i) => {
    const [_gameNum, roundStr] = gameStr.split(':')
    const rounds = roundStr.split(';').map((roundStr) => {
      const colors = roundStr.split(',').reduce(
        (acc, colorStr) => {
          const [count, color] = colorStr.trim().split(' ')
          return {
            ...acc,
            [color]: Number(count),
          }
        },
        {} as Record<string, number>,
      )
      return colors
    })

    const highestFromAllRound = rounds.reduce(
      (acc, round) => {
        const highest = Object.entries(round).reduce((acc, [color, count]) => {
          return {
            ...acc,
            [color]: Math.max(acc[color] ?? 0, count),
          }
        }, acc)

        return highest
      },
      {} as Record<string, number>,
    )

    return {
      gameNum: i + 1,
      rounds: rounds as Record<Colors, number>[],
      highestFromAllRound: highestFromAllRound as Record<Colors, number>,
    }
  })

  return games
}

export const day02 = {
  parseFileInput,
}
