<template>
  <div class="container">
    <section class="panels">
      <Panels :contents="data[idTopic - 1]" />
    </section>
    <section class="timeline">
      <v-timeline>
        <h2 class="timeline-title">Roadmap {{ $route.name }}</h2>
        <v-timeline-item
          right
          v-for="(item, index) in data"
          :key="index"
          class="timeline-topic"
        >
          <p
            class="text-topic"
            @click="openContents(item.id)"
            :class="{ '-active': item.id === idTopic }"
          >
            {{ item.topic }}
          </p>
        </v-timeline-item>
      </v-timeline>
    </section>
  </div>
</template>

<script>
import Panels from "@/components/Panels/Panels.vue";

export default {
  components: {
    Panels,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      idTopic: 1,
    };
  },
  methods: {
    openContents(id) {
      this.idTopic = id;
    },
  },
};
</script>

<style lang="scss" src="./Roadmap.scss" />
