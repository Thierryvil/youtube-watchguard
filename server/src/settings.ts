import { config } from "dotenv"

config()

export const settings = {
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  PORT: process.env.PORT ?? 5000,
  MAX_VIDEO_DISPLAY: Number(process.env.MAX_VIDEO_DISPLAY ?? 200),
  MAX_KEYWORD_DISPLAY: Number(process.env.MAX_KEYWORD_DISPLAY ?? 5),
}
