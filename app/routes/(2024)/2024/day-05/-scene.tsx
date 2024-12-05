import { StringLiteralColorizer } from '../../../../components/ASCIIArt/StringLiteralColorizer/StringLiteralColorizer'

const SceneString = `
   ┌─────────┐
   │ SAFETY  │
   │ MANUAL  │
   └─────────┘
      ▼
  ┌─────────┐
  │  ⚡︎ ⚡︎ ⚡︎  │
  │ PRINTER │
  │   ▣ ▣   │
  └─────────┘
     ▼ ▼ ▼
  [1] [2] [3]
  📖  📖  📖
`

const SceneColorMap = {
  '┌': 'text-gray-400',
  '┐': 'text-gray-400',
  '└': 'text-gray-400',
  '┘': 'text-gray-400',
  '─': 'text-gray-400',
  '│': 'text-gray-400',
  '⚡︎': 'text-yellow-400',
  '▣': 'text-blue-400',
  '▼': 'text-green-400',
  '[': 'text-orange-400',
  ']': 'text-orange-400',
  '📖': 'text-orange-400',
}

export const Scene = () => (
  <StringLiteralColorizer
    stringLiteral={SceneString}
    colorMap={SceneColorMap}
  />
) 