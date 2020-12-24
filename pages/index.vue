<template>
  <v-row justify="center" align="center">
    <v-flex xs12 sm6 md12 lg8 mx-lg-auto>
      <h1 class="text--primary mb-3">Github search</h1>
      <v-card>
        <filter-list :list="list" />
      </v-card>
      <template v-for="(item, index) in list">
        <v-card :key="index" class="my-3">
          <repo-list
            :name="item.name"
            :date="item.created_at"
            :owner="item.owner.login"
            :url="item.clone_url"
            :description="item.description"
          />
        </v-card>
      </template>
    </v-flex>
  </v-row>
</template>

<script>
import repoList from '@/components/repoList';
import filterList from '@/components/filterList';

export default {
  components: {
    repoList,
    filterList,
  },

  async fetch({ store }) {
    await store.dispatch('GET_REPOS_DATA');
  },

  computed: {
    list() {
      return this.$store.state.repoList;
    },
  },
};
</script>
