export const BREADCRUMBS = [
  {
    text: "Home",
    disabled: false,
    href: "/",
  },
  {
    text: "Questionário",
    disabled: true,
    href: "/questions",
  },
];

export const QUESTIONS = [
  {
    id_question: 1,
    question:
      "Em se tratando de uma aplicação (ex.: website, programa desktop ou aplicativo mobile), o que você mais admira ou tem interesse de saber como é feito?",
    options: [
      {
        id_option: 1,
        text_option: "Parte visual, design e interação com o usuário.",
      },
      {
        id_option: 2,
        text_option:
          "De onde vem as informações que são solicitadas (ex.: campo de busca, filtro), e para onde vão as informações que você insere (ex.: fomulários)",
      },
      {
        id_option: 3,
        text_option: "Tenho interesse nas duas opções acima.",
      },
    ],
  },
  {
    id_question: 2,
    question:
      "Imagine que você seja um(a) desenvolvedor(a) e na empresa onde trabalha existem duas situações a serem resolvidas. I) ajustar a página inicial do site para que fique acessível e adequada em todos os formatos de dispositivos que podem acessar o site. II) salvar os dados informados pelo usuário na página de cadastro no banco de dados para que o usuário consiga acessar o site posteriormente com seu login. O que você gostaria de resolver?",
    options: [
      {
        id_option: 1,
        text_option: "Ajustar a página inicial.",
      },
      {
        id_option: 2,
        text_option: "Salvar os dados de cadastro do usuário.",
      },
      {
        id_option: 3,
        text_option: "Os dois.",
      },
    ],
  },
  {
    id_question: 3,
    question: "Você lidaria melhor trabalhando:",
    options: [
      {
        id_option: 1,
        text_option: "No lado do cliente, experiências dos usuários",
      },
      {
        id_option: 2,
        text_option: "Nos bastidores, lado do servidor",
      },
      {
        id_option: 3,
        text_option: "Os dois.",
      },
    ],
  },
];
