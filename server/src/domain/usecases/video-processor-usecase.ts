import { type VideoProcessorResponse } from "../../entities/video-processor-response"
import { type VideoProcessorInterface } from "../interfaces/usecases/video-processor-interface"
import { type Video } from "../../entities/video"
import { type ProcessVideoDataInterface } from "../interfaces/usecases/process-video-data-interface"
import { type CalculateTotalDurationInterface } from "../interfaces/usecases/calculate-total-duration-interface"
import { type AllocateVideoTimeInterface } from "../interfaces/usecases/allocate-video-time-interface"
import { type MostUsedWordsInterface } from "../interfaces/usecases/most-used-words-interface"
import { type YoutubeRepository } from "../interfaces/repositories/youtube-repository"

export class VideoProcessorUseCase implements VideoProcessorInterface {
  constructor(
    private readonly youtube: YoutubeRepository,
    private readonly processVideoData: ProcessVideoDataInterface,
    private readonly mostUsedWords: MostUsedWordsInterface,
    private readonly allocateVideoTime: AllocateVideoTimeInterface,
    private readonly calculateTotalDuration: CalculateTotalDurationInterface,
  ) {}

  async execute(
    secondsPerWeekDay: number[],
    query: string,
  ): Promise<VideoProcessorResponse[]> {
    const videoIds = await this.youtube.fetchVideoIds(query)
    const videoData = await this.youtube.fetchVideoDuration(videoIds)
    const videos = this.processVideoData.execute(videoData)
    const mostUsedWordsInTitles = this.mostUsedWords.execute(
      videos.map((video: Video) => video.title),
    )
    const mostUsedWordsInDescriptions = this.mostUsedWords.execute(
      videos.map((video: Video) => video.description),
    )
    const allocatedVideos = this.allocateVideoTime.execute(
      secondsPerWeekDay,
      videos,
    )
    const totalDuration = this.calculateTotalDuration.execute(videos)

    return [
      {
        mostUsedWordsInDescriptions,
        mostUsedWordsInTitles,
        totalInSecondsToWatchAllVideos: totalDuration,
        videos: allocatedVideos,
      },
    ]
  }
}
