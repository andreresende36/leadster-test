import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <div className='h-[128px] w-[100%]'>Logo</div>
        <div className='bg-[#F0F8FF] h-[600px] w-[100%]'>Banner</div>
      </header>

      <section className='h-[1390px] w-[100%]'>
        <div>
          <div>Filtros</div>
          <div>Ordenação</div>
        </div>
        
        <div>Cards</div>

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
