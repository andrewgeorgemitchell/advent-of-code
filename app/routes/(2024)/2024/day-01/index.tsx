import { createFileRoute } from '@tanstack/react-router'
import { HistorianScene } from './-historian-scene'
import {
  calculateTotalDistance,
  calculateSimilarityScore,
} from './-day-01.service'
import { useState } from 'react'

export const Route = createFileRoute('/(2024)/2024/day-01/')({
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
    setResult1(calculateTotalDistance(value))
  }

  const handleInput2Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput2(value)
    setResult2(calculateSimilarityScore(value))
  }

  const copyInput = () => {
    setInput2(input1)
    setResult2(calculateSimilarityScore(input1))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4 max-w-screen-sm mx-auto">
        <h3 className="text-2xl font-bold">
          --- Day 1: Historian Hysteria ---
        </h3>

        <div className="font-mono mb-4">
          <HistorianScene />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            The Chief Historian has gone missing while visiting historically
            significant locations at the North Pole. In his office, two groups
            of Historians found different lists of location IDs that need to be
            reconciled. The task is to compare these lists by pairing up numbers
            (smallest with smallest, second-smallest with second-smallest, etc.)
            and calculating the total distance between all pairs. For example,
            if comparing [1,2,3] with [4,5,6], the total distance would be the
            sum of |1-4|, |2-5|, and |3-6|.
          </p>
        </div>

        <div className="w-full max-w-xl flex flex-col gap-8">
          {/* Part 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold">Part 1</h4>
            <p>
              What is the total distance between your two lists of location IDs?
            </p>

            <textarea
              className="w-full h-48 p-2 border rounded font-mono text-sm bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
              placeholder="Paste your input here..."
              value={input1}
              onChange={handleInput1Change}
            />

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
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold">Part 2</h4>
            <p className="prose dark:prose-invert">
              The Historians noticed that many location IDs appear in both
              lists. Calculate a similarity score by multiplying each number in
              the left list by how many times it appears in the right list, then
              sum all these products.
            </p>

            <div className="flex gap-2 items-center">
              <textarea
                className="w-full h-48 p-2 border rounded font-mono text-sm bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
                placeholder="Paste your input here..."
                value={input2}
                onChange={handleInput2Change}
              />
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
    </div>
  )
}
