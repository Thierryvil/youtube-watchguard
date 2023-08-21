import { YoutubeRepositoryImpl } from "@/domain/repositories/youtube-repository-impl"
import { type youtube_v3 } from "googleapis"

const mockData: youtube_v3.Schema$SearchListResponse[] = [
  {
    kind: "youtube#searchListResponse",
    etag: "_Tj3--paS3hfp9-ykHy0g0kPqi8",
    nextPageToken: "CBkQAA",
    regionCode: "BR",
    pageInfo: {
      totalResults: 1000000,
      resultsPerPage: 25,
    },
    items: [
      {
        kind: "youtube#searchResult",
        etag: "WelMYhDTtR4cp5vLVqHuSApEqhc",
        id: {
          kind: "youtube#video",
          videoId: "ma67yOdMQfs",
        },
        snippet: {
          publishedAt: "2021-01-23T17:00:15Z",
          channelId: "UC--3c8RqSfAqYBdDjIG3UNA",
          title:
            "These Were The All-Time Surfing Moments Of The Year | Best Of 2020",
          description:
            "Well, that was a weird ride. Though it hasn't been easy, at least when we fixed our gaze on the ocean — or favorite place in the ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/ma67yOdMQfs/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/ma67yOdMQfs/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/ma67yOdMQfs/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Red Bull Surfing",
          liveBroadcastContent: "none",
        },
      },
    ],
  },
]

describe("YoutubeRepositoryImpl", () => {
  it("should fetch video data correctly", async () => {
    const repository = new YoutubeRepositoryImpl()

    jest.spyOn(repository, "fetchVideoIds").mockResolvedValue(mockData)

    const result = await repository.fetchVideoIds("query")

    expect(result).toEqual([
      {
        kind: "youtube#searchListResponse",
        etag: "_Tj3--paS3hfp9-ykHy0g0kPqi8",
        nextPageToken: "CBkQAA",
        regionCode: "BR",
        pageInfo: {
          totalResults: 1000000,
          resultsPerPage: 25,
        },
        items: [
          {
            kind: "youtube#searchResult",
            etag: "WelMYhDTtR4cp5vLVqHuSApEqhc",
            id: {
              kind: "youtube#video",
              videoId: "ma67yOdMQfs",
            },
            snippet: {
              publishedAt: "2021-01-23T17:00:15Z",
              channelId: "UC--3c8RqSfAqYBdDjIG3UNA",
              title:
                "These Were The All-Time Surfing Moments Of The Year | Best Of 2020",
              description:
                "Well, that was a weird ride. Though it hasn't been easy, at least when we fixed our gaze on the ocean — or favorite place in the ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/ma67yOdMQfs/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/ma67yOdMQfs/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/ma67yOdMQfs/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "Red Bull Surfing",
              liveBroadcastContent: "none",
            },
          },
        ],
      },
    ])
  })
})
