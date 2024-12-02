import { StringLiteralColorizer } from '../../../../components/ASCIIArt/StringLiteralColorizer/StringLiteralColorizer'

const SceneString = `
    ⚛️  Red-Nosed Reactor
   ╔════════════╗
   ║  ▲ ▼ ▲ ▼  ║
   ║  █ █ █ █  ║
   ║  ⚡️⚡️⚡️⚡️  ║
   ╚════════════╝
      📊 📈 📉
   Safety Analysis
`

const SceneColorMap = {
  '╔': 'text-gray-400',
  '╗': 'text-gray-400',
  '║': 'text-gray-400',
  '╚': 'text-gray-400',
  '╝': 'text-gray-400',
  '═': 'text-gray-400',
  '▲': 'text-green-400',
  '▼': 'text-red-400',
  '█': 'text-yellow-400',
  '⚡️': 'text-yellow-400',
  '📊': 'text-blue-400',
  '📈': 'text-green-400',
  '📉': 'text-red-400',
}

export const Scene = () => (
  <StringLiteralColorizer
    stringLiteral={SceneString}
    colorMap={SceneColorMap}
  />
) 