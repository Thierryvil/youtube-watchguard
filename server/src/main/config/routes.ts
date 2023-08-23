import { type Express, Router } from "express"
import { readdirSync } from "fs"
import path from "path"

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use("", router)

  const routesDirectory = path.join(__dirname, "..", "routes")
  readdirSync(routesDirectory).map(async (fileName) => {
    if (!fileName.includes(".map")) {
      const routeModule = (await import(path.join(routesDirectory, fileName)))
        .default
      routeModule(router)
    }
  })
}
