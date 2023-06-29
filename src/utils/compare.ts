import { BasicVideoInfo } from "@/types/videoInfo";

export function compareTitle(a: BasicVideoInfo, b: BasicVideoInfo) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

export function compareCategories(a: string, b: string) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}