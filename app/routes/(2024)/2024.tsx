import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(2024)/2024')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">2024</h1>
      <div className="flex flex-wrap gap-2">
        <Link
          to="/2024/day-01"
          className="text-blue-500 border border-blue-500 rounded-md p-2 px-4 hover:bg-blue-500 hover:text-white"
          activeProps={{ className: 'bg-blue-500 text-white' }}
        >
          Day 1
        </Link>
        <Link
          to="/2024/day-02"
          className="text-blue-500 border border-blue-500 rounded-md p-2 px-4 hover:bg-blue-500 hover:text-white"
          activeProps={{ className: 'bg-blue-500 text-white' }}
        >
          Day 2
        </Link>
        <Link
          to="/2024/day-03"
          className="text-blue-500 border border-blue-500 rounded-md p-2 px-4 hover:bg-blue-500 hover:text-white"
          activeProps={{ className: 'bg-blue-500 text-white' }}
        >
          Day 3
        </Link>
        <Link
          to="/2024/day-04"
          className="text-blue-500 border border-blue-500 rounded-md p-2 px-4 hover:bg-blue-500 hover:text-white"
          activeProps={{ className: 'bg-blue-500 text-white' }}
        >
          Day 4
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
