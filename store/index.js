export const state = () => ({
  isFetching: false,
  repoList: [],
});

export const mutations = {
  FETCHING(state) {
    state.isFetching = true;
  },
  FETCHED(state) {
    state.isFetching = false;
  },
  SET_REPO_LIST(state, payload) {
    state.repoList = payload;
  },
};

export const actions = {
  async GET_REPOS_DATA({ commit }, payload) {
    commit('FETCHING');
    try {
      const response = await this.$axios.$get(
        `https://api.github.com/users/quetzal19/repos?sort=${payload}`,
      );
      commit('SET_REPO_LIST', response);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
    } finally {
      commit('FETCHED');
    }
  },

  async GET_FILTERS({ commit }, payload) {
    commit('FETCHING');
    try {
      const response = await this.$axios.$get(
        `https://api.github.com/repos/quetzal19/${payload}`,
      );
      commit('SET_REPO_LIST', [response]);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
    } finally {
      commit('FETCHED');
    }
  },
};
