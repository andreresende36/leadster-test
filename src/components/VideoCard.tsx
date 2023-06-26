import { propsVideoCard } from "@/types/videoCardTypes";
import { videoInfo } from "@/types/videoInfo";
import Image from "next/image";
import * as he from "he";

function VideoCard(props: propsVideoCard) {
  return (
    <div className={`
      w-[365px] h-[290px] rounded-xl 
      shadow-xl hover:scale-[1.01]
      transition duration-200`}>
      <Image
        src={props.videoInfo.snippet.thumbnails.medium.url}
        alt={props.videoInfo.snippet.title}
        width={365}
        height={180}
        key={props.videoInfo.id.videoId}
        className="rounded-t-xl"
      />
      <p
        className={`
        flex justify-center items-center
        break-words p-6 font-extrabold
        text-[0.90rem] text-justify leading-tight drop-shadow-sm`}
      >
        {he.decode(props.videoInfo.snippet.title)}
      </p>
    </div>
  );
}
export default VideoCard;
