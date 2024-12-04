import { StringLiteralColorizer } from '../../../../components/ASCIIArt/StringLiteralColorizer/StringLiteralColorizer'

const SceneString = `
   ┌─────────────┐
   │  ▀▄   ▄▀   │  North Pole
   │ ▄█▀███▀█▄  │  Toboggan Shop
   │█▀███████▀█ │  Computer
   │▀ ▀▄▄ ▄▄▀ ▀ │
   ├─────────────┤
   │ ⚡︎mul(x,y)⚡︎ │  Corrupted
   │ %@#$&*!^~  │  Memory
   └─────────────┘
      ▣  ▣  ▣
`

const SceneColorMap = {
  '┌': 'text-gray-400',
  '┐': 'text-gray-400',
  '└': 'text-gray-400',
  '┘': 'text-gray-400',
  '│': 'text-gray-400',
  '─': 'text-gray-400',
  '├': 'text-gray-400',
  '┤': 'text-gray-400',
  '▀': 'text-blue-400',
  '▄': 'text-blue-400',
  '█': 'text-blue-400',
  '⚡︎': 'text-yellow-400',
  '▣': 'text-orange-400',
  '%': 'text-red-400',
  '@': 'text-red-400',
  '#': 'text-red-400',
  $: 'text-red-400',
  '&': 'text-red-400',
  '*': 'text-red-400',
  '!': 'text-red-400',
  '^': 'text-red-400',
  '~': 'text-red-400',
}

export const Scene = () => (
  <StringLiteralColorizer
    stringLiteral={SceneString}
    colorMap={SceneColorMap}
  />
)
