import { GetVideosTotalTimeInSecondsService } from '../../../src/data/services'

describe('GetVideosTotalTimeInSeconds', () => {
  it('should return the total time in seconds', () => {
    const videosDuration = ["PT5S", "PT5S", "PT5S"]

    const sut = new GetVideosTotalTimeInSecondsService()

    expect(sut.execute(videosDuration)).toBe(15)
  })

  it('should return 0', () => {
    const videosDuration = ["", "", ""]

    const sut = new GetVideosTotalTimeInSecondsService()

    expect(sut.execute(videosDuration)).toBe(0)
  })
});