import { type VideoProcessorInterface } from "@/domain/interfaces/usecases/video-processor-interface"
import { type Request, type Response } from "express"

export class SearchController {
  constructor(private readonly videoProcessor: VideoProcessorInterface) {}

  async search(req: Request, res: Response): Promise<void> {
    try {
      const { query, secondsForWeekDays } = req.body

      const result = await this.videoProcessor.execute(
        secondsForWeekDays,
        query,
      )
      res.status(200).json(result)
    } catch (error) {
      console.error("Error processing the request:", error)
      res.status(500).json({ message: "Internal server error" })
    }
  }
}
