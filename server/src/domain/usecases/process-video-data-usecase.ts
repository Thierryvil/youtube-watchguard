import { type Video } from "../..//entities/video"
import { type ProcessVideoDataInterface } from "../interfaces/usecases/process-video-data-interface"

export class ProcessVideoDataUseCase implements ProcessVideoDataInterface {
  execute(videos: Video[]): Video[] {
    return videos
  }
}
