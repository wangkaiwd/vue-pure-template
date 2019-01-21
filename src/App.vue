<template>
  <div id="app">
    {{msg}}
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => ({ msg: "hh" })
};
</script>

<style lang="scss" scoped>
</style>
