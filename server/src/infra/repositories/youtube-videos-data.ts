import { type GetVideosDataRepository } from "../../data/contracts/get-videos-data-repository"
import { type VideoDataModel } from "../../data/models/video"
import { YOUTUBE_VIDEOS_DATA_MOCK } from "../../utils/mocks/youtube-video-data-mock"
import { type youtube_v3 } from "googleapis"

export class YoutubeVideosDataRepository implements GetVideosDataRepository {
  constructor(
    private readonly youtubeAPI: youtube_v3.Youtube,
    private readonly debug = false,
  ) {}

  async load(query: string, maxResults: number): Promise<VideoDataModel[]> {
    const videoData: VideoDataModel[] = []

    if (this.debug) {
      return YOUTUBE_VIDEOS_DATA_MOCK
    }

    let nextPageToken: string | undefined
    let totalVideosLoaded = 0

    while (totalVideosLoaded < maxResults) {
      const response = await this.youtubeAPI.search.list({
        q: query,
        part: ["snippet"],
        maxResults,
        pageToken: nextPageToken,
      })

      if (response.data.items == null) {
        break
      }

      const mappedItems = response.data.items.map(
        (item: youtube_v3.Schema$SearchResult) => ({
          id: item.id?.videoId ?? "",
          title: item.snippet?.title ?? "",
          description: item.snippet?.description ?? "",
          publishedAt: item.snippet?.publishedAt ?? "",
          thumbnail: item.snippet?.thumbnails?.default?.url ?? "",
        }),
      )
      videoData.push(...mappedItems)

      totalVideosLoaded += mappedItems.length
      nextPageToken = response.data.nextPageToken ?? undefined
    }

    return videoData
  }
}
