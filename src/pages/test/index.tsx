export default function Test() {
  return (
    <div className={
      `
        h-screen w-screen flex justify-center items-center text-9xl
        phone:bg-white
        tablet-portrait:bg-orange-500
        tablet-landscape:bg-blue-500
        desktop:bg-green-500
        big-desktop:bg-yellow-500
      `
    }>Test</div>
  )
}
