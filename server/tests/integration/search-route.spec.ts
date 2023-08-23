import { app } from "../../src/main/config/app"
import request from "supertest"
import { setupServer } from "msw/node"
import { rest } from "msw"

const mockVideoResponse = {
  items: [
    {
      kind: "youtube#video",
      etag: "15f7eoRimLotBzWdZL9tpvgHbUs",
      id: "Ks-_Mh1QhMc",
      snippet: {
        publishedAt: "2012-10-01T15:27:35Z",
        channelId: "UCAuUUnT6oDeKwE6v1NGQxug",
        title: "Your body language may shape who you are | Amy Cuddy",
        description:
          "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Ks-_Mh1QhMc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Ks-_Mh1QhMc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Ks-_Mh1QhMc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/Ks-_Mh1QhMc/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/Ks-_Mh1QhMc/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "TED",
        tags: [
          "Amy Cuddy",
          "TED",
          "TEDTalk",
          "TEDTalks",
          "TED Talk",
          "TED Talks",
          "TEDGlobal",
          "brain",
          "business",
          "psychology",
          "self",
          "success",
        ],
        categoryId: "22",
        liveBroadcastContent: "none",
        defaultLanguage: "en",
        localized: {
          title: "Your body language may shape who you are | Amy Cuddy",
          description:
            "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
        },
        defaultAudioLanguage: "en",
      },
      contentDetails: {
        duration: "PT21M3S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        contentRating: {},
        projection: "rectangular",
      },
      statistics: {
        viewCount: "23575724",
        likeCount: "397766",
        favoriteCount: "0",
        commentCount: "9538",
      },
    },
  ],
}

const server = setupServer(
  rest.get(
    "https://youtube.googleapis.com/youtube/v3/videos",
    async (req, res, ctx) => {
      return await res(ctx.status(200), ctx.json(mockVideoResponse))
    },
  ),
)

describe("Search Route Integration Tests", () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: "bypass" })
  })
  afterEach(() => {
    server.resetHandlers()
  })
  afterAll(() => {
    server.close()
  })

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const makeSearchRequest = async (body: {
    query?: string
    secondsPerWeekDays?: number[]
  }) => {
    return await request(app).post("/search").send(body)
  }

  it("should response correct", async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [900, 7200, 1800, 9000, 1200, 2400, 5400],
    }

    const response = await makeSearchRequest(body)

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
  })

  it("should response have propertys", async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [900, 7200, 1800, 9000, 1200, 2400, 5400],
    }

    const response = await makeSearchRequest(body)

    response.body.forEach((item) => {
      expect(item).toHaveProperty("mostUsedWordsInDescriptions")
      expect(item).toHaveProperty("mostUsedWordsInTitles")
      expect(item).toHaveProperty("totalInSecondsToWatchAllVideos")
      expect(item).toHaveProperty("videos")
    })
  })

  it("should mostUsedWordsInDescriptions be a array", async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [900, 7200, 1800, 9000, 1200, 2400, 5400],
    }

    const response = await makeSearchRequest(body)

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    response.body.forEach((item) => {
      expect(item).toHaveProperty("mostUsedWordsInDescriptions")
      expect(Array.isArray(item.mostUsedWordsInDescriptions)).toBe(true)
    })
  })

  it("should mostUsedWordsInTitles be a array", async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [900, 7200, 1800, 9000, 1200, 2400, 5400],
    }

    const response = await makeSearchRequest(body)

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    response.body.forEach((item) => {
      expect(item).toHaveProperty("mostUsedWordsInTitles")
      expect(Array.isArray(item.mostUsedWordsInTitles)).toBe(true)
    })
  })

  it("should totalInSecondsToWatchAllVideos be a number", async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [900, 7200, 1800, 9000, 1200, 2400, 5400],
    }

    const response = await makeSearchRequest(body)

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    response.body.forEach((item) => {
      expect(item).toHaveProperty("totalInSecondsToWatchAllVideos")
      expect(typeof item.totalInSecondsToWatchAllVideos).toBe("number")
    })
  })

  it("should videos be a array", async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [900, 7200, 1800, 9000, 1200, 2400, 5400],
    }

    const response = await makeSearchRequest(body)

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    response.body.forEach((item) => {
      expect(item).toHaveProperty("videos")
      expect(Array.isArray(item.videos)).toBe(true)
    })
  })

  it("should return status code 404 for missing query in body", async () => {
    const body = {
      secondsPerWeekDays: [900, 7200, 1800, 9000, 1200, 2400, 5400],
    }

    const response = await makeSearchRequest(body)

    expect(response.status).toBe(404)
  })

  it("should return status code 404 for missing secondsPerWeekDays in body", async () => {
    const body = {
      query: "test",
    }

    const response = await makeSearchRequest(body)

    expect(response.status).toBe(404)
  })
})
