import { type HttpResponse } from "@/presentation/contracts"
import { type Request } from "express"

export interface Controller {
  handle: (req: Request) => Promise<HttpResponse<unknown>>
}
