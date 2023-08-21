import { type Video } from "@/entities/video"

export interface YoutubeRepository {
  fetchVideoIds: (query: string) => Promise<string[]>
  fetchVideoDuration: (videoIds: string[]) => Promise<Video[]>
}
