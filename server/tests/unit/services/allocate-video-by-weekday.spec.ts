import { AllocateVideoByWeekdayService } from "../../../src/data/services"
import { type VideoSearchListWithDuration } from "../../../src/domain/entities"

describe("AllocateVideoTimeUseCase", () => {
  const sut = new AllocateVideoByWeekdayService()

  it("should return the list correctly.", () => {
    const secondsPerWeekDay: number[] = [
      900, 7200, 1800, 9000, 1200, 2400, 5400,
    ]
    const videos: VideoSearchListWithDuration[] = [
      {
        title: "title",
        description: "description",
        duration: 20 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 30 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 60 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 90 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 200 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 30 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 40 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 20 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 60 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 15 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
    ]

    const expected = [
      [],
      [
        {
          title: "title",
          description: "description",
          duration: 1200,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
        {
          title: "title",
          description: "description",
          duration: 1800,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
        {
          title: "title",
          description: "description",
          duration: 3600,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
      [],
      [
        {
          title: "title",
          description: "description",
          duration: 5400,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
        {
          title: "title",
          description: "description",
          duration: 1800,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
      [],
      [
        {
          title: "title",
          description: "description",
          duration: 2400,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
      [
        {
          title: "title",
          description: "description",
          duration: 1200,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
        {
          title: "title",
          description: "description",
          duration: 3600,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
      [
        {
          title: "title",
          description: "description",
          duration: 900,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
    ]
    expect(sut.execute(secondsPerWeekDay, videos)).toStrictEqual(expected)
  })

  it("should return empty list if weekdays 0.", () => {
    const secondsPerWeekDay: number[] = [0, 0, 0, 0, 0, 0, 0]
    const videos: VideoSearchListWithDuration[] = [
      {
        title: "title",
        description: "description",
        duration: 20 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 30 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 60 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 90 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 200 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 30 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 40 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 20 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 60 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 15 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
    ]

    const expected: VideoSearchListWithDuration[] = []
    expect(sut.execute(secondsPerWeekDay, videos)).toStrictEqual(expected)
  })

  it("should return the list correctly with weekdays with 0.", () => {
    const secondsPerWeekDay: number[] = [0, 0, 0, 0, 0, 0, 900]
    const videos: VideoSearchListWithDuration[] = [
      {
        title: "title",
        description: "description",
        duration: 900,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
    ]

    const expected: VideoSearchListWithDuration[][] = [
      [],
      [],
      [],
      [],
      [],
      [],
      [
        {
          title: "title",
          description: "description",
          duration: 900,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
    ]
    expect(sut.execute(secondsPerWeekDay, videos)).toStrictEqual(expected)
  })

  it("should restart the day of the week.", () => {
    const secondsPerWeekDay: number[] = [
      900, 7200, 1800, 9000, 1200, 2400, 5400,
    ]
    const videos: VideoSearchListWithDuration[] = [
      {
        title: "title",
        description: "description",
        duration: 20 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 30 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 60 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 90 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 200 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 30 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 40 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 20 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 60 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
      {
        title: "title",
        description: "description",
        duration: 17 * 60,
        id: "id",
        thumbnail: "thumbnail",
        publishedAt: "2021-01-01T00:00:00Z",
      },
    ]

    const expected = [
      [],
      [
        {
          title: "title",
          description: "description",
          duration: 1200,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
        {
          title: "title",
          description: "description",
          duration: 1800,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
        {
          title: "title",
          description: "description",
          duration: 3600,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
      [],
      [
        {
          title: "title",
          description: "description",
          duration: 5400,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
        {
          title: "title",
          description: "description",
          duration: 1800,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
      [],
      [
        {
          title: "title",
          description: "description",
          duration: 2400,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
      [
        {
          title: "title",
          description: "description",
          duration: 1200,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
        {
          title: "title",
          description: "description",
          duration: 3600,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
      [],
      [
        {
          title: "title",
          description: "description",
          duration: 1020,
          id: "id",
          thumbnail: "thumbnail",
          publishedAt: "2021-01-01T00:00:00Z",
        },
      ],
    ]
    expect(sut.execute(secondsPerWeekDay, videos)).toStrictEqual(expected)
  })
})
