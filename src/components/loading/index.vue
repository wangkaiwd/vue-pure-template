<template>
  <div class="loading">
    <v-progress-circular
      color="purple"
      indeterminate
    >
    </v-progress-circular>
  </div>
</template>

<script>
  export default {
    name: 'BaseLoading'
  };
</script>

<style lang="scss" scoped>
  .loading {
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
