import { searchRouter } from "./main/routes/search-router"
import { server } from "./main/server"
import { settings } from "./settings"

async function main(): Promise<void> {
  try {
    server.use("/search", searchRouter)
    server.listen(settings.PORT, () => {
      console.log(`Server is listening on port ${settings.PORT}`)
    })
  } catch (error) {
    console.error("Error starting the server:", error)
  }
}

main().catch(console.error)
