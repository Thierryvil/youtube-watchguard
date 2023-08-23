import { app } from "../main/config/app"
import env from "../main/config/env"

app.listen(env.PORT, () => {
  console.log(`Server running at http://localhost:${env.PORT}`)
})
