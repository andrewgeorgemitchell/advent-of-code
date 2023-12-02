const parseFileInput = async () => {
  const fileString = await Bun.file('./2023/day01/day01.data.txt').text()

  return fileString.split('\n')
}

const isNumber = (value: any): value is number => {
  return !isNaN(Number(value))
}

const spelledOutNumbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
] as const

/**
 * Solve the 'oneeight' problem where we need to extract the last spelled out not just the first
 */
const extractLastSpelledNumber = (value: string) => {
  const possibleSpelledNumber = spelledOutNumbers.find((spelledOutNumber) => {
    return value.endsWith(spelledOutNumber)
  })

  return possibleSpelledNumber
}

const isSpelledNumber = (
  value: any,
): value is (typeof spelledOutNumbers)[number] => {
  return spelledOutNumbers.includes(value)
}

const convertSpelledNumber = (
  value: (typeof spelledOutNumbers)[number],
): number => {
  return spelledOutNumbers.indexOf(value) + 1
}

const parseCalibration = (
  input: string,
  opts?: {
    part2?: boolean
    debug?: boolean
  },
) => {
  let spelledOutStore = ''
  const numbers = input
    .split('')
    .map((val) => {
      if (isNumber(val)) {
        spelledOutStore = ''
        return val
      }
      if (!opts?.part2) return null

      spelledOutStore += val
      const possibleSpelledNumber = extractLastSpelledNumber(spelledOutStore)
      if (isSpelledNumber(possibleSpelledNumber)) {
        const converted = convertSpelledNumber(possibleSpelledNumber).toString()
        return converted
      }

      return null
    })
    .filter(Boolean)
  const number = `${numbers[0]}${numbers[numbers.length - 1]}`
  if (opts?.debug && input.length > 10) {
    console.log({
      input,
      numbers,
      number: Number(number),
    })
  }
  return Number(number)
}

const calculateCalibrations = (
  input: string[],
  opts?: {
    part2?: boolean
    debug?: boolean
  },
) => {
  return input.reduce((acc, value) => {
    const calibration = parseCalibration(value, opts)
    return acc + calibration
  }, 0)
}

export const day01 = {
  parseFileInput,
  calculateCalibrations,
}
