import { type VideoSearchList } from "../../domain/entities"
import { type GetVideosId } from "../../domain/usecases/get-videos-id"

export class GetVideosIdService implements GetVideosId {
  execute(videos: VideoSearchList[]): string[] {
    const ids = videos
      .filter((video) => video.id !== "")
      .map((video) => video.id)
    return ids
  }
}
