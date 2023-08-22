import { convertISO8601ToSeconds } from "../../utils"

export class GetVideosTotalTimeInSecondsService {
  execute(videosDuration: string[]): number {
    return videosDuration.reduce(
      (total, duration) => total + convertISO8601ToSeconds(duration),
      0,
    )
  }
}
