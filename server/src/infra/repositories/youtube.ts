import { type GetVideoDataRepository } from "../../data/contracts/get-video-data-repository"
import { type VideoDataModel } from "../../data/models/get-video-data"
import { SEARCH_VIEW_MODEL } from "../../utils/mocks/search-video-model"
import { type youtube_v3 } from "googleapis"

export class YoutubeRepository implements GetVideoDataRepository {
  constructor(
    private readonly youtubeAPI: youtube_v3.Youtube,
    private readonly query: string,
    private readonly maxResults: number,
    private readonly debug = false,
  ) {}

  async load(): Promise<VideoDataModel[]> {
    const videoData: VideoDataModel[] = []

    if (this.debug) {
      return SEARCH_VIEW_MODEL
    }

    let nextPageToken: string | undefined
    let totalVideosLoaded = 0

    while (totalVideosLoaded < 200) {
      const response = await this.youtubeAPI.search.list({
        q: this.query,
        part: ["snippet"],
        maxResults: this.maxResults,
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
