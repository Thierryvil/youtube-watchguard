import { GetVideosDurationService } from "../../../src/data/services/"
import { GetVideoDurationRepository  } from "../../../src/data/contracts/"

class InMemoryGetVideoDurationRepository implements GetVideoDurationRepository {
  async load(videosId: string[]) {
    return [{
      id: "1",
      title: "Any Title",
      duration: "PT1H1M1S",
      description: "Any Description",
      publishedAt: "2021-01-01T00:00:00Z",
      thumbnail: "any_thumbnail"
    }
    ]
  }
}


describe('GetVideosDuration', () => {

  it('should return a list of videos', () => { 
    const repo = new InMemoryGetVideoDurationRepository()
    const sut = new GetVideosDurationService(repo)

    expect(sut.execute(["any_id", "any_id2"])).resolves.toEqual([{
      id: "1",
      title: "Any Title",
      duration: "PT1H1M1S",
      description: "Any Description",
      publishedAt: "2021-01-01T00:00:00Z",
      thumbnail: "any_thumbnail"
    }])
  });
});