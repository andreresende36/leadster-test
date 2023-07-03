import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { PageProvider } from "@/context/PageContext";
import { VideoProvider } from "@/context/VideoContext";
import { FilterProvider } from "@/context/FilterContext";
import { SortProvider } from "@/context/SortContext";
import VideosSection from "@/components/VideosSection";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <VideoProvider>
        <PageProvider>
          <FilterProvider>
            <SortProvider>
              <Head>
                <title>
                  Leadster: Chatbot de Marketing para Aumentar Geração de Leads
                </title>
              </Head>
              <main>
                <Header />
                <Banner />
                <VideosSection />
                <Stats />
              </main>
              <Footer />
            </SortProvider>
          </FilterProvider>
        </PageProvider>
      </VideoProvider>
      <Analytics />
    </div>
  );
}
