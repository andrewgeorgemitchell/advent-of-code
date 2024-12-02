import { StringLiteralColorizer } from '../../../../components/ASCIIArt/StringLiteralColorizer/StringLiteralColorizer'

const SceneString = `
     /\\___/\\     Mountain Station
    /  | |  \\    
   |===|_|===|   
  [|   ⚡︎ ⚡︎   |]  
  [|    ▣    |]  
   |___|_|___|   
       |         
       |         
  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈ Water Source
  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈
`

const SceneColorMap = {
  '/': 'text-gray-400', // structure/cables
  '\\': 'text-gray-400',
  '|': 'text-gray-400',
  '[': 'text-blue-400', // gondola cabin
  ']': 'text-blue-400',
  '⚡︎': 'text-yellow-400', // electrical symbols
  '▣': 'text-orange-400', // mechanical parts
  '≈': 'text-blue-300', // water
  _: 'text-gray-400', // structure
  '=': 'text-gray-400', // structure
}

export const Scene = () => (
  <StringLiteralColorizer
    stringLiteral={SceneString}
    colorMap={SceneColorMap}
  />
)
