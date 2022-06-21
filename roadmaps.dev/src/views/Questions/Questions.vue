<template>
  <BoxContainer>
    <BreadCrumbs :items="breadCrumbs" />
    <section class="instructions">
      <h2 class="title-instructions">
        É hora descobrir em que área do desenvolvimento você se encaixa!
      </h2>
      <p>
        Responda todas as perguntas com sinceridade. Ao final, iremos lhe
        indicar um de nosso roteiros conforme suas respostas.
      </p>
    </section>

    <section class="wrapper-questions">
      <template v-if="showQuestion">
        <p class="title-question">
          {{ showQuestion.question }}
        </p>

        <v-radio-group v-model="radios">
          <v-radio
            class="options"
            v-for="option in showQuestion.options"
            :key="option.id_option"
            :label="option.text_option"
            :value="option.id_option"
            color="#8a01fe"
          ></v-radio>
        </v-radio-group>

        <button
          :disabled="!radios"
          @click="nextQuestion(showQuestion.id_question)"
          class="btn btn-next"
        >
          Prosseguir
        </button>
      </template>

      <template v-else>
        <h2 class="title-result">Questionário finalizado!</h2>
        <p class="details-result">
          De acordo com as suas respostas o roadmap que lhe remocomendamos é:
          <span>{{ roadmapRecommended }}</span>
        </p>
        <button class="btn-result" @click="goToRoadmap(roadmapRecommended)">
          Ir para roadmap
        </button>
      </template>
    </section>
  </BoxContainer>
</template>

<script>
import BoxContainer from "@/components/BoxContainer/BoxContainer.vue";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs.vue";

import { BREADCRUMBS, QUESTIONS } from "./constants";

export default {
  components: {
    BoxContainer,
    BreadCrumbs,
  },
  data() {
    return {
      breadCrumbs: BREADCRUMBS,
      questions: QUESTIONS,
      showQuestion: {},
      responseQuestions: [],
      radios: 0,
      roadmapRecommended: "",
    };
  },
  mounted() {
    this.setShowQuestion();
  },
  methods: {
    setShowQuestion() {
      this.showQuestion = this.questions.find(
        (question) => question.id_question === 1
      );
    },
    nextQuestion(id) {
      this.responseQuestions.push((id, this.radios));

      this.radios = 0;

      if (id !== 3) {
        this.showQuestion = this.questions.find(
          (question) => question.id_question === id + 1
        );
      } else {
        this.verifyRoadmapRecommended();
      }
    },
    verifyRoadmapRecommended() {
      let frontend = 0;
      let backend = 0;
      let full = 0;
      let quantityTotal = [];

      this.responseQuestions.forEach((i) => {
        switch (i) {
          case 1:
            frontend += 1;
            break;

          case 2:
            backend += 1;
            break;

          default:
            full += 1;
            break;
        }
      });

      quantityTotal = [frontend, backend, full];
      let maxValueResponse = Math.max(...quantityTotal);
      let numberRoadmap = null;

      quantityTotal.forEach((value, area) => {
        if (value === maxValueResponse) numberRoadmap = area;
      });

      switch (numberRoadmap) {
        case 0:
          this.roadmapRecommended = "FrontEnd";
          break;
        case 1:
          this.roadmapRecommended = "BackEnd";
          break;
        default:
          this.roadmapRecommended = "Mobile";
          break;
      }
    },
    goToRoadmap(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>

<style lang="scss" src="./Questions.scss" />
