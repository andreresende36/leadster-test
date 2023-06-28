import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { PageProvider } from "@/context/PageContext";
import { VideoProvider } from "@/context/VideoContext";
import { FilterProvider } from "@/context/FilterContext";
import { SortProvider } from "@/context/SortContext";
import VideosSection from "@/components/VideosSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <VideoProvider>
        <PageProvider>
          <FilterProvider>
            <SortProvider>
              <Header />
              <Banner />
              <VideosSection />
              <Stats />
              <Footer />
            </SortProvider>
          </FilterProvider>
        </PageProvider>
      </VideoProvider>
    </>
  );
}
