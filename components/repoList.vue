<template>
  <v-flex xs12>
    <v-card>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div class="title d-flex justify-space-between align-end flex-wrap">
              <v-card-title>{{ name }}</v-card-title>
              <v-card-subtitle class="mb-1">{{ getDate }}</v-card-subtitle>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card-text>
              <h2 class="text--primary mb-2">
                <a :href="url" target="_blank">{{ owner }}</a>
              </h2>
              <div class="description">
                <p>{{ description }}</p>
              </div>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-flex>
</template>
<script>
/* eslint-disable vue/no-unused-vars */
export default {
  name: 'RepoList',

  props: {
    name: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    owner: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    openItem: {},
  }),

  computed: {
    getDate() {
      return new Date(this.date).toLocaleString();
    },
  },
};
</script>
<style lang="scss" scoped>
.repo-list {
}
</style>
