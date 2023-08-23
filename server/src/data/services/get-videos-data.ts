import { type VideoSearchList } from "../../domain/entities"
import { type GetVideosData } from "../../domain/usecases"
import { type GetVideosDataRepository } from "../../data/contracts"

export class GetVideosDataService implements GetVideosData {
  constructor(
    private readonly getVideoDataRepository: GetVideosDataRepository,
  ) {}

  async execute(query: string, maxResults: number): Promise<VideoSearchList[]> {
    const videoData = await this.getVideoDataRepository.load(query, maxResults)
    return videoData
  }
}
