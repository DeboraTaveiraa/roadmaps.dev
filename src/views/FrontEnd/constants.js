export const BREADCRUMBS = [
  {
    text: "Home",
    disabled: false,
    href: "/",
  },
  {
    text: "Roadmaps",
    disabled: false,
    href: "/roadmaps",
  },
  {
    text: "FrontEnd",
    disabled: true,
    href: "/frontend",
  },
];

export const ROADMAP_FRONTEND = [
  {
    id: 1,
    topic: "Internet",
    description:
      "Entenda como a internet trabalha, quais são seus protocolos, DNS, hospedagens.",
    panel: [
      {
        title: "Principais tópicos para se estudar",
        contents: [
          {
            text: "Como funciona a Internet",
          },
          {
            text: "O que é HTTP",
          },
          {
            text: "Navegadores e como eles trabalham",
          },
          {
            text: "DNS e como funciona",
          },
          {
            text: "O que são hospedagens",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Curso (Curso em Vídeo): Redes de Computadores",
            url: "https://www.cursoemvideo.com/curso/redes-de-computadores/",
          },
          {
            text: "Curso (Fundação Bradesco): Introdução a Redes de Computadores",
            url: "https://www.ev.org.br/cursos/introducao-a-redes-de-computadores",
          },
          {
            text: "Vídeo-aula: Conceitos Essenciais: O Básico de HTTP",
            url: "https://www.youtube.com/watch?v=CXzbUwK6lc8",
          },
          {
            text: "Vídeo-aula: Como funcionam os navegadores Web?",
            url: "https://www.youtube.com/watch?v=kDy62zaCHZE",
          },
          {
            text: "Vídeo-aula: Como funciona DNS? O que acontece quando você digita um domínio no seu navegador",
            url: "https://www.youtube.com/watch?v=8lw1qjUYdN0",
          },
          {
            text: "Vídeo: Domínio e Hospedagem: qual é a diferença?",
            url: "https://www.youtube.com/watch?v=hfA64sK5ujk",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "Artigo: Como a Internet funciona?",
            url: "https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/How_does_the_Internet_work",
          },
          {
            text: "Post: Três serviços de hospedagem grátis",
            url: "https://www.instagram.com/p/CK92clJsN9v/?utm_source=ig_web_copy_link",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    topic: "HTML",
    description:
      "HTML (Linguagem de Marcação de HiperTexto) é o responsável pela criação da estrutura básica das páginas web",
    panel: [
      {
        title: "Principais tópicos para se estudar",
        contents: [
          {
            text: "Estrutura básica",
          },
          {
            text: "Principais Tags",
          },
          {
            text: "Semântica HTML",
          },
          {
            text: "Validação de formulário",
          },
          {
            text: "Acessibilidade",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Curso (Jornada do Dev):Curso completo de HTML5",
            url: "https://jornadadodev.com.br/cursos/curso-completo-de-html5",
          },
          {
            text: "Curso (Fundação Bradesco): HTML básico",
            url: "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",
          },
          {
            text: "Curso (Udemy) - Introdução à Linguagem HTML",
            url: "https://www.udemy.com/course/introducao-a-linguagem-html/",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "W3School - Documentação e tutoriais",
            url: "https://www.w3schools.com/html/",
          },
          {
            text: "Artigo: O que é HTML mesmo?",
            url: "https://medium.com/nisia/o-que-%C3%A9-html-98259a6f1639",
          },
          {
            text: "Artigo: Validação de Formulário com HTML5",
            url: "https://medium.com/jaguaribetech/valida%C3%A7%C3%A3o-de-formul%C3%A1rios-com-html5-d1d1aa89bc77",
          },
          {
            text: "Artigo: Como escrever HTML com acessibilidade?",
            url: "https://medium.com/reprogramabr/como-escrever-html-com-acessibilidade-eb5fb1a6af5a",
          },
        ],
      },
      {
        title: "Onde praticar",
        contents: [
          {
            text: "DevChallenge",
            url: "https://www.devchallenge.com.br/challenges?type=frontend",
          },
          {
            text: "W3School",
            url: "https://www.w3schools.com/html/",
          },
          {
            text: "CodePen",
            url: "https://codepen.io/",
          },
          {
            text: "FreeCodeCamp - Basic HTML and HTML5",
            url: "https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    topic: "CSS",
    description:
      "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é o responsável por estilizar as páginas web, ou melhor, dar estilo.",
    panel: [
      {
        title: "Principais tópicos para se estudar",
        contents: [
          {
            text: "Especificidade",
          },
          {
            text: "FlexBox",
          },
          {
            text: "CSS Grid",
          },
          {
            text: "Responsividade",
          },
          {
            text: "Boas práticas",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Curso (Jornada do Dev): Curso Completo de CSS 3",
            url: "https://jornadadodev.com.br/cursos/curso-completo-de-css-3",
          },
          {
            text: "Curso (Digital Innovation): Cursos de CSS",
            url: "https://digitalinnovation.one/cursos/css",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "Post: Guia básico sobre Grids",
            url: "https://www.instagram.com/p/CKuVETkpPCR/",
          },
          {
            text: "Guia: A Complete Guide to Flexbox",
            url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
          },
          {
            text: "Artigo: Elevando seu nível no CSS",
            url: "https://medium.com/tableless/elevando-seu-n%C3%ADvel-no-css-b2acbb220248",
          },
          {
            text: "Artigo: Seletores e especificidade",
            url: "https://blog.cod3r.com.br/seletores-especificidade/",
          },
          {
            text: "Artigo: Entendendo as diferenças entre design responsivo, adaptativo e mobile-first",
            url: "https://medium.com/@fnandaleite/entendendo-as-diferen%C3%A7as-entre-design-responsivo-adaptativo-e-mobile-first-ea3c61fc9181",
          },
        ],
      },
      {
        title: "Onde praticar",
        contents: [
          {
            text: "Flexbox Froggy",
            url: "https://flexboxfroggy.com/",
          },
          {
            text: "CSS Grid Garden",
            url: "https://cssgridgarden.com/",
          },
          {
            text: "CSS Battle",
            url: "https://cssbattle.dev/",
          },
          {
            text: "CSS Diner",
            url: "https://flukeout.github.io/",
          },
          {
            text: "DevChallenge",
            url: "https://www.devchallenge.com.br/challenges?type=frontend",
          },
          {
            text: "FreeCodeCamp - CSS Basic",
            url: "https://www.freecodecamp.org/learn/responsive-web-design/#basic-css",
          },
          {
            text: "CodePen",
            url: "https://codepen.io/",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    topic: "Javascript",
    description:
      "Javascript é uma linguagem de programação que permite implementar interações nas páginas web, permitindo que seus elementos atualizem dinamicamente, possuam animações, condições, controladores, e muito mais.",
    panel: [
      {
        title: "Principais tópicos para se estudar",
        contents: [
          {
            text: "Lógica de programação",
          },
          {
            text: "Manipulação da DOM",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Curso (Udemy): Minicurso de Lógica de Programação com JavaScript",
            url: "https://www.cursoemvideo.com/curso/curso-de-algoritmo/",
          },
          {
            text: "Curso (Curso em Vídeo): Curso de Javascript",
            url: "https://www.cursoemvideo.com/curso/javascript/",
          },
          {
            text: "32 conceitos que todo desenvolvedor JavaScript deveria saber",
            url: "https://www.udemy.com/course/32-conceitos-todo-dev-javascript-deveria-saber/",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "Documentação Javascript",
            url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
          },
          {
            text: "5 boas práticas com Javascript",
            url: "https://medium.com/rocketseat/5-boas-pr%C3%A1ticas-com-javascript-603609ee0191",
          },
          {
            text: "Desenvolvimento avançado com JavaScript ES6",
            url: "https://digitalinnovation.one/cursos/desenvolvimento-avancado-com-javascript-es6",
          },
        ],
      },
      {
        title: "Onde praticar",
        contents: [
          {
            text: "DevChallenge",
            url: "https://www.devchallenge.com.br/challenges?type=frontend",
          },
          {
            text: "FreeCodeCamp - Basic Javascript",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript",
          },
          {
            text: "CodePen",
            url: "https://codepen.io/",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    topic: "Versionamento de código",
    description:
      "É um sistema de controle de versões da aplicação com o objetivo de armazenar todo o histórico da codificação, além de saber o que foi alterado, quando e por quem.",
    panel: [
      {
        title: "Principais tópicos para se estudar",
        contents: [
          {
            text: "Conceito",
          },
          {
            text: "Git",
          },
          {
            text: "Serviços de repositórios remotos: GitHub, GitLab, BitBucket.",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Git e GitHub",
            url: "https://www.cursoemvideo.com/curso/curso-de-git-e-github/",
          },
          {
            text: "Curso (Jornada do Dev): Curso Básico de GIT",
            url: "https://jornadadodev.com.br/cursos/curso-basico-de-git",
          },
          {
            text: "Primeiros passos com Git e Bitbucket no Windows",
            url: "https://www.youtube.com/watch?v=TF7Vvk0s86g&list=PL_3IB_99heu1g-WJqqgfriINRKH5lQA06",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "Lista de comandos Git",
            url: "https://gist.github.com/leocomelli/2545add34e4fec21ec16",
          },
          {
            text: "Do zero ao primeiro Job com Gitlab CI",
            url: "https://blog.ateliedocodigo.com.br/do-zero-ao-primeiro-job-com-gitlab-ci-f9dcf6a183",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    topic: "Frameworks Javascript",
    description:
      "Os frameworks frontend são facilitadores na construção de aplicações, pois possuem conjuntos de códigos prontos com o objetivo de agilizar o processo e aumentar a produtividade.",
    panel: [
      {
        title: "Principais tópicos para se estudar",
        contents: [
          {
            text: "Escolher um framework para estudar: Vue.js, React, Angular, etc.",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Angular vs React.js vs Vue.js - Qual framework frontend escolher",
            url: "https://www.youtube.com/watch?v=DTy3oIU-NN4",
          },
          {
            text: "Curso (Youtube, Matheus Battisti): Curso de React",
            url: "https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO",
          },
          {
            text: "Curso (Treinamento Vue): Curso completo e gratuito de Vue.js 3 do iniciante ao avançado.",
            url: "https://treinamento.vuejsbrasil.org/",
          },
          {
            text: "Curso (Digital Innovation): Cursos de Angular",
            url: "https://digitalinnovation.one/cursos/angular",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "Documentação Vue.js",
            url: "https://br.vuejs.org/index.html",
          },
          {
            text: "Documentação React",
            url: "https://pt-br.reactjs.org/",
          },
          {
            text: "Documentação Angular",
            url: "https://angular.io/",
          },
          {
            text: "Post: Dicas para quem está iniciando os estudos em Vue.js",
            url: "https://www.instagram.com/p/CNDz6u4Dp9l/",
          },
          {
            text: "10 assuntos que todo iniciante em React deve ficar por dentro",
            url: "https://medium.com/reactbrasil/10-assuntos-que-todo-iniciante-em-react-deve-ficar-por-dentro-a990dd1b0461",
          },
        ],
      },
      {
        title: "Onde praticar",
        contents: [
          {
            text: "FreeCodeCamp - React",
            url: "https://www.freecodecamp.org/learn/front-end-development-libraries/#react",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    topic: "Frameworks CSS",
    description:
      "Os frameworks de CSS são facilitadores na construção e estilização de aplicações, pois possuem conjuntos de códigos prontos com o objetivo de agilizar o processo e aumentar a produtividade.",
    panel: [
      {
        title: "Principais tópicos para se estudar",
        contents: [
          {
            text: "Escolher um framework para estudar: Bootstrap, Less, Sass, etc.",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Jornada do Dev: Curso de Bootstrap 3.0",
            url: "https://jornadadodev.com.br/cursos/curso-de-bootstrap-30?utm_source=facebook&utm_campaign=desenvolvimento_web&utm_medium=grupos&utm_content=curso-de-bootstrap-30",
          },
          {
            text: "Jornada do Dev: Curso de Less",
            url: "https://jornadadodev.com.br/cursos/curso-de-less?utm_source=facebook&utm_campaign=desenvolvimento_web&utm_medium=grupos&utm_content=curso-de-less",
          },
          {
            text: "Canal no Youtube (Amanda Vilela): Curso Sass",
            url: "https://youtube.com/playlist?list=PL97KElaimHeGRtfkksKwxg6IGVZi_cR7J",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "Documentação Bootstrap",
            url: "https://getbootstrap.com/docs/5.1/getting-started/introduction/",
          },
          {
            text: "Documentação Less",
            url: "https://lesscss.org/usage/",
          },
          {
            text: "Documentação Sass",
            url: "https://sass-lang.com/documentation",
          },
        ],
      },
      {
        title: "Onde praticar",
        contents: [
          {
            text: "Canal no YouTube (Maikel Neris): Bootstrap 5 Tutorial: Crie um website responsivo com HTML e CSS",
            url: "https://www.youtube.com/watch?v=ItwUZ4fK6hQ",
          },
          {
            text: "Recriando home do Pinterest com HTML, Sass e JavaScript",
            url: "https://www.youtube.com/watch?v=XdqD8qi44Cg",
          },
        ],
      },
    ],
  },
];
