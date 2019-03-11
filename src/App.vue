<template>
  <el-row type="flex">
    <left-nav></left-nav>
    <el-col>
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
  import LeftNav from 'layouts/leftNav';

  export default {
    name: 'App',
    components: { LeftNav },
    data () {
      return {
        //
      };
    }
  };
</script>
<style lang="scss" scoped>

</style>
