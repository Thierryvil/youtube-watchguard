import { SearchResponse } from "../entities"
import settings from "../env"

export interface FetchProps {
  secondsPerWeekDays: number[]
  query: string
  setData(data: SearchResponse): void
}

const fetchData = async ({ query, secondsPerWeekDays, setData }: FetchProps) => {
  const response = await fetch(`${settings.API_URL}/search`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secondsPerWeekDays,
      query: query
    }),
  }
  )
  setData(await response.json())
}

export default fetchData