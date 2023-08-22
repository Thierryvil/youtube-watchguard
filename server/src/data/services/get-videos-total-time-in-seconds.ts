export class GetVideosTotalTimeInSecondsService {
  execute(videosDuration: number[]): number {
    return videosDuration.reduce((acc, cur) => acc + cur, 0)
  }
}
