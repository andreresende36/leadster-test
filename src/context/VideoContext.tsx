import { BasicVideoInfoTypes } from '@/types/VideoInfoTypes';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState, useMemo } from 'react';
import videoData from "../db/leadster-yt-database";

type ContextProps = {
  videos: BasicVideoInfoTypes[];
  setVideos: Dispatch<SetStateAction<BasicVideoInfoTypes[]>>,
}

const VideoContext = createContext<ContextProps>({ videos: videoData, setVideos: ():BasicVideoInfoTypes[] => []});

export const VideoProvider = ({ children }: { children: ReactNode }) =>   {
  const [videos, setVideos] = useState(videoData);
  const contextValue = useMemo(() => ({ videos, setVideos }), [videos, setVideos]);
  return(
    <VideoContext.Provider value={contextValue}>
      {children}
    </VideoContext.Provider>
  )
}

export const useVideoContext = () => useContext(VideoContext);