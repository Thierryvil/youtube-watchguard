import { MOCK_YOUTUBE_SEARCH_LIST } from "../../utils/mocks/youtube-search-list"
import { type YoutubeRepository } from "../interfaces/repositories/youtube-repository"
import { MOCK_YOUTUBE_VIDEO_LIST } from "../../utils/mocks/youtube-video-list"
import { convertISO8601ToSeconds } from "../../utils/date"
import { type Video } from "@/entities/video"
import { type youtube_v3 } from "googleapis"

export class YoutubeRepositoryImpl implements YoutubeRepository {
  constructor(private readonly youtubeAPI: youtube_v3.Youtube) {
    this.youtubeAPI = youtubeAPI
  }

  async fetchVideoIds(query: string): Promise<string[]> {
    const allVideosIds: string[] = []
    const videoList = MOCK_YOUTUBE_SEARCH_LIST

    if (videoList.data?.items != null) {
      allVideosIds.push(
        ...videoList.data.items
          .filter((item) => item.id.videoId !== undefined)
          .map((item) => item.id.videoId!),
      )
    }
    return allVideosIds
  }

  async fetchVideoDuration(videoIds: string[]): Promise<Video[]> {
    const result: Video[] = []
    const videoDuration = MOCK_YOUTUBE_VIDEO_LIST
    if (videoDuration.data?.items != null) {
      const allVideoDurations = videoDuration.data?.items?.filter(
        (item) => item.contentDetails?.duration !== undefined,
      )
      allVideoDurations.forEach((item) => {
        result.push({
          id: item.id,
          duration: convertISO8601ToSeconds(item.contentDetails?.duration),
          title: item.snippet?.title ?? "",
          description: item.snippet?.description ?? "",
          thumbnail: item.snippet?.thumbnails?.default?.url ?? "",
        })
      })
    }
    return result
  }
}
