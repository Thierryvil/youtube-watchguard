import { type ProcessVideoDataInterface } from "@/domain/interfaces/usecases/process-video-data-interface"
import { type MostUsedWordsInterface } from "@/domain/interfaces/usecases/most-used-words-interface"
import { type AllocateVideoTimeInterface } from "@/domain/interfaces/usecases/allocate-video-time-interface"
import { type CalculateTotalDurationInterface } from "@/domain/interfaces/usecases/calculate-total-duration-interface"
import { VideoProcessorUseCase } from "@/domain/usecases/video-processor-usecase"
import { type Video } from "@/entities/video"
import { type YoutubeRepository } from "@/domain/interfaces/repositories/youtube-repository"

describe("VideoProcessorUseCase", () => {
  it("should process video data and return expected response", async () => {
    const mockVideoData = ""
    const mockProcessedVideos = [
      {
        id: "1",
        title: "Video 1",
        duration: 1,
        description: "test",
        thumbnail: "test",
      },
    ]
    const mockMostUsedWords = ["Teste", "Um", "Apenas", "É", "De"]
    const mockAllocatedVideos = [
      [
        {
          title: "title",
          description: "description",
          duration: 1200,
          id: "id",
          thumbnail: "thumbnail",
        },
      ],
    ]
    const mockTotalDuration = ""
    const secondsPerWeekDay = [1, 2, 3, 4, 5, 6, 7]
    const mockQuery = "query"
    const expected = [
      {
        mostUsedWordsInDescriptions: ["Teste", "Um", "Apenas", "É", "De"],
        mostUsedWordsInTitles: ["Teste", "Um", "Apenas", "É", "De"],
        totalInSecondsToWatchAllVideos: "",
        videos: [
          [
            {
              description: "description",
              duration: 1200,
              id: "id",
              thumbnail: "thumbnail",
              title: "title",
            },
          ],
        ],
      },
    ]

    const mockYoutubeData: YoutubeRepository = {
      fetchVideoIds: jest.fn().mockReturnValue(mockVideoData),
      fetchVideoDuration: jest.fn().mockReturnValue(mockVideoData),
    }

    const mockProcessVideoData: ProcessVideoDataInterface = {
      execute: jest.fn().mockReturnValue(mockProcessedVideos),
    }
    const mockMostUsedWordsData: MostUsedWordsInterface = {
      execute: jest.fn().mockReturnValue(mockMostUsedWords),
    }
    const mockAllocateVideoTime: AllocateVideoTimeInterface = {
      execute: jest.fn().mockReturnValue(mockAllocatedVideos),
    }
    const mockCalculateTotalDuration: CalculateTotalDurationInterface = {
      execute: jest.fn().mockReturnValue(mockTotalDuration),
    }

    const videoProcessor = new VideoProcessorUseCase(
      mockYoutubeData,
      mockProcessVideoData,
      mockMostUsedWordsData,
      mockAllocateVideoTime,
      mockCalculateTotalDuration,
    )

    const result = await videoProcessor.execute(secondsPerWeekDay, mockQuery)

    expect(result).toEqual(expected)
    expect(mockProcessVideoData.execute).toHaveBeenCalledWith(mockVideoData)
    expect(mockMostUsedWordsData.execute).toHaveBeenCalledWith(
      mockProcessedVideos.map((video: Video) => video.title),
    )
    expect(mockMostUsedWordsData.execute).toHaveBeenCalledWith(
      mockProcessedVideos.map((video: Video) => video.description),
    )
    expect(mockAllocateVideoTime.execute).toHaveBeenCalledWith(
      secondsPerWeekDay,
      mockProcessedVideos,
    )
    expect(mockCalculateTotalDuration.execute).toHaveBeenCalledWith(
      mockProcessedVideos,
    )
  })
})
