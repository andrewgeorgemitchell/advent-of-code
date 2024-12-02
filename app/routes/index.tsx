import { createFileRoute, Link } from '@tanstack/react-router'
import { Elf } from '../components/ASCIIArt/Elf/Elf'
import { AdventOfCodeLogo } from '../components/ASCIIArt/AdventOfCodeLogo/AdventOfCodeLogo'
import { SnowFall } from '../components/ASCIIArt/SnowFall/SnowFall'
import { Tree } from '../components/ASCIIArt/Tree/Tree'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex flex-row flex-nowrap items-end justify-center gap-2 overflow-hidden pt-12 mb-10">
        <Elf />
        <Elf />
        <Elf />
        <Tree />
        <Tree />
        <Elf />
        <AdventOfCodeLogo />
        <Elf />
        <Elf />
        <Elf />
        <Tree />
        <Tree />
        <Elf />
        <SnowFall />
      </div>
      <h2 className="text-2xl font-bold">Welcome!</h2>
      <p>
        This is a collection of solutions to the Advent of Code challenges in
        Typescript. Click on a year to see the solutions.
      </p>
      <div className="flex gap-2">
        <Link
          to="/2023"
          className="text-blue-400 hover:text-blue-300 transition-colors border border-blue-400 rounded-md p-2 px-4"
        >
          2023
        </Link>
        <Link
          to="/2024"
          className="text-blue-400 hover:text-blue-300 transition-colors border border-blue-400 rounded-md p-2 px-4"
        >
          2024
        </Link>
      </div>
    </div>
  )
}
