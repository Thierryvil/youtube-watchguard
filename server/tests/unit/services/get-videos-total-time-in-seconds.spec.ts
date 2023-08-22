import { GetVideosTotalTimeInSecondsService } from '../../../src/data/services'

describe('GetVideosTotalTimeInSeconds', () => {
  it('should return the total time in seconds', () => {
    const videosDuration = [5, 5, 5]

    const sut = new GetVideosTotalTimeInSecondsService()

    expect(sut.execute(videosDuration)).toBe(15)
  })

  it('should return 0', () => {
    const videosDuration = [0, 0, 0]

    const sut = new GetVideosTotalTimeInSecondsService()

    expect(sut.execute(videosDuration)).toBe(0)
  })
});