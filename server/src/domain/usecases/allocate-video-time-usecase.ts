import { type Video } from "../../entities/video"
import { type AllocateVideoTimeInterface } from "../interfaces/usecases/allocate-video-time-interface"

export class AllocateVideoTimeUseCase implements AllocateVideoTimeInterface {
  execute(secondsPerWeekDays: number[], videos: Video[]): Video[][] {
    const result: Video[][] = []
    let dayIndex = 0
    const videosFit: Video[] = videos.filter((value2) => {
      const canFit = secondsPerWeekDays.some(
        (value1) => value1 >= value2.duration,
      )
      return canFit
    })
    const allVideos = [...videosFit]
    while (allVideos.length > 0) {
      const watchedVideos: Video[] = []
      if (dayIndex > secondsPerWeekDays.length - 1) {
        dayIndex = 0
      }
      let reaminingTime = secondsPerWeekDays[dayIndex]
      for (const video of allVideos) {
        if (video.duration > reaminingTime) {
          break
        } else {
          reaminingTime -= video.duration
          watchedVideos.push(allVideos.shift() as Video)
        }
      }
      result.push(watchedVideos)
      dayIndex++
    }
    return result
  }
}
