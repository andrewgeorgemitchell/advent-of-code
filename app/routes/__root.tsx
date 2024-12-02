import {
  Link,
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import type { ReactNode } from 'react'
import globalCss from '../styles/global.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Advent of Code',
      },
    ],
    links: [{ rel: 'stylesheet', href: globalCss }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body className="dark">
        <div className="min-h-screen bg-gray-900 text-white">
          <div className="relative container mx-auto px-4 py-8 ">
            <nav className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold">Advent of Code/Typescript</h1>
              <Link
                to="/2024"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                2024
              </Link>
            </nav>
            <main>{children}</main>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
