import { GetVideosDataService } from "../../../src/data/services/get-videos-data"
import { GetVideosDataRepository  } from "../../../src/data/contracts/"

class InMemoryGetVideosDataRepository implements GetVideosDataRepository {
  async load(query: string, maxResults: number) {
    return [{
      id: "1",
      title: "Any Title",
      description: "Any Description",
      publishedAt: "2021-01-01T00:00:00Z",
      thumbnail: "any_thumbnail"
    }
    ]
  }
}


describe('GetVideosData', () => {

  it('should return a list of videos', () => { 
    const repo = new InMemoryGetVideosDataRepository()
    const sut = new GetVideosDataService(repo)

    expect(sut.execute('any_query', 1)).resolves.toEqual([{
      id: "1",
      title: "Any Title",
      description: "Any Description",
      publishedAt: "2021-01-01T00:00:00Z",
      thumbnail: "any_thumbnail"
    }])
  });
});