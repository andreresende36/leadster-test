import { propsVideoCard } from "@/types/videoCardTypes";
import Image from "next/image";
import * as he from "he";

function VideoCard(props: propsVideoCard) {
  return (
    <div
      className={`
      group relative w-[365px] h-[290px] rounded-xl 
      shadow-xl transition duration-400
      hover:text-[#007EFF] ease-in-out 
      hover:scale-[1.01]
      `}
    >
      {/* Overlays */}
      <div className="absolute w-full h-full opacity-0 group-hover:opacity-50">
        {/* Overlay Superior */}
        <div className="w-full h-[200px] bg-[#007EFF] rounded-t-xl z-10" />

        {/* Overlay Inferior */}
        <div className="w-full h-[90px] bg-[ #0080ff10] rounded-b-xl z-10" />
      </div>

      {/* Ícone Play */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="rgb(255,255,255)"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`
            absolute w-[70px] h-[70px] text-white
            opacity-0 hover:scale-[1.03] 
            group-hover:opacity-100 group-hover:drop-shadow-md 
            z-20 mx-[9.2rem] my-[4.3rem]`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
        />
      </svg>

      {/* Thumbnail */}
      <Image
        src={props.videoInfo.snippet.thumbnails.medium.url}
        alt={props.videoInfo.snippet.title}
        width={365}
        height={180}
        key={props.videoInfo.id.videoId}
        className="rounded-t-xl h-[200px] z-0"
      ></Image>

      {/* Título */}
      <div className={`flex justify-center items-center p-6`}>
        <p
          className={`
          break-words font-extrabold
          text-[0.90rem] text-justify leading-tight z-0`}
        >
          {he.decode(props.videoInfo.snippet.title)}
        </p>
      </div>
    </div>
  );
}
export default VideoCard;
