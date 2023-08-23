import { type VideoSearchListWithDuration } from "../entities"

export interface GetVideosDuration {
  execute: (videoIds: string[]) => Promise<VideoSearchListWithDuration[]>
}
