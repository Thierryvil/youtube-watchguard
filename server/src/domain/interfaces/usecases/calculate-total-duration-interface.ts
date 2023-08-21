import { type Video } from "@/entities/video"

export interface CalculateTotalDurationInterface {
  execute: (videos: Video[]) => number
}
