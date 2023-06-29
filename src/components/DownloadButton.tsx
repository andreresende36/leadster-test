import * as Icons from "react-icons/io";
function DownloadButton({
  text,
  darkColorText,
  darkColorIcon,
  bgLightColor,
  bgDarkColor,
}: {
  text: string;
  darkColorText: string;
  darkColorIcon: string;
  bgLightColor: string;
  bgDarkColor: string;
}) {
  console.log(darkColorText);
  console.log(darkColorIcon);
  console.log(bgLightColor);
  console.log(bgDarkColor);
  return (
    <button
      className={`flex w-[10rem] h-[2rem] justify-center items-center rounded-md mt-2 bg-[${bgLightColor}]`}
    >
      <div className={`flex justify-center items-center w-[25%] h-full bg-[${bgDarkColor}] rounded-l-md`}>
        <Icons.IoIosCloudDownload
          size={18}
          color={`${darkColorIcon}`}
        />
      </div>
      <p className={`flex items-center w-[75%] h-full font-bold text-sm text-[${darkColorText}]`}>{text}</p>
    </button>
  );
}

export default DownloadButton;
