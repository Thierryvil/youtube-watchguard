import { type VideoSearchListWithDuration } from "../entities"

export interface GetVideosDuration {
  execute: (videos: string[]) => Promise<VideoSearchListWithDuration[]>
}
