import { StringLiteralColorizer } from '../../../../components/ASCIIArt/StringLiteralColorizer/StringLiteralColorizer'

const SceneString = `
     /\\___/\\
    /  o o  \\   "Can you help me
   |  (^)   |    find all the XMAS
    \\ --- /      words?"
     \\___/
      | |
      | |
   ---   ---

   ┌─────────────┐
   │ M M S X X M │  Word Search
   │ M S A M X M │  Grid
   │ A M X S X M │
   │ M S A M A S │
   │ X M A S A M │
   └─────────────┘
`

const SceneColorMap = {
  '/': 'text-gray-400',
  '\\': 'text-gray-400',
  '|': 'text-gray-400',
  o: 'text-blue-400',
  '^': 'text-blue-400',
  '-': 'text-gray-400',
  _: 'text-gray-400',
  '┌': 'text-gray-400',
  '┐': 'text-gray-400',
  '└': 'text-gray-400',
  '┘': 'text-gray-400',
  '│': 'text-gray-400',
  '─': 'text-gray-400',
  M: 'text-yellow-400',
  X: 'text-red-400',
  A: 'text-green-400',
  S: 'text-blue-400',
}

export const Scene = () => (
  <StringLiteralColorizer
    stringLiteral={SceneString}
    colorMap={SceneColorMap}
  />
)
