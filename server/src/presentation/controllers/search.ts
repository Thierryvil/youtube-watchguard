import {
  type Controller,
  type HttpResponse,
  serverError,
  ok,
  clientError,
} from "../../presentation/contracts"
import { Video, type SearchViewModel } from "../view-model/search"
import {
  type GetVideosDuration,
  type GetVideosData,
  type GetVideosId,
  type GetMostUsedWords,
  type GetVideosTotalTimeInSeconds,
  type AllocateVideoByWeekday,
} from "../../domain/usecases"
import { type Request } from "express"
import env from "../../main/config/env"

export class SearchController implements Controller {
  constructor(
    private readonly getVideoData: GetVideosData,
    private readonly getVideosId: GetVideosId,
    private readonly getVideosDuration: GetVideosDuration,
    private readonly getMostUsedWords: GetMostUsedWords,
    private readonly getVideosTotalTimeInSeconds: GetVideosTotalTimeInSeconds,
    private readonly allocateVideos: AllocateVideoByWeekday,
  ) {}

  async handle(req: Request): Promise<HttpResponse<SearchViewModel | string>> {
    try {
      const { query, secondsPerWeekDays } = req.body

      if (query === undefined) {
        return clientError("query is required")
      }

      if (secondsPerWeekDays === undefined) {
        return clientError("secondsPerWeekDays is required")
      }

      const videosData = await this.getVideoData.execute(
        query,
        env.MAX_VIDEOS_RESULT,
      )
      const videosId = this.getVideosId.execute(videosData)
      const videosDuration = await this.getVideosDuration.execute(videosId)

      const allVideosTitle = videosData
        .filter((video) => video.title !== "")
        .map((video) => video.title)

      const allVideosDescriptions = videosData
        .filter((video) => video.description !== "")
        .map((video) => video.description)

      const mostUsedWordsInTitles = this.getMostUsedWords.execute(
        allVideosTitle,
        env.MAX_KEYWORD_DISPLAY,
      )
      const mostUsedWordsInDescriptions = this.getMostUsedWords.execute(
        allVideosDescriptions,
        env.MAX_KEYWORD_DISPLAY,
      )

      const allVideoDurations = videosDuration
        .filter((video) => video.duration > 0)
        .map((video) => video.duration)
      const totalInSecondsToWatchAllVideos =
        this.getVideosTotalTimeInSeconds.execute(allVideoDurations)

      const videosAllocated = this.allocateVideos.execute(
        secondsPerWeekDays,
        videosDuration,
      )
      const x: SearchViewModel = {
        mostUsedWordsInDescriptions,
        mostUsedWordsInTitles,
        totalInSecondsToWatchAllVideos,
        videos: Video.mapList(videosAllocated),
      }
      return ok(x)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
