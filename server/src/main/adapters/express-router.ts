import { type Controller } from "@/presentation/contracts"

import { type Request, type Response } from "express"

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(req)
    res.status(httpResponse.statusCode).json(httpResponse.data)
  }
}
