import { type VideoSearchList } from "@/domain/entities"

export interface GetVideosData {
  execute: (query: string, maxResults: number) => Promise<VideoSearchList[]>
}
