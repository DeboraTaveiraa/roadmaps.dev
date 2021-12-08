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
    text: "BackEnd",
    disabled: true,
    href: "/backend",
  },
];

export const ROADMAP_BACKEND = [
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
    topic: "Lógica de Programação",
    description:
      "Lógica de programação é o modo como se escreve um programa de computador, um algoritmo. Um algoritmo é uma sequência de passos para se executar uma função. Um exemplo de algoritmo, fora da computação, é uma receita de bolo",
    panel: [
      {
        title: "Principais tópicos para se estudar",
        contents: [
          {
            text: "Variáveis",
          },
          {
            text: "Operadores lógicos e relacionais",
          },
          {
            text: "Laço de repetição",
          },
          {
            text: "Condições",
          },
          {
            text: "Funções",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Curso em Vídeo: Curso de Algoritmo",
            url: "https://www.cursoemvideo.com/curso/curso-de-algoritmo/",
          },
          {
            text: "Digital Innovation: Lógica de programação Essencial",
            url: "https://digitalinnovation.one/cursos/logica-de-programacao-essencial/?ref=lp&hidden_text&source=/skills/logica-de-programacao&",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "Lógica de programação: o que é e como aprender?",
            url: "https://blog.betrybe.com/tecnologia/logica-de-programacao/",
          },
        ],
      },
      {
        title: "Onde praticar",
        contents: [
          {
            text: "Beecrowd",
            url: "https://www.beecrowd.com.br/",
          },
          {
            text: "IDE Portugol ",
            url: "https://portugol-webstudio.cubos.io/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    topic: "Linguagem de programação",
    description:
      "Nesta etapa você conhecerá um pouco sobre as linguagens em alta no desenvolvimento e poderá está se aperfeiçoando naquela que melhor lhe atender no momento.",
    panel: [
      {
        title: "Linguagens mais utilizadas",
        contents: [
          {
            text: "Python",
          },
          {
            text: "JavaScript",
          },
          {
            text: "Golang",
          },
          {
            text: "Java",
          },
          {
            text: "#C",
          },
          {
            text: "PHP",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Solyd: Curso básico de Python",
            url: "https://solyd.com.br/treinamentos/python-basico/",
          },
          {
            text: "Jornada do Dev - Curso de NodeJs",
            url: "https://jornadadodev.com.br/cursos/curso-de-nodejs?utm_source=facebook&utm_campaign=desenvolvimento_web&utm_medium=grupos&utm_content=curso-de-nodejs",
          },
          {
            text: "Microsoft: Curso Primeiros passos com o C#",
            url: "https://docs.microsoft.com/pt-br/learn/paths/csharp-first-steps/?WT.mc_id=dotnet-12207-gllemos",
          },
          {
            text: "Canal no YouTube (Loiane Groner): Curso de Java Básico Gratuito ",
            url: "https://youtube.com/playlist?list=PLGxZ4Rq3BOBq0KXHsp5J3PxyFaBIXVs3r",
          },
          {
            text: "Jornada do Dev - Curso completo de PHP",
            url: "https://jornadadodev.com.br/cursos/curso-completo-de-php?utm_source=facebook&utm_campaign=desenvolvimento_web&utm_medium=grupos&utm_content=curso-completo-de-php",
          },
          {
            text: "Canal no YouTube (Aprenda Go): Curso Completo da linguagem Go - do Zero ao Ninja ",
            url: "https://www.youtube.com/playlist?list=PLCKpcjBB_VlBsxJ9IseNxFllf-UFEXOdg",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "Documentação Python",
            url: "https://docs.python.org/pt-br/3/tutorial/index.html",
          },
          {
            text: "Documentação Javascript",
            url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
          },
          {
            text: "Documentação GoLang",
            url: "http://www.golangbr.org/doc/",
          },
          {
            text: "Documentação C#",
            url: "https://docs.microsoft.com/pt-br/dotnet/csharp/?WT.mc_id=dotnet-35129-website",
          },
        ],
      },
      {
        title: "Onde praticar",
        contents: [
          {
            text: "Resolvendo Desafios de Código em Javascript",
            url: "https://digitalinnovation.one/cursos/resolvendo-desafios-de-codigo-em-javascript/?ref=lp&hidden_text&source=/skills/javascript&",
          },
          {
            text: "CodingBat - praticar Java e Python",
            url: "https://codingbat.com/java",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    topic: "Banco de dados",
    description:
      "Banco de dados é uma coleção de dados organizados para que a informação dentro possa ser acessada facilmente mais tarde. Seus dados serão mais precisos, confiáveis e fáceis de usar se você tiver um banco de dados.",
    panel: [
      {
        title: "Principais tópicos para se estudar",
        contents: [
          {
            text: "Estruturas de dados",
          },
          {
            text: "Tipos de banco de dados",
          },
          {
            text: "Linguagem de banco de dados (SQL);",
          },
          {
            text: "Sistemas de gerenciamento de banco de dados (DMBS);",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Curso em Vídeo: Curso de MySQL",
            url: "https://www.cursoemvideo.com/curso/mysql/",
          },
          {
            text: "Digital Innovation: Cursos de PostgreSQL",
            url: "https://dani.academy/curso/mongodb-curso-1/",
          },
          {
            text: "Vídeo aula: CRIANDO BANCO DE DADOS ORACLE USANDO AMAZON RDS",
            url: "https://www.youtube.com/watch?v=BTw3C_7UxaU",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "Banco de dados: saiba o que é, os tipos e a importância para o site da sua empresa",
            url: "https://rockcontent.com/br/blog/banco-de-dados/",
          },
          {
            text: "Site oficial MongoDB",
            url: "https://www.mongodb.com/",
          },
          {
            text: "Site oficial MySQL",
            url: "https://www.mysql.com/",
          },
          {
            text: "Site oficial PostgreSQL",
            url: "https://www.postgresql.org/",
          },
          {
            text: "Site oficial Oracle",
            url: "https://www.oracle.com/br/index.html",
          },
          {
            text: "MariaDB",
            url: "https://mariadb.org/",
          },
        ],
      },
      {
        title: "Onde praticar",
        contents: [
          {
            text: "CodeSignal",
            url: "https://app.codesignal.com/signup?channel=referral&redirect=https%3A%2F%2Fapp.codesignal.com%2Fsignup%2Fw3ptCNyvJKiB2eEr5%2Fmain",
          },
          {
            text: "Jdoodle - Online SQL IDE",
            url: "https://www.jdoodle.com/execute-sql-online/ ",
          },
          {
            text: "SQLite online",
            url: "https://sqliteonline.com/",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    topic: "API",
    description:
      "API (Application Programming Interface) que traduzido é Inteface de Programação de Aplicação, é um conjunto de normas que possibilita a comunicação entre plataformas através de uma série de ppadrões e protocolos.",
    panel: [
      {
        title: "Principais tópicos para se estudar",
        contents: [
          {
            text: "Conceito de API",
          },
          {
            text: "REST",
          },
          {
            text: "RESTFul",
          },
          {
            text: "JSON",
          },
        ],
      },
      {
        title: "Cursos | Vídeo-aulas gratuitas",
        contents: [
          {
            text: "Digital Innovation:Introdução a APIs e métodos HTTP",
            url: "https://digitalinnovation.one/cursos/introducao-a-apis-e-metodos-http/?ref=lp&hidden_text&source=/skills/arquitetura-de-sistemas&",
          },
          {
            text: "Curso API Supreme Mastery",
            url: "https://www.kapi.academy/p/api-supreme-mastery",
          },
          {
            text: "Palestra: O Futuro das APIs com Thiago Lima (APICON 2019)",
            url: "https://www.youtube.com/watch?v=M4UV8xcoluc",
          },
          {
            text: "Como Fazer Uma API (o jeito mais fácil e moderno que eu já vi)",
            url: "https://www.youtube.com/watch?v=f7JWDLFhR_c",
          },
          {
            text: "REST x SOAP: entenda a diferença de uma vez por todas!",
            url: "https://www.youtube.com/watch?v=YWPT2UOxbUg",
          },
          {
            text: "REST // Dicionário do Programador",
            url: "https://www.youtube.com/watch?v=S7MduKwvVGk",
          },
        ],
      },
      {
        title: "Documentação | Artigos | Posts",
        contents: [
          {
            text: "Guia completo de estudo sobre APIs",
            url: "https://thiagolimabr.medium.com/guia-completo-de-estudo-sobre-apis-f1e72fb073b8",
          },
          {
            text: "A anatomia de uma API RESTful",
            url: "https://thiagolima.blog.br/a-anatomia-de-uma-api-restful-80df2aca158e",
          },
        ],
      },
      {
        title: "Onde praticar",
        contents: [
          {
            text: "public APIs",
            url: "https://github.com/public-apis/public-apis",
          },
          {
            text: "ReqBin",
            url: "https://reqbin.com/",
          },
        ],
      },
    ],
  },
];
