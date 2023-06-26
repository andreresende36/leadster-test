import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className='flex justify-center items-center h-[128px] w-[100%]'>
        <Image
        src="/../public/logo.png"
        alt="Leadster Logo"
        width={194}
        height={42}
        />
      </header>
      
      <section className='bg-[#F0F8FF] h-[600px] w-[100%] flex justify-center items-center'>
        <div className='flex flex-col items-center'>
          
          <div className={
            `uppercase w-[206px] h-[32px]
            flex justify-center items-center
            rounded-tl-3xl rounded-bl-lg rounded-r-3xl
            text-sm font-extrabold text-[#2383fb]
            border-[#2383fb] border-[0.15rem]
            mb-4`}>Webinars Exclusivos</div>

          <div className='text-5xl text-[#1C3C50] font-medium'>Menos Conversinha,</div>

          <div className='mt-[-0.5rem] relative'>
            <span className={`
              bg-gradient-to-br 
              from-[#2c83fb] to-[#1f76f0]
              text-transparent 
              bg-clip-text
              text-[5rem] font-bold
            `}>Mais Conversão</span>
            <Image 
              src='/../public/asset-header.png'
              alt='Ícone leadster'
              width={49}
              height={32}
              className='absolute top-[1.4rem] left-[95%]'  
            />
          </div>

          <div className={`
            text-[#1C3C50] font-semibold text-center
            p-4 border-t-2 border-[#D7E2EA]
            w-[108%]
          `}>Conheça as estratégias que <span className='font-extrabold'>mudaram o jogo</span> e como aplicá-las no seu negócio</div>
        </div>
      </section>

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
