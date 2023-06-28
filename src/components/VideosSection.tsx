// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useVideoContext } from "@/context/VideoContext";
import Filters from "@/components/Filters";
import Sorter from "@/components/Sorter";
import VideoCard from "@/components/VideoCard";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";

function VideosSection() {
  const { videos, setVideos } = useVideoContext();
  const [videosPerPage, setVideosPerPage] = useState(12);
  const totalPages = Math.ceil(videos.length / videosPerPage);  

  
  const distributeVideosByPage = (pageNumber: number) => {
    return (
      <SwiperSlide>
        {videos.map((video, index) => {
          if (
            index >= (pageNumber - 1) * videosPerPage &&
            index <= pageNumber * videosPerPage - 1
            ) {
              return <VideoCard videoInfo={video} key={video.id} />;
            }
          })}
      </SwiperSlide>
    );
  };
  
  const slidesConstructor = (totalPages: number) => {
    const arrayPages = Array.from({ length: totalPages }, (_, index) => index + 1);
    console.log(arrayPages);
    
    return arrayPages.map((page) => distributeVideosByPage(page))     
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="h-fit w-[80%] m-auto flex flex-col">
      <div
        className={`
            flex justify-around items-center 
            mt-20 pb-5 border-b-[2.5px] border-[#DCDFE2]`}
      >
        <Filters />
        <Sorter />
      </div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slidesConstructor(totalPages)}
      </Swiper>
    </section>
  );
}

export default VideosSection;
