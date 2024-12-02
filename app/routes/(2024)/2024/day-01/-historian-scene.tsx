import { StringLiteralColorizer } from '../../../../components/ASCIIArt/StringLiteralColorizer/StringLiteralColorizer'

const HistorianSceneString = `
   _____________________
  |  _________________  |
  | |                 | |    ____
  | |  LOCATION IDs:  | |   /    \\
  | |    1 2 3 4 5    | |  | ???? |
  | |_________________| |   \\____/
  |_____________________|      |
                              |
   ___________   ___________  |
  | LIST #1  |  | LIST #2  | /
  | 1 2 4 -> |  | <- 5 3 2 |
  |__________|  |__________|

     [Empty Chair]
       /-_-_-\\
      |_______|
      |  |||  |
`

const HistorianSceneColorMap = {
  _: 'text-gray-400',
  '|': 'text-gray-400',
  '[': 'text-yellow-600',
  ']': 'text-yellow-600',
  '?': 'text-red-500 animate-pulse',
  '\\': 'text-brown-700',
  '/': 'text-brown-700',
  '<': 'text-blue-500',
  '>': 'text-blue-500',
  '-': 'text-brown-700',
  '1': 'text-green-500',
  '2': 'text-green-500',
  '3': 'text-green-500',
  '4': 'text-green-500',
  '5': 'text-green-500',
}

export const HistorianScene = () => (
  <StringLiteralColorizer
    stringLiteral={HistorianSceneString}
    colorMap={HistorianSceneColorMap}
  />
)
