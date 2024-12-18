import { StringLiteralColorizer } from '../StringLiteralColorizer/StringLiteralColorizer'

const TreeStringLiteral = `
    ^
   ^^^
  ^^^^^
 ^^^^^^^
   |||
`

const TreeColorMap = {
  '^': 'text-green-700',
  '|': 'text-orange-900',
}

export const Tree = () => (
  <StringLiteralColorizer
    stringLiteral={TreeStringLiteral}
    colorMap={TreeColorMap}
  />
)
