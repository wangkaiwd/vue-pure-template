<template>
  <el-row type="flex">
    <left-nav></left-nav>
    <el-col>
      <el-card class="content">
        <div slot="header">
          {{$route.name}}
        </div>
        <router-view></router-view>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import LeftNav from 'layouts/leftNav';

  export default {
    name: 'AdminMain',
    components: { LeftNav },
    data () {
      return {};
    },
    updated () {
      console.log('route', this.$route);
    }
  };
</script>

<style lang="scss" scoped>
  .content {
    height: 100vh;
  }
</style>
