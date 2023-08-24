import VideoCardSkeleton from "./video-card"

const MainSkeleton = () => {
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

export default MainSkeleton