import { StringLiteralColorizer } from '../../../../components/ASCIIArt/StringLiteralColorizer/StringLiteralColorizer'

const SceneString = `
     /\\
    /  \\      *
   /____\\    * *
  |      |  * * *
  |      | * * * *
  |  []  |   |:|
  |      |   |:|
  |______|  _|:|_
    ||||    |   |
`

const SceneColorMap = {
  '/': 'text-gray-400',
  '\\': 'text-gray-400',
  '|': 'text-gray-400',
  _: 'text-gray-400',
  '[': 'text-yellow-500',
  ']': 'text-yellow-500',
  '*': 'text-blue-200',
  ':': 'text-gray-600',
}

export const Scene = () => (
  <StringLiteralColorizer
    stringLiteral={SceneString}
    colorMap={SceneColorMap}
  />
)
