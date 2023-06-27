import { Filters } from "./filterTypes"

type FullVideoInfo = 
  {
    kind: string,
    etag: string,
    id: {
      kind: string,
      videoId: string,
    },
    snippet: {
      publishedAt: string,
      channelId: string,
      title: string,
      description: string,
      thumbnails: {
        default: {
          url: string,
          width: number,
          height: number
        },
        medium: {
          url: string,
          width: number,
          height: number
        },
        high: {
          url: string,
          width: number,
          height: number
        }
      },
      channelTitle: string,
      liveBroadcastContent: string,
      publishTime: string,
      category: Filters
    }
  }

  type BasicVideoInfo = {
    id: string,
    title: string,
    description: string,
    thumbnail: {
      url: string,
      width: number,
      height: number,
    },
    category: Filters,
    publishedAt: string,
  }

  export type { FullVideoInfo, BasicVideoInfo }