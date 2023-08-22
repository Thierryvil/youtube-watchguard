import { type VideoDataModel } from "../models/get-video-data"

export interface GetVideoDataRepository {
  load: () => Promise<VideoDataModel[]>
}
