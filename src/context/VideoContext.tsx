import { BasicVideoInfo } from '@/types/videoInfo';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import videoData from "../../public/leadster-yt-database";

type ContextProps = {
  videos: BasicVideoInfo[];
  setVideos: Dispatch<SetStateAction<BasicVideoInfo[]>>,
}

const VideoContext = createContext<ContextProps>({ videos: videoData, setVideos: ():BasicVideoInfo[] => []});

export const VideoProvider = ({ children }: { children: ReactNode }) =>   {
  const [videos, setVideos] = useState(videoData);
  return(
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  )
}

export const useVideoContext = () => useContext(VideoContext);