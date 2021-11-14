<template>
  <div class="wrapper-roadmaps">
    <v-card
      class="mx-auto card"
      max-width="380"
      v-for="item in data"
      :key="item.id"
    >
      <v-img :src="require(`@/assets/${item.image}`)" height="200px"></v-img>

      <v-card-title class="title"> {{ item.title }} </v-card-title>

      <v-card-subtitle class="subtitle">
        {{ item.description }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn text color="#FFF" class="btn"> Iniciar </v-btn>
      </v-card-actions>
    </v-card>
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
};
</script>

<style lang="scss">
.wrapper-roadmaps {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
}

.card {
  margin-bottom: 20px;
}

.title {
  color: #8a01fe;
}

.btn {
  background-color: #8a01fe;
}

@media (max-width: 768px) {
  .wrapper-roadmaps {
    justify-content: center;
  }
}
</style>
