<template>
  <div class="filter-list">
    <div class="sort">
      <v-card-subtitle> Сортировка по: </v-card-subtitle>
      <v-list dense>
        <v-list-item-group
          class="d-flex align-center mx-lg-auto"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in sort"
            :key="i"
            @click="handleSort(item.param)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    <div class="filter mr-3 mb-3">
      <v-text-field
        v-model="valueInput"
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        placeholder="Введите название"
        @input="handleInput(valueInput)"
      ></v-text-field>
      <v-list v-if="show && list" dense>
        <v-list-item v-for="(item, index) in list" :key="index">
          <v-list-item-content>
            <v-list-item-title @click="handlerClick(item.name)">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FilterList',

  props: {
    list: {
      type: [Object, Array],
      default: () => ({}),
    },
  },

  data: () => {
    return {
      show: false,
      valueInput: '',
      sort: [
        {
          text: 'ID',
          param: 'id',
        },
        {
          text: 'Дате обновления',
          param: 'updated',
        },
        {
          text: 'Дате создания',
          param: 'created',
        },
      ],
    };
  },

  methods: {
    handleSort(param) {
      this.$store.dispatch('GET_REPOS_DATA', param);
    },
    handleInput(param) {
      this.show = true;
      this.$store.dispatch('GET_FILTERS', param);
      if (this.valueInput === '') {
        this.$store.dispatch('GET_REPOS_DATA');
        this.show = false;
      }
    },
    handlerClick(repo) {
      this.$store.dispatch('GET_FILTERS', repo);
      this.valueInput = repo;
      this.show = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.filter-list {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .sort {
    display: flex;

    .col {
      border: 1px solid #000;
      padding: 10px 20px;
      cursor: pointer;
      border-right: none;

      &:hover {
        background: #c5c5c5;
      }
      &:last-child {
        border-right: 1px solid #000;
      }
    }
  }

  .filter {
    position: relative;

    .v-list {
      position: absolute;
      top: 60px;
      left: 0;
      border-color: #ffffff;
      width: 100%;
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
      z-index: 2;

      .v-list-item {
        cursor: pointer;
        &:hover {
          background: #c5c5c5;
        }
      }
    }
  }
}
</style>
