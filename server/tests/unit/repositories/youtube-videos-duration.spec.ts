import { YoutuVideosDurationsRepository } from ".../../../src/infra/repositories"
import { google } from "googleapis"
import { YOUTUBE_VIDEOS_DURATION_MOCK } from "../../../src/utils/mocks/youtube-videos-duration-mock"

describe("YoutubeVideosDurationRepository", () => {
  const youtubeAPI = google.youtube({
    version: "v3",
  })

  it("should return mock", async () => {
    const repo = new YoutuVideosDurationsRepository(youtubeAPI, true)

    const load = await repo.load(["any_id", "any_id2"])

    expect(load).toEqual(YOUTUBE_VIDEOS_DURATION_MOCK)
  })
})
