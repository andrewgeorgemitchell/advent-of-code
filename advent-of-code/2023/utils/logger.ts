export const logger = (opts?: { debug?: boolean }) => {
  const debug = opts?.debug ?? false
  const log = (...args: Parameters<typeof console.log>) => {
    if (debug) {
      console.log(...args)
    }
  }
  return log
}
