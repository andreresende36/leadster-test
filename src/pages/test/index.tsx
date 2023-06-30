import { useState, useEffect } from "react";

export default function Test() {
  // return (
  //   <div className={
  //     `
  //       h-screen w-screen flex justify-center items-center text-9xl
  //       phone:bg-white
  //       tablet-portrait:bg-orange-500
  //       tablet-landscape:bg-blue-500
  //       desktop:bg-green-500
  //       big-desktop:bg-yellow-500
  //     `
  //   }>Test</div>
  // )
  const [larguraTela, setLarguraTela] = useState(0);

  useEffect(() => {
    function handleResize() {
      setLarguraTela(window.innerWidth);
    }

    // Adiciona um event listener para detectar as mudanças no tamanho da tela
    window.addEventListener('resize', handleResize);

    // Inicializa a largura da tela
    setLarguraTela(window.innerWidth);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      Largura da tela: {larguraTela}px
    </div>
  );
}
