<template>
  <div>
    <header class="panels-header">
      <h1>{{ contents.topic }}</h1>
      <p>{{ contents.description }}</p>
    </header>

    <v-expansion-panels class="expansion-panel" accordion>
      <v-expansion-panel
        v-for="(content, index) in contents.panel"
        :key="index"
      >
        <v-expansion-panel-header class="ex-painel-header">
          {{ content.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ul class="list-content">
            <li
              class="item-list"
              v-for="(item, i) in content.contents"
              :key="i"
            >
              <p v-if="!item.url">{{ item.text }}</p>
              <a class="item-url" v-else :href="item.url" target="_blank">{{
                item.text
              }}</a>
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getContents() {
      return this.contents.panel;
    },
  },
};
</script>

<style lang="scss" src="./Panels.scss" />
