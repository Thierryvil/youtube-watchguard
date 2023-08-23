import { SearchResponse, Video } from "../entities";
import { convertSecondsToFullTime, daysOfWeek } from "../utils";
import Infos from "./infos";
import VideoCardSkeleton from "./skeletons/video-card";
import VideoCard from "./video-card";

interface MainProps {
  searchData?: SearchResponse
  isLoading: boolean
}

export function Main({ searchData, isLoading }: MainProps) {
  if (isLoading) {
    return (
      <>
        <main className="px-4">
          <div className="px-3 py-4 space-y-4">
            <div className="h-3 w-1/5 rounded-md bg-gray-300"></div>
            <div className="h-3 w-1/5 rounded-md bg-gray-300"></div>
            <div className="h-3 w-1/5 rounded-md bg-gray-300"></div>
          </div>
          < div className="py-5 px-3" >
            {
              Array(7).fill(0).map((_, index) => (
                <>
                  <div key={index} className="flex">
                    <div className="px-3 h-6 w-1/5 rounded-md bg-gray-300"></div>
                  </div>
                  <div className="flex overflow-x-scroll p-6">
                    {Array(5).fill(0).map((_, index) => (
                      <div key={index} className={`mr-4 ${index === 9 ? 'mr-0' : ''}`}>
                        <VideoCardSkeleton />
                      </div>
                    ))}
                  </div>
                </>
              ))
            }

          </div>
        </main >
      </>
    )
  }

  if (!searchData) return

  const allVideos = searchData.videos
  const totalTimeToWatch = convertSecondsToFullTime(searchData.totalInSecondsToWatchAllVideos)
  const { mostUsedWordsInDescriptions, mostUsedWordsInTitles } = searchData

  if (allVideos.length === 0) {
    return (
      <div className="px-3 py-4 space-y-4">
        <h1 className="text-3xl">Empty video list</h1>
      </div>
    )
  }

  return (
    <main className="px-4">
      <Infos mostUsedWordsInDescriptions={mostUsedWordsInDescriptions} mostUsedWordsInTitles={mostUsedWordsInTitles} totalTimeToWatch={totalTimeToWatch} />
      {allVideos.map((videoGroup: Video[], groupIndex: number) => (
        <div key={groupIndex} className="py-2">
          {videoGroup.length > 0 &&
            <div className="flex">
              < h1 className="text-4xl font-bold px-3">{daysOfWeek[groupIndex % daysOfWeek.length]}</h1>
            </div>
          }
          <div key={groupIndex} className="flex overflow-x-scroll">
            {videoGroup.map((video: Video, videoIndex: number) => (
              <VideoCard
                key={videoIndex}
                duration={video.duration}
                id={video.id}
                thumbnail={video.thumbnail}
                title={video.title}
              />
            ))}
          </div>
        </div>
      ))
      }
    </main >
  );
}

export default Main