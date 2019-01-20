<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  name: "About",
  components: { VanButton: Button }
};
</script>
<style lang="scss" scoped>
</style>

