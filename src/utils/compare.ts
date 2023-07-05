import { BasicVideoInfoTypes } from "@/types/VideoInfoTypes";

export function compareTitle(a: BasicVideoInfoTypes, b: BasicVideoInfoTypes) {
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