import {
  GetVideosDataService,
  GetVideosIdService,
  GetVideosDurationService,
  GetMostUsedWordsService,
} from "../../data/services"
import {
  YoutuVideosDurationsRepository,
  YoutubeVideosDataRepository,
} from "../../infra/repositories/"
import { type Controller } from "../../presentation/contracts"
import { SearchController } from "../../presentation/controllers"
import { google } from "googleapis"
import env from "../config/env"

export const makeSearchController = (): Controller => {
  const youtubeAPI = google.youtube({
    version: "v3",
    auth: env.GOOGLE_API_KEY,
  })

  const repo = new YoutubeVideosDataRepository(youtubeAPI, env.DEBUG)

  const getVideosDurationRepo = new YoutuVideosDurationsRepository(youtubeAPI)
  const getVideosDataService = new GetVideosDataService(repo)
  const getVideosIdService = new GetVideosIdService()
  const getVideosDurationService = new GetVideosDurationService(
    getVideosDurationRepo,
  )
  const getMostUsedWordsService = new GetMostUsedWordsService()
  const searchController = new SearchController(
    getVideosDataService,
    getVideosIdService,
    getVideosDurationService,
    getMostUsedWordsService,
  )
  return searchController
}
