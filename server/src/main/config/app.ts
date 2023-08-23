import express from "express"
import { setupRoutes } from "./routes"
import cors from "cors"

export const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))
setupRoutes(app)
