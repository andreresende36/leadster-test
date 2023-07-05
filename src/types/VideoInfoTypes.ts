import FiltersTypes from "./FilterTypes"

type FullVideoInfoTypes = 
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
      category: FiltersTypes
    }
  }

  type BasicVideoInfoTypes = {
    id: string,
    title: string,
    description: string,
    thumbnail: {
      url: string,
      width: number,
      height: number,
    },
    category: FiltersTypes,
    publishedAt: string,
  }

  export type { FullVideoInfoTypes, BasicVideoInfoTypes }