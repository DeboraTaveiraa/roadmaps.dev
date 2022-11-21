<template>
  <BoxContainer>
    <section>
      <h1>Sobre o projeto</h1>
      <p>
        Roadmaps.dev foi criado como um projeto de conclusão do curso de Análise
        e Desenvolvimento de Sistemas. Mas o objetivo de fato sempre foi
        entregar mais que um projeto de conclusão, estava atrelado a entregar
        valor para as pessoas com interesse de seguir na área de programação.
        Ajudando nos seus primeiros passos, dando um norte nos seus estudos para
        que não desistam dessa área que cresce cada dia mais em todo o mundo!
      </p>
    </section>

    <section>
      <h1>Sobre a criadora</h1>
      <p>
        Sou Débora Taveira, nasci e moro em Porto Velho - Rondônia, estudante do
        curso de Análise e Desenvolvimento de Sistemas na Instituição Federal de
        Rondônia (IFRO). Atualmente trabalho como desenvolvedora FrontEnd.
      </p>
    </section>

    <section class="wrapper-colaboration">
      <h1>Seja um colaborador do projeto!</h1>
      <p>
        Ajude o projeto com ideias de melhorias, novos roadmaps ou novos
        conteúdos dentro dos roadmaps existentes!
      </p>

      <a href="https://github.com/DeboraTaveiraa/roadmaps.dev" target="_blank">
        <v-icon>mdi-github</v-icon>
        Repositório do projeto
      </a>

      <a href="mailto:roadmaps.dev@gmail.com" target="_blank">
        <v-icon>mdi-email</v-icon>
        roadmaps.dev@gmail.com
      </a>
    </section>
  </BoxContainer>
</template>

<script>
import BoxContainer from "@/components/BoxContainer/BoxContainer.vue";

export default {
  components: {
    BoxContainer,
  },
};
</script>

<style lang="scss" scoped src="./About.scss" />
