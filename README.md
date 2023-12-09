# Advent of Code

This repo uses bun to run typescript files without having to compile them first. It also uses the bun test command to run tests.

- [Advent of Code](#advent-of-code)
  - [Advent of TypeScript](#advent-of-typescript)
  - [Advent of Code](#advent-of-code-1)
    - [Prerequisites](#prerequisites)
    - [Run the code](#run-the-code)
    - [Run the tests](#run-the-tests)

## Advent of TypeScript

Install dependencies with bun by running `bun install`

Advent of typescript is simple compile checking, so you do not need to run anything if you editor is already checking for typescript errors.

## Advent of Code

### Prerequisites

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install Bun

### Run the code

You can run any file individually by running the following command:

```bash
bun run <path-to-file>
```

### Run the tests

You can run the tests for any file individually by running the following command:

```bash
bun test:watch 2023/day01
```

Will run the tests for the `2023/day01` folder
