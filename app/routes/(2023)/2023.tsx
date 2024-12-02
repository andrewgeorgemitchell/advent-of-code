import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(2023)/2023')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Link
          to="/"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          ← Back to home
        </Link>
        <h1 className="text-2xl font-bold">2023</h1>
      </div>
      <div className="flex flex-wrap gap-2">
        <Link
          to="/2023/day-01"
          className="text-blue-500 border border-blue-500 rounded-md p-2 px-4 hover:bg-blue-500 hover:text-white"
          activeProps={{ className: 'bg-blue-500 text-white' }}
        >
          Day 1
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
