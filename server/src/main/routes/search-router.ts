import express from "express"
import { MostUsedWordsUseCase } from "../../domain/usecases/most-used-words-usecase"
import { VideoProcessorUseCase } from "../../domain/usecases/video-processor-usecase"
import { YoutubeRepositoryImpl } from "../../domain/repositories/youtube-repository-impl"
import { ProcessVideoDataUseCase } from "../../domain/usecases/process-video-data-usecase"
import { AllocateVideoTimeUseCase } from "../../domain/usecases/allocate-video-time-usecase"
import { CalculateTotalDurationUseCase } from "../../domain/usecases/calculate-total-duration-usecase"
import { google } from "googleapis"
import { settings } from "../../settings"
import { SearchController } from "../../presentation/controllers/search-controller"

const youtube = google.youtube({
  version: "v3",
  auth: settings.GOOGLE_API_KEY,
})
const youtubeRepository = new YoutubeRepositoryImpl(youtube)
const processVideoData = new ProcessVideoDataUseCase()
const mostUsedWords = new MostUsedWordsUseCase(settings.MAX_KEYWORD_DISPLAY)
const allocateVideoTime = new AllocateVideoTimeUseCase()
const calculateTotalDuration = new CalculateTotalDurationUseCase()
const searchVideoUseCase = new VideoProcessorUseCase(
  youtubeRepository,
  processVideoData,
  mostUsedWords,
  allocateVideoTime,
  calculateTotalDuration,
)
const searchController = new SearchController(searchVideoUseCase)

const searchRouter = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
searchRouter.post("/", async (req, res) => {
  await searchController.search(req, res)
})

export { searchRouter }
