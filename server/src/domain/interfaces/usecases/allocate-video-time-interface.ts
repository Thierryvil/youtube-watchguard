import { type Video } from "@/entities/video"

export interface AllocateVideoTimeInterface {
  execute: (minutesPerWeekDays: number[], videos: Video[]) => Video[][]
}
