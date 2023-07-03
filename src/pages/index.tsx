import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { PageProvider } from "@/context/PageContext";
import { VideoProvider } from "@/context/VideoContext";
import { FilterProvider } from "@/context/FilterContext";
import { SortProvider } from "@/context/SortContext";
import VideosSection from "@/components/VideosSection";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Leadster: Chatbot de Marketing para Aumentar Geração de Leads</title>
        <meta name="description" content="Conheça a Leadster, um Chatbot de Marketing Conversacional para Aumentar a Geração de Leads Qualificados no seu Site. Visite e saiba mais!" />
        <link rel="canonical" href="https://leadster-test-lemon.vercel.app/" />
      </Head>
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
