import { type VideoDataModelWithDuration } from "../models/video"

export interface GetVideoDurationRepository {
  load: (videosId: string[]) => Promise<VideoDataModelWithDuration[]>
}
