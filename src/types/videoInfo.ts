import { Filters } from "./filterTypes"

export type VideoInfo = 
  {
    kind: string,
    etag: string,
    id: {
      kind: string,
      videoId?: string,
      playlistId?: string
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