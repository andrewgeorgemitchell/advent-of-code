const getData = () => {
  return Bun.file('./advent-of-code/2016/day02/day02.data.txt').text()
}

const parseFileString = (str: string) =>
  str.split('\n').map((sequence) => {
    return sequence.split('').map((direction) => {
      return direction as 'U' | 'D' | 'L' | 'R'
    })
  })

class Keypad {
  private keypad1: string[][] = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ]
  private keypad2: Array<Array<string | null>> = [
    [null, null, '1', null, null],
    [null, '2', '3', '4', null],
    ['5', '6', '7', '8', '9'],
    [null, 'A', 'B', 'C', null],
    [null, null, 'D', null, null],
  ]

  private keypadType: '1' | '2' = '1'
  private x = 1
  private y = 1
  debug = false

  constructor(keypadType: '1' | '2' = '1') {
    this.keypadType = keypadType
    if (keypadType === '2') {
      this.x = 0
      this.y = 2
    }
  }

  get keypad() {
    return this.keypadType === '1' ? this.keypad1 : this.keypad2
  }

  get currentKey() {
    return this.keypad[this.y][this.x]
  }

  private log() {
    if (!this.debug) return
    console.log(`x: ${this.x}, y: ${this.y}, key: ${this.currentKey}`)
  }

  private move(direction: ReturnType<typeof parseFileString>[number][number]) {
    switch (direction) {
      case 'U':
        if (this.keypad[this.y - 1]?.[this.x] == null) return
        this.y = this.y - 1
        break
      case 'D':
        if (this.keypad[this.y + 1]?.[this.x] == null) return
        this.y = this.y + 1
        break
      case 'L':
        if (this.keypad[this.y]?.[this.x - 1] == null) return
        this.x = this.x - 1
        break
      case 'R':
        if (this.keypad[this.y]?.[this.x + 1] == null) return
        this.x = this.x + 1
        break
    }
  }

  moveSequence(sequence: ReturnType<typeof parseFileString>[number]) {
    for (let i = 0; i < sequence.length; i++) {
      this.move(sequence[i])
      this.log()
    }
  }
}

const findCode = ({
  sequences,
  keypadType,
}: {
  sequences: ReturnType<typeof parseFileString>
  keypadType?: '1' | '2'
}) => {
  const keypad = new Keypad(keypadType)
  // keypad.debug = true

  return sequences
    .map((sequence) => {
      keypad.moveSequence(sequence)
      return keypad.currentKey
    })
    .join('')
}

export const day02 = {
  getData,
  parseFileString,
  findCode,
}
