import { type VideoSearchListWithDuration } from "../../domain/entities"
import { type GetVideosDuration } from "../../domain/usecases/get-videos-duration"
import { type GetVideoDurationRepository } from "../contracts"

export class GetVideosDurationService implements GetVideosDuration {
  constructor(
    private readonly getVideoDurationRepository: GetVideoDurationRepository,
  ) {}

  async execute(videoIds: string[]): Promise<VideoSearchListWithDuration[]> {
    const videoData = await this.getVideoDurationRepository.load(videoIds)
    return videoData
  }
}
