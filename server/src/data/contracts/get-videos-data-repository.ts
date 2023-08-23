import { type VideoDataModel } from "../models/video"

export interface GetVideosDataRepository {
  load: (query: string, maxResults: number) => Promise<VideoDataModel[]>
}
