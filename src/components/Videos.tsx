import { useState } from "react";
import { VideoInfo } from "@/types/videoInfo";
import VideoCard from "./VideoCard";
import videoData from "../../public/leadster-yt-database";

/**
 * Renders a list of video cards based on an array of video data.
 *
 * @param {VideoInfo[]} [initialVideos=videoData] - An optional array of video data to initialize the list.
 * @return {JSX.Element} A div element containing a list of VideoCard components.
 */
function Videos({ initialVideos = videoData }: { initialVideos?: VideoInfo[] }): JSX.Element {
  const [videos, _setVideos] = useState<VideoInfo[]>(initialVideos);

  return (
    <div className="flex justify-center items-center flex-wrap gap-6 mt-10">
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} videoInfo={video} />
      ))}
    </div>
  );
}

export default Videos;
