import { type VideoSearchList } from "@/domain/entities"
import { type GetVideoData } from "@/domain/usecases"
import { type GetVideoDataRepository } from "@/data/contracts/get-video-data-repository"

export class GetVideoDataService implements GetVideoData {
  constructor(
    private readonly getVideoDataRepository: GetVideoDataRepository,
  ) {}

  async execute(): Promise<VideoSearchList[]> {
    const videoData = await this.getVideoDataRepository.load()
    return videoData
  }
}
