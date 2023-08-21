import { type Video } from "../../entities/video"
import { type CalculateTotalDurationInterface } from "../interfaces/usecases/calculate-total-duration-interface"

export class CalculateTotalDurationUseCase
  implements CalculateTotalDurationInterface
{
  execute(videos: Video[]): number {
    return videos.reduce(
      (totalDuration: number, video: Video) => totalDuration + video.duration,
      0,
    )
  }
}
