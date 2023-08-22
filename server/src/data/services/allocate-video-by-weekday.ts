import { type AllocateVideoByWeekday } from "@/domain/usecases"
import { type VideoDataModelWithDuration } from "../models/video"

export class AllocateVideoByWeekdayService implements AllocateVideoByWeekday {
  execute(
    secondsPerWeekDays: number[],
    videos: VideoDataModelWithDuration[],
  ): VideoDataModelWithDuration[][] {
    const result: VideoDataModelWithDuration[][] = []
    let dayIndex = 0
    const videosFit: VideoDataModelWithDuration[] = videos.filter((value2) => {
      const canFit = secondsPerWeekDays.some(
        (value1) => value1 >= value2.duration,
      )
      return canFit
    })
    const allVideos = [...videosFit]
    while (allVideos.length > 0) {
      const watchedVideos: VideoDataModelWithDuration[] = []
      if (dayIndex > secondsPerWeekDays.length - 1) {
        dayIndex = 0
      }
      let reaminingTime = secondsPerWeekDays[dayIndex]
      for (const video of allVideos) {
        if (video.duration > reaminingTime) {
          break
        } else {
          reaminingTime -= video.duration
          watchedVideos.push(allVideos.shift() as VideoDataModelWithDuration)
        }
      }
      result.push(watchedVideos)
      dayIndex++
    }
    return result
  }
}
