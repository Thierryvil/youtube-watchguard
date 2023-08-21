import { CalculateTotalDurationUseCase } from "@/domain/usecases/calculate-total-duration-usecase"
import { type Video } from "@/entities/video"

describe("CalculateTotalDurationUseCase", () => {
  it("should return the total duration of all videos in seconds", () => {
    const videos: Video[] = [
      {
        duration: 5,
        description: "description",
        id: "",
        thumbnail: "",
        title: "",
      },
      {
        duration: 5,
        description: "description",
        id: "",
        thumbnail: "",
        title: "",
      },
      {
        duration: 5,
        description: "description",
        id: "",
        thumbnail: "",
        title: "",
      },
    ]
    const sut = new CalculateTotalDurationUseCase()
    const totalDuration = sut.execute(videos)
    expect(totalDuration).toBe(15)
  })

  it("should return 0 if there is no video", () => {
    const videos: Video[] = []
    const sut = new CalculateTotalDurationUseCase()
    const totalDuration = sut.execute(videos)
    expect(totalDuration).toBe(0)
  })
})
