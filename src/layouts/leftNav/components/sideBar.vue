<template>
  <div class="side-bar-wrapper">
    <template v-for="menu in menuConfig">
      <el-submenu :key="`sub-${menu.path}`" :index="menu.path" v-if="menu.children">
        <template slot="title">
          {{menu.name}}
        </template>
        <!--        <side-bar v-if="menu.children" :menu-config="menu.children"></side-bar>-->
      </el-submenu>
      <el-menu-item :key="`item-${menu.path}`" :index="menu.path" v-else>
        {{menu.name}}
      </el-menu-item>
    </template>
  </div>
</template>
<script>
  import { menus } from 'router';

  export default {
    name: 'SideBar',
    props: {
      menuConfig: {
        type: Array,
        default: () => menus
      }
    },
    data () {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .side-bar-wrapper {
    .el-menu-item {
      height: 40px;
      line-height: 40px;
    }
  }
</style>
