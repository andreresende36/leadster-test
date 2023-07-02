export const calculateVideosPerPage = (width: number):number => {
  if (width < 600) return 6 //phone
  if (width >= 600 && width < 900) return 6 //tablet-portrait
  if (width >= 900 && width < 1200) return 6 //tablet-landscape
  if (width >= 1200 && width < 1800) return 12 //desktop
  return 12 //big-desktop
}