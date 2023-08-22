import {
  type Controller,
  type HttpResponse,
  serverError,
  ok,
  clientError,
} from "../../presentation/contracts"
import { type SearchViewModel } from "../view-model/search"
import { type GetVideoData } from "../../domain/usecases"
import { type Request } from "express"

export class SearchController implements Controller {
  constructor(private readonly getVideoData: GetVideoData) {}

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

      const videoData = await this.getVideoData.execute()
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
