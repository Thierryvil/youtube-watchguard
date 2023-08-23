import { makeSearchController } from "../../main/factories"
import { adaptRoute } from "../../main/adapters"

import { type Router } from "express"

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post("/search", adaptRoute(makeSearchController()))
}
