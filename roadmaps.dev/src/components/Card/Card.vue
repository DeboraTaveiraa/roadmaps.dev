<template>
  <div class="wrapper-roadmaps">
    <div v-for="(item, index) in data" :key="index" class="card">
      <img :src="require(`@/assets/${item.image}`)" alt="" height="250px" />
      <h1 class="title">{{ item.title }}</h1>
      <p class="subtitle">{{ item.description }}</p>
      <button class="btn" @click="goRouter(item.path)">Iniciar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    goRouter(path) {
      this.$router.push({ path: `${path}` });
    },
  },
};
</script>

<style lang="scss" scoped src="./Card.scss" />
