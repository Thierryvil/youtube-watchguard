import {
  type Controller,
  type HttpResponse,
  serverError,
  ok,
  clientError,
} from "../../presentation/contracts"
import { type SearchViewModel } from "../view-model/search"
import { type GetVideoData, type GetVideosId } from "../../domain/usecases"
import { type Request } from "express"

export class SearchController implements Controller {
  constructor(
    private readonly getVideoData: GetVideoData,
    private readonly getVideosId: GetVideosId,
  ) {}

  async handle(
    req: Request,
  ): Promise<HttpResponse<SearchViewModel[] | string>> {
    try {
      const { query, secondsPerWeekDays } = req.body

      if (query === undefined) {
        return clientError("query is required")
      }

      if (secondsPerWeekDays === undefined) {
        return clientError("secondsPerWeekDays is required")
      }

      const videosData = await this.getVideoData.execute()
      const videosId = this.getVideosId.execute(videosData)
      const x: SearchViewModel[] = [
        {
          mostUsedWordsInDescriptions: [],
          mostUsedWordsInTitles: [],
          totalInSecondsToWatchAllVideos: 0,
          videos: [],
        },
      ]
      return ok(x)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
