export class GetVideosTotalTimeInSecondsService {
  execute(videosDuration: number[]): number {
    return videosDuration.reduce((total, duration) => total + duration, 0)
  }
}
