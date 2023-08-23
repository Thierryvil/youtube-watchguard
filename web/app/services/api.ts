import { SearchResponse } from "../entities"

export interface FetchProps {
  secondsPerWeekDays: number[]
  query: string
  setData(data: SearchResponse): void
}

const fetchData = async ({ query, secondsPerWeekDays, setData }: FetchProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
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