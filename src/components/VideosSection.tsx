import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useVideoContext } from "@/context/VideoContext";
import Filters from "@/components/Filters";
import Sorter from "@/components/Sorter";
import VideoCard from "@/components/VideoCard";
import { useEffect, useState } from "react";
import { useSortContext } from "@/context/SortContext";
import { useFilterContext } from "@/context/FilterContext";

import "swiper/css";
import { SortTypes } from "@/types/sortTypes";
import compare from "@/utils/compare";
import { BasicVideoInfo } from "@/types/videoInfo";

function VideosSection() {
  const { videos } = useVideoContext();
  const [localVideos, setLocalVideos] = useState<BasicVideoInfo[]>([]);
  const { selectedSort } = useSortContext();
  const { selectedFilter } = useFilterContext();

  const [videosPerPage, _setVideosPerPage] = useState<number>(12);
  const totalPages = Math.ceil(localVideos.length / videosPerPage);

  useEffect(() => {
    const filterVideos = (filter: Filters) => {
      if (filter === "Todos") return videos;
      return videos.filter((video) => video.category === filter);
    };

    const sortVideos = (sort: SortTypes) => {
      const filteredVideos = filterVideos(selectedFilter);
      if (sort === "date") {
        return filteredVideos.slice().sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
      }
      return filteredVideos.slice().sort(compare);
    };

    const sortedVideos = sortVideos(selectedSort);
    setLocalVideos(sortedVideos);
  }, [videos, selectedFilter, selectedSort]);

  const distributeVideosByPage = (pageNumber: number) => {
    return (
      <SwiperSlide>
        {localVideos
          .slice((pageNumber - 1) * videosPerPage, pageNumber * videosPerPage)
          .map((video) => (
            <VideoCard videoInfo={video} key={video.id} />
          ))}
      </SwiperSlide>
    );
  };

  const generateSlides = (totalPages: number) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    return pageNumbers.map((pageNumber) => distributeVideosByPage(pageNumber));
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <section className="h-fit w-[80%] m-auto flex flex-col">
      <div className="flex justify-around items-center mt-20 pb-5 border-b-[2.5px] border-[#DCDFE2]">
        <Filters />
        <Sorter />
      </div>
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        {generateSlides(totalPages)}
      </Swiper>
    </section>
  );
}

export default VideosSection;
