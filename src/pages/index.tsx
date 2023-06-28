import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Filters from '@/components/Filters'
import Sorter from '@/components/Sorter'
import Videos from '@/components/Videos'
import Pagination from '@/components/Pagination'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <section className='h-[1390px] w-[70%] m-auto flex flex-col'>
        
        <div className={`
          flex justify-around items-center 
          mt-20 pb-5 border-b-[2.5px] border-[#DCDFE2]`}>
          <Filters />
          <Sorter />
        </div>
        
        <Videos />

        <Pagination />
      </section>

      <Stats />
      <Footer />
    </>
  )
}
