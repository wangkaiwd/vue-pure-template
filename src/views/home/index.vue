<template>
  <div class="home">
    <v-navigation-drawer
      class="blue lighten-3"
      dark
      permanent
    >
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <!-- <v-list-tile-action>
             <v-icon>{{ item.icon }}</v-icon>
           </v-list-tile-action>-->

          <v-list-tile-content>
            <v-list-tile-title>
              <router-link tag="div" :to="item.link">
                {{ item.title }}
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    data () {
      return {
        items: [
          { title: '首页', link: '/home' },
          { title: '个人中心', link: '/personal' },
          { title: '商品', link: '/goods' },
          { title: '购物车', link: '/shopCart' }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
</style>
