import { GetVideoDataService } from "../../data/services/get-video-data"
import { YoutubeRepository } from "../../infra/repositories/youtube"
import { type Controller } from "../../presentation/contracts"
import { SearchController } from "../../presentation/controllers"
import { google } from "googleapis"
import env from "../config/env"

export const makeSearchController = (): Controller => {
  const youtubeAPI = google.youtube({
    version: "v3",
    auth: env.GOOGLE_API_KEY,
  })

  const repo = new YoutubeRepository(
    youtubeAPI,
    "javascript",
    env.MAX_VIDEOS_RESULT,
    env.DEBUG,
  )
  const getVideoDataService = new GetVideoDataService(repo)
  const searchController = new SearchController(getVideoDataService)
  return searchController
}
