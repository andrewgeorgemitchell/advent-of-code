/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as R20242024Import } from './routes/(2024)/2024'
import { Route as R20232023Import } from './routes/(2023)/2023'
import { Route as R20242024Day05IndexImport } from './routes/(2024)/2024/day-05/index'
import { Route as R20242024Day04IndexImport } from './routes/(2024)/2024/day-04/index'
import { Route as R20242024Day03IndexImport } from './routes/(2024)/2024/day-03/index'
import { Route as R20242024Day02IndexImport } from './routes/(2024)/2024/day-02/index'
import { Route as R20242024Day01IndexImport } from './routes/(2024)/2024/day-01/index'
import { Route as R20232023Day03IndexImport } from './routes/(2023)/2023/day-03/index'
import { Route as R20232023Day02IndexImport } from './routes/(2023)/2023/day-02/index'
import { Route as R20232023Day01IndexImport } from './routes/(2023)/2023/day-01/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const R20242024Route = R20242024Import.update({
  id: '/(2024)/2024',
  path: '/2024',
  getParentRoute: () => rootRoute,
} as any)

const R20232023Route = R20232023Import.update({
  id: '/(2023)/2023',
  path: '/2023',
  getParentRoute: () => rootRoute,
} as any)

const R20242024Day05IndexRoute = R20242024Day05IndexImport.update({
  id: '/day-05/',
  path: '/day-05/',
  getParentRoute: () => R20242024Route,
} as any)

const R20242024Day04IndexRoute = R20242024Day04IndexImport.update({
  id: '/day-04/',
  path: '/day-04/',
  getParentRoute: () => R20242024Route,
} as any)

const R20242024Day03IndexRoute = R20242024Day03IndexImport.update({
  id: '/day-03/',
  path: '/day-03/',
  getParentRoute: () => R20242024Route,
} as any)

const R20242024Day02IndexRoute = R20242024Day02IndexImport.update({
  id: '/day-02/',
  path: '/day-02/',
  getParentRoute: () => R20242024Route,
} as any)

const R20242024Day01IndexRoute = R20242024Day01IndexImport.update({
  id: '/day-01/',
  path: '/day-01/',
  getParentRoute: () => R20242024Route,
} as any)

const R20232023Day03IndexRoute = R20232023Day03IndexImport.update({
  id: '/day-03/',
  path: '/day-03/',
  getParentRoute: () => R20232023Route,
} as any)

const R20232023Day02IndexRoute = R20232023Day02IndexImport.update({
  id: '/day-02/',
  path: '/day-02/',
  getParentRoute: () => R20232023Route,
} as any)

const R20232023Day01IndexRoute = R20232023Day01IndexImport.update({
  id: '/day-01/',
  path: '/day-01/',
  getParentRoute: () => R20232023Route,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(2023)/2023': {
      id: '/(2023)/2023'
      path: '/2023'
      fullPath: '/2023'
      preLoaderRoute: typeof R20232023Import
      parentRoute: typeof rootRoute
    }
    '/(2024)/2024': {
      id: '/(2024)/2024'
      path: '/2024'
      fullPath: '/2024'
      preLoaderRoute: typeof R20242024Import
      parentRoute: typeof rootRoute
    }
    '/(2023)/2023/day-01/': {
      id: '/(2023)/2023/day-01/'
      path: '/day-01'
      fullPath: '/2023/day-01'
      preLoaderRoute: typeof R20232023Day01IndexImport
      parentRoute: typeof R20232023Import
    }
    '/(2023)/2023/day-02/': {
      id: '/(2023)/2023/day-02/'
      path: '/day-02'
      fullPath: '/2023/day-02'
      preLoaderRoute: typeof R20232023Day02IndexImport
      parentRoute: typeof R20232023Import
    }
    '/(2023)/2023/day-03/': {
      id: '/(2023)/2023/day-03/'
      path: '/day-03'
      fullPath: '/2023/day-03'
      preLoaderRoute: typeof R20232023Day03IndexImport
      parentRoute: typeof R20232023Import
    }
    '/(2024)/2024/day-01/': {
      id: '/(2024)/2024/day-01/'
      path: '/day-01'
      fullPath: '/2024/day-01'
      preLoaderRoute: typeof R20242024Day01IndexImport
      parentRoute: typeof R20242024Import
    }
    '/(2024)/2024/day-02/': {
      id: '/(2024)/2024/day-02/'
      path: '/day-02'
      fullPath: '/2024/day-02'
      preLoaderRoute: typeof R20242024Day02IndexImport
      parentRoute: typeof R20242024Import
    }
    '/(2024)/2024/day-03/': {
      id: '/(2024)/2024/day-03/'
      path: '/day-03'
      fullPath: '/2024/day-03'
      preLoaderRoute: typeof R20242024Day03IndexImport
      parentRoute: typeof R20242024Import
    }
    '/(2024)/2024/day-04/': {
      id: '/(2024)/2024/day-04/'
      path: '/day-04'
      fullPath: '/2024/day-04'
      preLoaderRoute: typeof R20242024Day04IndexImport
      parentRoute: typeof R20242024Import
    }
    '/(2024)/2024/day-05/': {
      id: '/(2024)/2024/day-05/'
      path: '/day-05'
      fullPath: '/2024/day-05'
      preLoaderRoute: typeof R20242024Day05IndexImport
      parentRoute: typeof R20242024Import
    }
  }
}

// Create and export the route tree

interface R20232023RouteChildren {
  R20232023Day01IndexRoute: typeof R20232023Day01IndexRoute
  R20232023Day02IndexRoute: typeof R20232023Day02IndexRoute
  R20232023Day03IndexRoute: typeof R20232023Day03IndexRoute
}

const R20232023RouteChildren: R20232023RouteChildren = {
  R20232023Day01IndexRoute: R20232023Day01IndexRoute,
  R20232023Day02IndexRoute: R20232023Day02IndexRoute,
  R20232023Day03IndexRoute: R20232023Day03IndexRoute,
}

const R20232023RouteWithChildren = R20232023Route._addFileChildren(
  R20232023RouteChildren,
)

interface R20242024RouteChildren {
  R20242024Day01IndexRoute: typeof R20242024Day01IndexRoute
  R20242024Day02IndexRoute: typeof R20242024Day02IndexRoute
  R20242024Day03IndexRoute: typeof R20242024Day03IndexRoute
  R20242024Day04IndexRoute: typeof R20242024Day04IndexRoute
  R20242024Day05IndexRoute: typeof R20242024Day05IndexRoute
}

const R20242024RouteChildren: R20242024RouteChildren = {
  R20242024Day01IndexRoute: R20242024Day01IndexRoute,
  R20242024Day02IndexRoute: R20242024Day02IndexRoute,
  R20242024Day03IndexRoute: R20242024Day03IndexRoute,
  R20242024Day04IndexRoute: R20242024Day04IndexRoute,
  R20242024Day05IndexRoute: R20242024Day05IndexRoute,
}

const R20242024RouteWithChildren = R20242024Route._addFileChildren(
  R20242024RouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/2023': typeof R20232023RouteWithChildren
  '/2024': typeof R20242024RouteWithChildren
  '/2023/day-01': typeof R20232023Day01IndexRoute
  '/2023/day-02': typeof R20232023Day02IndexRoute
  '/2023/day-03': typeof R20232023Day03IndexRoute
  '/2024/day-01': typeof R20242024Day01IndexRoute
  '/2024/day-02': typeof R20242024Day02IndexRoute
  '/2024/day-03': typeof R20242024Day03IndexRoute
  '/2024/day-04': typeof R20242024Day04IndexRoute
  '/2024/day-05': typeof R20242024Day05IndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/2023': typeof R20232023RouteWithChildren
  '/2024': typeof R20242024RouteWithChildren
  '/2023/day-01': typeof R20232023Day01IndexRoute
  '/2023/day-02': typeof R20232023Day02IndexRoute
  '/2023/day-03': typeof R20232023Day03IndexRoute
  '/2024/day-01': typeof R20242024Day01IndexRoute
  '/2024/day-02': typeof R20242024Day02IndexRoute
  '/2024/day-03': typeof R20242024Day03IndexRoute
  '/2024/day-04': typeof R20242024Day04IndexRoute
  '/2024/day-05': typeof R20242024Day05IndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(2023)/2023': typeof R20232023RouteWithChildren
  '/(2024)/2024': typeof R20242024RouteWithChildren
  '/(2023)/2023/day-01/': typeof R20232023Day01IndexRoute
  '/(2023)/2023/day-02/': typeof R20232023Day02IndexRoute
  '/(2023)/2023/day-03/': typeof R20232023Day03IndexRoute
  '/(2024)/2024/day-01/': typeof R20242024Day01IndexRoute
  '/(2024)/2024/day-02/': typeof R20242024Day02IndexRoute
  '/(2024)/2024/day-03/': typeof R20242024Day03IndexRoute
  '/(2024)/2024/day-04/': typeof R20242024Day04IndexRoute
  '/(2024)/2024/day-05/': typeof R20242024Day05IndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/2023'
    | '/2024'
    | '/2023/day-01'
    | '/2023/day-02'
    | '/2023/day-03'
    | '/2024/day-01'
    | '/2024/day-02'
    | '/2024/day-03'
    | '/2024/day-04'
    | '/2024/day-05'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/2023'
    | '/2024'
    | '/2023/day-01'
    | '/2023/day-02'
    | '/2023/day-03'
    | '/2024/day-01'
    | '/2024/day-02'
    | '/2024/day-03'
    | '/2024/day-04'
    | '/2024/day-05'
  id:
    | '__root__'
    | '/'
    | '/(2023)/2023'
    | '/(2024)/2024'
    | '/(2023)/2023/day-01/'
    | '/(2023)/2023/day-02/'
    | '/(2023)/2023/day-03/'
    | '/(2024)/2024/day-01/'
    | '/(2024)/2024/day-02/'
    | '/(2024)/2024/day-03/'
    | '/(2024)/2024/day-04/'
    | '/(2024)/2024/day-05/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  R20232023Route: typeof R20232023RouteWithChildren
  R20242024Route: typeof R20242024RouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  R20232023Route: R20232023RouteWithChildren,
  R20242024Route: R20242024RouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(2023)/2023",
        "/(2024)/2024"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(2023)/2023": {
      "filePath": "(2023)/2023.tsx",
      "children": [
        "/(2023)/2023/day-01/",
        "/(2023)/2023/day-02/",
        "/(2023)/2023/day-03/"
      ]
    },
    "/(2024)/2024": {
      "filePath": "(2024)/2024.tsx",
      "children": [
        "/(2024)/2024/day-01/",
        "/(2024)/2024/day-02/",
        "/(2024)/2024/day-03/",
        "/(2024)/2024/day-04/",
        "/(2024)/2024/day-05/"
      ]
    },
    "/(2023)/2023/day-01/": {
      "filePath": "(2023)/2023/day-01/index.tsx",
      "parent": "/(2023)/2023"
    },
    "/(2023)/2023/day-02/": {
      "filePath": "(2023)/2023/day-02/index.tsx",
      "parent": "/(2023)/2023"
    },
    "/(2023)/2023/day-03/": {
      "filePath": "(2023)/2023/day-03/index.tsx",
      "parent": "/(2023)/2023"
    },
    "/(2024)/2024/day-01/": {
      "filePath": "(2024)/2024/day-01/index.tsx",
      "parent": "/(2024)/2024"
    },
    "/(2024)/2024/day-02/": {
      "filePath": "(2024)/2024/day-02/index.tsx",
      "parent": "/(2024)/2024"
    },
    "/(2024)/2024/day-03/": {
      "filePath": "(2024)/2024/day-03/index.tsx",
      "parent": "/(2024)/2024"
    },
    "/(2024)/2024/day-04/": {
      "filePath": "(2024)/2024/day-04/index.tsx",
      "parent": "/(2024)/2024"
    },
    "/(2024)/2024/day-05/": {
      "filePath": "(2024)/2024/day-05/index.tsx",
      "parent": "/(2024)/2024"
    }
  }
}
ROUTE_MANIFEST_END */
