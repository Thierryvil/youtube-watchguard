import { type VideoProcessorResponse } from "@/entities/video-processor-response"

export interface VideoProcessorInterface {
  execute: (
    secondsPerWeekDay: number[],
    query: string,
  ) => Promise<VideoProcessorResponse[]>
}
