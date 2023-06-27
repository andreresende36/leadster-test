import { useState } from "react";
import { BasicVideoInfo } from "@/types/videoInfo";
import VideoCard from "./VideoCard";
import videoData from "../../public/leadster-yt-database";

function Videos({ initialVideos = videoData }: { initialVideos?:  BasicVideoInfo[] }): JSX.Element {
  const [videos, _setVideos] = useState<BasicVideoInfo[]>(initialVideos);

  return (
    <div className="flex justify-center items-center flex-wrap gap-6 mt-10">
      {videos.map((video) => (
        <VideoCard key={video.id} videoInfo={video} />
      ))}
    </div>
  );
}

export default Videos;
