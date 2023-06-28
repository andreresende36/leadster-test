import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Filters from "@/components/Filters";
import Sorter from "@/components/Sorter";
import Pagination from "@/components/Pagination";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { PageProvider } from "@/context/PageContext";
import { VideoProvider } from "@/context/VideoContext";
import { FilterProvider } from "@/context/FilterContext";
import VideosSection from "@/components/VideosSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <VideoProvider>
        <PageProvider>
          <FilterProvider>
            <Header />
            <Banner />
            <VideosSection />
            <Stats />
            <Footer />
          </FilterProvider>
        </PageProvider>
      </VideoProvider>
    </>
  );
}
