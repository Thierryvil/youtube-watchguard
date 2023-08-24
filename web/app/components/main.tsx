import { SearchResponse, Video } from "../entities";
import { convertSecondsToFullTime, daysOfWeek } from "../utils";
import Infos from "./infos";
import VideoCardSkeleton from "./skeletons/video-card";
import VideoCard from "./video-card";

interface MainProps {
  searchData?: SearchResponse
  isLoading: boolean
}

interface VideoGroupProps {
  videos: Video[];
}

const DayHeader: React.FC<{ day: string }> = ({ day }) => (
  <div className="flex">
    <h1 className="text-4xl font-bold px-3">{day}</h1>
  </div>
);

const VideoGroup: React.FC<VideoGroupProps> = ({ videos }) => (
  <div className="flex overflow-x-scroll">
    {videos.map((video) => (
      <VideoCard key={video.id} {...video} />
    ))}
  </div>
);

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
      <Infos
        mostUsedWordsInDescriptions={mostUsedWordsInDescriptions.join(', ')}
        mostUsedWordsInTitles={mostUsedWordsInTitles.join(', ')}
        totalTimeToWatch={totalTimeToWatch}
      />
      {allVideos.map((videoGroup, groupIndex) => (
        <div key={groupIndex} className="py-2">
          {videoGroup.length > 0 ? <DayHeader day={daysOfWeek[groupIndex % daysOfWeek.length]} /> : null}
          {videoGroup.length > 0 && <VideoGroup videos={videoGroup} />}
        </div>
      ))}
    </main>
  );
}

export default Main