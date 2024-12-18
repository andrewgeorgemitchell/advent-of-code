import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

const generateSnowflake = () => {
  const snowflake = {
    id: nanoid(),
    style: {
      position: 'absolute',
      left: `${Math.floor(Math.random() * 100)}%`,
    },
  }
  return snowflake
}

const generateXSnowflakes = (x: number) => {
  const snowflakes = []
  for (let i = 0; i < x; i++) {
    snowflakes.push(generateSnowflake())
  }
  return snowflakes
}

const Snowflake = ({ style }: { style?: any }) => (
  <p style={style} className="animate-snowFall text-white">
    *
  </p>
)

export const SnowFall = () => {
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: string; style: any }>
  >(generateXSnowflakes(10))

  useEffect(() => {
    const interval = setInterval(() => {
      setSnowflakes((snowflakes) => [
        ...snowflakes.slice(-500),
        ...generateXSnowflakes(5),
      ])
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute bottom-0 left-0 flex h-full w-full items-end">
      {snowflakes.map(({ id, style }) => (
        <Snowflake key={id} style={style} />
      ))}
    </div>
  )
}
