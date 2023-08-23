export interface InfoProps {
  totalTimeToWatch: string,
  mostUsedWordsInTitles: string[]
  mostUsedWordsInDescriptions: string[]
}

const Infos = ({ totalTimeToWatch, mostUsedWordsInTitles, mostUsedWordsInDescriptions }: InfoProps) => {
  return (
    <div className="px-3 py-4 space-y-4">
      <h1 className="text-3xl">Total time to watch all videos: {totalTimeToWatch}</h1>
      <h1 className="text-3xl">Most Used Words In Titles:      {mostUsedWordsInTitles.join(', ')}</h1>
      <h1 className="text-3xl">Most Used Words In Description: {mostUsedWordsInDescriptions.join(', ')}</h1>
    </div>
  )
}

export default Infos