import { SearchResponse, Video } from "../entities";
import { convertSecondsToFullTime, daysOfWeek } from "../utils";
import Infos from "./infos";
import MainSkeleton from "./skeletons/main";
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
   return <MainSkeleton/>
  }

  if (!searchData) return

  const allVideos = searchData.videos
  const totalTimeToWatch = convertSecondsToFullTime(searchData.totalInSecondsToWatchAllVideos)
  const { mostUsedWordsInDescriptions, mostUsedWordsInTitles } = searchData

  if (!allVideos || allVideos.length === 0) {
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