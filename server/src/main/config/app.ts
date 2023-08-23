import express from "express"
import { setupRoutes } from "./routes"
import cors from "cors"
import morgan from "morgan"

export const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))
app.use(morgan(":method :url :status - :response-time ms"))
setupRoutes(app)
