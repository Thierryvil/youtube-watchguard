import { type VideoDataModelWithDuration } from "@/data/models/video"

export interface AllocateVideoByWeekday {
  execute: (
    secondsPerWeekDays: number[],
    videos: VideoDataModelWithDuration[],
  ) => VideoDataModelWithDuration[][]
}
