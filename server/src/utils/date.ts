export function convertISO8601ToSeconds(duration: string): number {
  const match = duration.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/)
  if (match === null) {
    return 0
  }

  const hours = match[1] !== undefined ? parseInt(match[1]) : 0
  const minutes = match[2] !== undefined ? parseInt(match[2]) : 0
  const seconds = match[3] !== undefined ? parseInt(match[3]) : 0

  const hoursInSeconds = hours * 60 * 60
  const minutesInSeconds = minutes * 60

  const totalSeconds = hoursInSeconds + minutesInSeconds + seconds
  return totalSeconds
}

export function convertSecondsToDays(
  secondsInADay: number,
  seconds: number,
): number {
  return seconds / secondsInADay
}
