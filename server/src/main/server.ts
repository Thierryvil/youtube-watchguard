import { app } from "../main/config/app"
import env from "../main/config/env"

const mode = process.env.NODE_ENV ?? "development"

app.listen(env.PORT, () => {
  console.log(`Server running at http://localhost:${env.PORT} on ${mode} mode`)
})
