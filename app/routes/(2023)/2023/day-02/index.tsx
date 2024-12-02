import { createFileRoute } from '@tanstack/react-router'
import { calculatePartOne, calculatePartTwo } from './-day-02.service'
import { Scene } from './-scene'
import { useState } from 'react'
import rawTxt from './-day-02.data.txt?raw'

export const Route = createFileRoute('/(2023)/2023/day-02/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [result1, setResult1] = useState<number | null>(null)
  const [result2, setResult2] = useState<number | null>(null)

  const handleInput1Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput1(value)
    setResult1(calculatePartOne(value))
  }

  const handleInput2Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput2(value)
    setResult2(calculatePartTwo(value))
  }

  const copyInput = () => {
    setInput2(input1)
    setResult2(calculatePartTwo(input1))
  }

  const loadDefaultInput = (part: 1 | 2) => {
    if (part === 1) {
      setInput1(rawTxt)
      setResult1(calculatePartOne(rawTxt))
    } else {
      setInput2(rawTxt)
      setResult2(calculatePartTwo(rawTxt))
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4 max-w-screen-sm mx-auto">
        <h3 className="text-2xl font-bold">--- Day 2: Cube Conundrum ---</h3>

        <div className="font-mono mb-4">
          <Scene />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            The Elf shows you a bag of colored cubes and plays a game where he
            reveals random handfuls of cubes, challenging you to determine which
            games would have been possible with a specific number of cubes: 12
            red, 13 green, and 14 blue.
          </p>
        </div>

        {/* Part 1 */}
        <div className="flex flex-col gap-4 w-full">
          <h4 className="text-xl font-semibold">Part 1</h4>
          <textarea
            value={input1}
            onChange={handleInput1Change}
            placeholder="Enter your puzzle input..."
            className="w-full h-48 p-2 border rounded font-mono text-sm bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
          />
          <div className="flex gap-2">
            <button
              onClick={() => loadDefaultInput(1)}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-fit"
            >
              Load Default Input
            </button>
          </div>
          {result1 !== null && (
            <div className="text-center">
              <h5 className="text-lg font-semibold mb-2">Result:</h5>
              <div className="font-mono text-xl bg-green-100 dark:bg-green-900 p-4 rounded">
                {result1}
              </div>
            </div>
          )}
        </div>

        {/* Part 2 */}
        <div className="flex flex-col gap-4 w-full">
          <h4 className="text-xl font-semibold">Part 2</h4>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              For each game, find the minimum set of cubes that must have been
              present and calculate their power (multiply the numbers together).
              What is the sum of the power of these sets?
            </p>
          </div>
          <textarea
            value={input2}
            onChange={handleInput2Change}
            placeholder="Enter your puzzle input..."
            className="w-full h-48 p-2 border rounded font-mono text-sm bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
          />
          <div className="flex gap-2">
            <button
              onClick={() => loadDefaultInput(2)}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-fit"
            >
              Load Default Input
            </button>
            <button
              onClick={copyInput}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 whitespace-nowrap h-fit"
            >
              Copy from Part 1
            </button>
          </div>
          {result2 !== null && (
            <div className="text-center">
              <h5 className="text-lg font-semibold mb-2">Result:</h5>
              <div className="font-mono text-xl bg-green-100 dark:bg-green-900 p-4 rounded">
                {result2}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
