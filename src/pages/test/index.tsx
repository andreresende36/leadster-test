import ModalVideo from "@/components/ModalVideo";
import videoData from '../../../public/leadster-yt-database'
function Test() {
  return ( 
    <ModalVideo
      videoInfo={videoData[0]}/>
  );
}

export default Test;