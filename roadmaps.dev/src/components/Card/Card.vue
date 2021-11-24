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

<style lang="scss" scoped>
.wrapper-roadmaps {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
}

.card {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  width: 25em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  margin-bottom: 20px;
}

.title {
  width: 100%;
  text-align: start;
  margin-bottom: 5px;
  font-size: 2em;
  color: #8a01fe;
}

.subtitle {
  height: 40px;
  font-size: 1em;
}

.btn {
  margin-bottom: 10px;
  background-color: #8a01fe;
  width: 100px;
  border-radius: 5px;
  color: #fff;
  height: 35px;

  &:hover {
    background-color: #fff;
    border: 1px solid #8a01fe;
    color: #8a01fe;
  }
}

@media (max-width: 414px) {
  .wrapper-roadmaps {
    justify-content: center;
  }
  .card {
    width: 18em;
  }
}
</style>
