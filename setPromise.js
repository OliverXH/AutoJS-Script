const runningTasks = new Set<number>()
const runningHandlers = new Map<number, Promise<any>>()

let id = 0

// number
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// number
// Parameters<typeof setPromiseInterval>
async function run(
  id,
  ...[handler, interval = 0]
) {
  while (runningTasks.has(id)) {
    const startTime = new Date().getTime()
    runningHandlers.set(id, handler())
    try {
      await runningHandlers.get(id)
    } catch (e) {
      throw e
    } finally {
      runningHandlers.delete(id)
    }
    await delay(interval - new Date().getTime() + startTime)
  }
}

// number
export async function clearPromiseInterval(intervalId) {
  if (typeof intervalId === 'number' && runningTasks.has(intervalId)) {
    if (runningHandlers.has(intervalId)) {
      await runningHandlers.get(intervalId)
    }
    runningTasks.delete(intervalId)
  }
}

// (...args: any[]) => Promise<any>
// number
export default function setPromiseInterval(handler, interval) {
  id += 1
  runningTasks.add(id)
  run(id, handler, interval)
  return id
}