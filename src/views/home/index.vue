<template>
  <div class="home">
    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
  </div>
</template>

<script>
  import { fetchGoods, fetchRatings } from 'api';

  export default {
    name: 'Home',
    components: {},
    data () {
      return {};
    },
    mounted () {
      fetchRatings({ name: 'wk', skill: '舌尖' }).then(
        res => {
          console.log(res);
        }
      );
      fetchGoods({ name: 'wk', age: 18 }).then(
        res => {
          console.log(res);
        }
      );
    },
  };
</script>

<style lang="scss" scoped>
</style>
