import { BasicVideoInfo } from "@/types/videoInfo";

export default function compare(a: BasicVideoInfo, b: BasicVideoInfo) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}