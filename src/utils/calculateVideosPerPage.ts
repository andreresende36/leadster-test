export const calculateVideosPerPage = (width: number):number => {
  if (width < 600) return 6 //phone
  if (width >= 600 && width < 1200) return 8 //tablet-portrait e tablet-landscape
  if (width >= 1200 && width < 1800) return 9 //desktop
  return 12 //big-desktop
}