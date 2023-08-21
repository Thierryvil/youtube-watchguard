import { ProcessVideoDataUseCase } from "@/domain/usecases/process-video-data-usecase"
import { type Video } from "@/entities/video"

describe("ProcessVideoDataUseCase", () => {
  let processVideoDataUseCase: ProcessVideoDataUseCase

  beforeEach(() => {
    processVideoDataUseCase = new ProcessVideoDataUseCase()
  })

  it("should return the same array of videos", () => {
    const inputVideos: Video[] = [
      {
        id: "1",
        title: "Video 1",
        duration: 1,
        description: "test",
        thumbnail: "test",
      },
      {
        id: "2",
        title: "Video 2",
        duration: 3,
        description: "test",
        thumbnail: "test",
      },
      {
        id: "3",
        title: "Video 3",
        duration: 4,
        description: "test",
        thumbnail: "test",
      },
    ]

    const outputVideos = processVideoDataUseCase.execute(inputVideos)

    expect(outputVideos).toEqual(inputVideos)
  })
})
