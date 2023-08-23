const VideoCardSkeleton = () => {
  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-md animate-pulse w-450">
      <div className="w-full h-40 bg-gray-400 mb-4"></div>
      <div>
        <div className="w-3/4 h-6 bg-gray-400 mb-2" style={{ width: '450px' }}></div>
      </div>
    </div>
  );
};

export default VideoCardSkeleton;