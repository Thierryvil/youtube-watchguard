import { convertISO8601ToSeconds } from "../../utils"
import { type GetVideoDurationRepository } from "../../data/contracts"
import { type VideoDataModelWithDuration } from "../../data/models/video"
import { youtubeMaxResults } from "../../utils/constants"
import { type youtube_v3 } from "googleapis"
import { VIDEO_WITH_DURATION_MOCK } from "../../utils/mocks/video-duration"

export class YoutuVideosDurationsRepository
  implements GetVideoDurationRepository
{
  constructor(
    private readonly youtubeAPI: youtube_v3.Youtube,
    private readonly debug = false,
  ) {}

  async load(videosId: string[]): Promise<VideoDataModelWithDuration[]> {
    const videoData: VideoDataModelWithDuration[] = []

    if (this.debug) {
      return VIDEO_WITH_DURATION_MOCK
    }

    for (
      let startIndex = 0;
      startIndex < videosId.length;
      startIndex += youtubeMaxResults
    ) {
      const endIndex = startIndex + youtubeMaxResults
      const youtubeMaxIds = videosId.slice(startIndex, endIndex)

      const response = await this.youtubeAPI.videos.list({
        part: ["snippet, contentDetails"],
        id: youtubeMaxIds,
        maxResults: youtubeMaxResults,
      })

      if (response.data.items !== undefined) {
        const mappedItems = response.data.items.map(
          (item: youtube_v3.Schema$Video) => ({
            id: item.id ?? "",
            title: item.snippet?.title ?? "",
            duration: convertISO8601ToSeconds(
              item.contentDetails?.duration ?? "",
            ),
            description: item.snippet?.description ?? "",
            publishedAt: item.snippet?.publishedAt ?? "",
            thumbnail: item.snippet?.thumbnails?.default?.url ?? "",
          }),
        )
        videoData.push(...mappedItems)
      }
    }

    return videoData
  }
}
