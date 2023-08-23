import { GetVideosDurationService } from "../../../src/data/services/"
import { type GetVideoDurationRepository } from "../../../src/data/contracts/"
import { type VideoSearchListWithDuration } from "../../../src/domain/entities"

class InMemoryGetVideoDurationRepository implements GetVideoDurationRepository {
  async load(videosId: string[]): Promise<VideoSearchListWithDuration[]> {
    return [
      {
        id: "1",
        title: "Any Title",
        duration: 60,
        description: "Any Description",
        publishedAt: "2021-01-01T00:00:00Z",
        thumbnail: "any_thumbnail",
      },
    ]
  }
}

describe("GetVideosDuration", () => {
  it("should return a list of videos", async () => {
    const repo = new InMemoryGetVideoDurationRepository()
    const sut = new GetVideosDurationService(repo)
    const result = await sut.execute(["any_id", "any_id2"])

    expect(result).toEqual([
      {
        id: "1",
        title: "Any Title",
        duration: 60,
        description: "Any Description",
        publishedAt: "2021-01-01T00:00:00Z",
        thumbnail: "any_thumbnail",
      },
    ])
  })
})
