import { StringLiteralColorizer } from '../../../../components/ASCIIArt/StringLiteralColorizer/StringLiteralColorizer'

const SceneString = `
   _____
  /     \\
 /  BAG  \\
|   ___   |
|  [R G]  |
|  [B R]  |
|  [G B]  |
 \\_______/
`

const SceneColorMap = {
  R: 'text-red-500',
  G: 'text-green-500',
  B: 'text-blue-500',
  _: 'text-gray-400',
  '/': 'text-gray-400',
  '\\': 'text-gray-400',
  '|': 'text-gray-400',
  '[': 'text-gray-400',
  ']': 'text-gray-400',
}

export const Scene = () => (
  <StringLiteralColorizer
    stringLiteral={SceneString}
    colorMap={SceneColorMap}
  />
)
