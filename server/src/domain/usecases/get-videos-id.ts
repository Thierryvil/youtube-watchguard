import { type VideoSearchList } from "../entities"

export interface GetVideosId {
  execute: (videos: VideoSearchList[]) => string[]
}
