import { useEffect, useState } from "react";
import { VideoInfo } from "@/types/videoInfo";
import VideoCard from "./VideoCard";
import videoData from "../../public/leadster-yt-database.json";

function Videos() {
  const [videoDatabase, setVideoDatabase] = useState<VideoInfo[]>([]);
  useEffect(() => setVideoDatabase(videoData as VideoInfo[]), []);
  
  return (
    <div className={`flex justify-center items-center flex-wrap gap-6 mt-10`}>
      {videoDatabase.map((video) => (
        <VideoCard key={video.id.videoId} videoInfo={video}/>
      ))}
    </div>
  );
}

export default Videos;
