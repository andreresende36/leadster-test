# Página de vídeos da Leadster

Página desenvolvida como um teste para concorrer a vaga de desenvolvedor Front-end na Leadster. Permaneci bastante engajado bastante durante o projeto buscando sempre seguir as orientações de conteúdo e layout que me foram passados, bem como colocar alguns adicionais que julguei ainda melhores para o design e experiência do usuário.

A página, apesar de ser simples, conta com algumas funcionalidades bem legais, como:

- Filtrar o vídeo pela categoria do mesmo;
- Ordenar por data da publicação (do mais recente para o mais antigo) e título(ordem alfabética);
- O card do vídeo abre uma caixa de diálogo com o vídeo do Youtube, assim o usuário não precisa deixar a página da Leadster para ver o vídeo. Outro função que essa caixa de diálogo apresenta são 3 botôes para dwonload de arquivos relacionados ao vídeo.

Outro detalhe é que todos os dados dos vídeos foram retirados da própria API do Youtube usando a ID do canal da Leadster. Os dados foram salvos em um arquivo JSON para que a aplicação pudesse acessá-lo facilmente.
Os links encontrados em botões, imagens, ícones de redes sociais e no rodapé levam para o site oficial da Leadster (<www.leadster.com.br>).

## Stack

Para a realização do projeto acima utilizei: **Next.js**, **Typescript** e **Tailwind CSS**. Além disso, utilizei Hooks e Context para gerenciamento de estados locais e globais.

## API

API do Youtube: <https://developers.google.com/youtube/v3/docs/search/list?hl=pt-br>

Query utilizada para busca dos vídeos utilizados no projeto: <https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCrydTYsZKHPE_pe9NNLMeDA&maxResults=40&publishedBefore=2023-01-01T00:00:00Z&key=[MINHA_API_KEY>]

\*Observação: o link acima só funciona com a adição de uma chave privada ao final da URL. Omiti por questões de segurança.

## Bibliotecas externas

As bibliotecas utilizadas para implementação deste projeto foram:

- HeadlessUI: <https://headlessui.com/>
- Eslint: <https://pt-br.eslint.org/>
- react-icons: <https://react-icons.github.io/react-icons/>
- react-youtube: <https://github.com/tjallingt/react-youtube>
- Swiper.js: <https://swiperjs.com/>
- He: <https://github.com/mathiasbynens/he>
- DaisyUI: <https://daisyui.com/>

## Layout e Design sugerido

O design e layout sugeridos para a interface se encontam nas imagens abaixo:

- Tela inicial:
  ![Home](https://imgur.com/jIxwmyI.png)

- Card com vídeo e downloads:
  ![Card](https://imgur.com/0M5cBdm.png)

## Demonstração

Disponibilizei abaixo o link para a visualização da aplicação em pleno funcionamento:

<https://leadster-test-lemon.vercel.app/>

## Minha experiência

#### 1. Decisões que tomei

Dividi a realização do projeto nos passos abaixo:

- Desenho e organizações dos componentes principais (Header, Banner, VideosSection, Stats e Footer) num papel. Essa etapa foi importante para que eu pudesse ter uma visão macro da aplicação e para decidir as melhores tags, garantindo uma melhor semântica no HTML;
- Depois coloquei tudo no arquivo index.tsx para que eu pudesse ver na tela somente o esqueleto daquilo que tinha projetado no papel;
- Comecei a implementar a página e seus componentes de cima para baixo;
- A implementação dos cards de vídeo e da seção completa dos vídeos demandou mais lógica e tempo, já que conta com filtros, ordenação e uma caixa de diálogo que abre ao se clicar num dos cards. Outro detalhe aqui é que resolvi puxar os dados de alguns vídeos do canal da Leadster. Assim, busquei os dados na API, salvei num arquivo JSON, extraí (através de uma função) apenas os dados necessários para a aplicação e assim pude gerar na tela 40 cards com imgens, textos e vídeos diferentes;
- No footer segui basicamente o modelo com a adição de todos os links reais da Leadster. Os links também foram salvos em um arquivo no formato JSON.

#### 2. Como organizei meu código

Além da pasta public (nativa do Next.js) que utilizei para salvar as imagens e dados de links e dos vídeos, meu código ficou todo dentro da pasta src conforme imagem abaixo:

- Pasta **/src**
  ![Tree](https://imgur.com/KL0TpLL.png)

É importante ressaltar aqui que os componentes que criei servem a três propósitos: organização, reusabilidade e extensibilidade. Optei também por utilizar Context para que tanto a consulta quanto a edição desse estado global pudesse estar disponível para toda a aplicação. Por fim, o uso de types (na pasta types) se fez necessário para garantir a integridade de toda a aplicação, já que os dados passados aos componentes e funcões estão todos devidamente tipados.

#### 3. Como rodar o projeto

Parar visualizar uma demonstração do projeto é possível acessar o link mencionado acima (<https://leadster-test-lemon.vercel.app/>).

Porém, caso queira fazer o download do repositório para sua máquina e executá-lo localmente, siga as intruções abaixo:

- Através do terminal de comando de sua máquina escolha a pasta onde quer salvar o repositório. Para fazer o download você deverá ter instalado o pacote do GitHub em sua máquina ([maiores informações](https://github.com/git-guides/install-git)). Também deverá ter algum gerenciador de pacotes como o npm ou yarn. Execute os comandos abaixo:

  ```
  git clone https://github.com/andreresende36/leadster-test.git
  cd [NOME-DA-SUA-PASTA]
  npm install
  ```

- A partir desse momento seu computador irá instalar todas as dependências necessárias para rodar a aplicação. Após a finalização dessa etapa virá executará o seguinte comando:

  ```
  npm run dev
  ```

- Por último, você só precisa digitar <http://localhost:3000> na barra de endereços do seu navegador e confirmar! Pronto!

## Testes SonarCloud

Submeti meu repositório a plataforma do SonarCloud para garantir que ela estivesse sólida em termos de bugs, segurança e performance.

Um primeiro escaneamento me trouxe o seguinte resultado (imagem abaixo): 2 Bugs e 4 Code Smells.

- Escaneamento inicial

![First](https://imgur.com/YNZ4Rwf.png)
![First](https://imgur.com/ug0fJlB.png)

O primeiro bug foi sanado com o criação da função compareCategories para uma posterior ordenação das string num array de categorias com o método sort(). O segundo foi sanado excluindo uma segundo opção (' || "type"') de tipo de retorno na linha 9 do arquivo SortContext.tsx.

Os code smells era todos a respeito da utilização de useMemo nos arquivos de context para evitar renderizações desnecessárias dos componentes.

- Escaneamento final

![Final](https://imgur.com/uOE7yWM.png)
![Final](https://imgur.com/1c3BOqN.png)

## Agradecimentos

Agradeço a toda a equipe da Leadster pela oportunidade de realizar esse teste e me coloco à disposição para sanar quaisquer dúvidas.

Linkedin: <https://www.linkedin.com/in/andrediasresende>

Email: <andreresende36@gmail.com>
