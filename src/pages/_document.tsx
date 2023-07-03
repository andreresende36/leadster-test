import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <html lang="pt-br" />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://leadster-test-lemon.vercel.app/" />
        <meta name="description" content="Conheça a Leadster, um Chatbot de Marketing Conversacional para Aumentar a Geração de Leads Qualificados no seu Site. Visite e saiba mais!" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
