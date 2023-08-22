import { type VideoSearchList } from "@/domain/entities"

export interface GetVideoData {
  execute: () => Promise<VideoSearchList[]>
}
