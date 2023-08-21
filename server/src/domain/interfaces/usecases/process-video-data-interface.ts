import { type Video } from "@/entities/video"

export interface ProcessVideoDataInterface {
  execute: (videos: Video[]) => Video[]
}
