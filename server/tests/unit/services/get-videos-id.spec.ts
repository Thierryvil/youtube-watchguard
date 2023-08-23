import { type VideoSearchList } from "../../../src/domain/entities"
import { GetVideosIdService } from "../../../src/data/services"

describe("GetVideosId", () => {
  const sut = new GetVideosIdService()

  it("should return an array of ids", () => {
    const videos: VideoSearchList[] = [
      {
        id: "Ptbk2af68e8",
        title: "O que o JavaScript é capaz de fazer? - Curso JavaScript #01",
        description:
          "Você sabe para que serve a linguagem JavaScript / ECMAScript? Sabe a diferença entre um cliente e um servidor para a Internet ...",
        publishedAt: "2019-05-27T16:00:04Z",
        thumbnail: "https://i.ytimg.com/vi/Ptbk2af68e8/default.jpg",
      },
      {
        id: "Ptbk2af68e7",
        title: "O que o JavaScript é capaz de fazer? - Curso JavaScript #01",
        description:
          "Você sabe para que serve a linguagem JavaScript / ECMAScript? Sabe a diferença entre um cliente e um servidor para a Internet ...",
        publishedAt: "2019-05-27T16:00:04Z",
        thumbnail: "https://i.ytimg.com/vi/Ptbk2af68e8/default.jpg",
      },
    ]

    expect(sut.execute(videos)).toEqual(
      expect.arrayContaining(["Ptbk2af68e8", "Ptbk2af68e7"]),
    )
  })

  it("should return an empty array", () => {
    const videos: VideoSearchList[] = [
      {
        id: "",
        title: "O que o JavaScript é capaz de fazer? - Curso JavaScript #01",
        description:
          "Você sabe para que serve a linguagem JavaScript / ECMAScript? Sabe a diferença entre um cliente e um servidor para a Internet ...",
        publishedAt: "2019-05-27T16:00:04Z",
        thumbnail: "https://i.ytimg.com/vi/Ptbk2af68e8/default.jpg",
      },
    ]

    expect(sut.execute(videos)).toEqual(expect.arrayContaining([]))
  })
})
