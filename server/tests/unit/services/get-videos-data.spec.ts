import { GetVideosDataService } from "../../../src/data/services/get-videos-data"
import { type GetVideosDataRepository } from "../../../src/data/contracts/"
import { type VideoSearchList } from "../../../src/domain/entities"

class InMemoryGetVideosDataRepository implements GetVideosDataRepository {
  async load(query: string, maxResults: number): Promise<VideoSearchList[]> {
    return [
      {
        id: "1",
        title: "Any Title",
        description: "Any Description",
        publishedAt: "2021-01-01T00:00:00Z",
        thumbnail: "any_thumbnail",
      },
    ]
  }
}

describe("GetVideosData", () => {
  it("should return a list of videos", async () => {
    const repo = new InMemoryGetVideosDataRepository()
    const sut = new GetVideosDataService(repo)

    const result = await sut.execute("any_query", 1)

    expect(result).toEqual([
      {
        id: "1",
        title: "Any Title",
        description: "Any Description",
        publishedAt: "2021-01-01T00:00:00Z",
        thumbnail: "any_thumbnail",
      },
    ])
  })
})
