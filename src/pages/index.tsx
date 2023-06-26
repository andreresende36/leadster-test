import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Filters from '@/components/Filters'
import Sorter from '@/components/Sorter'
import Videos from '@/components/Videos'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <section className='h-[1390px] w-[70%] m-auto'>
        
        <div className={`
          flex justify-around items-center 
          mt-20 pb-5 border-b-[2.5px] border-[#DCDFE2]`}>
          <Filters />
          <Sorter />
        </div>
        
        <Videos />

        <div>Páginas</div>
      </section>

      <section className='bg-[#F0F8FF] h-[735px] w-[100%]'>
        <div>Stats1</div>
        <div>Stats2</div>
      </section>

      <footer className='h-[585px] w-[100%]'>
        <div>
          <div>Logo</div>
          <div>Texto</div>
        </div>
        <div>
          <div>Coluna1</div>
          <div>Coluna2</div>
          <div>Coluna3</div>
          <div>Coluna4</div>
        </div>
        <div>
          <span>Copyright</span>
          <span>Endereço</span>
        </div>
      </footer>
    </>
  )
}
