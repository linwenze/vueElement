<template>
  <div class="layout">
    <div class="layout_header">
      <scrm-header></scrm-header>
    </div>
    <div class="main_container">
      <App-main/>
    </div>
  </div>
</template>

<script>
import { scrmHeader, AppMain } from "./index";

export default {
  name: "layout",
  components: {
    scrmHeader,
    AppMain,
  },
  data() {
    return {
    };
  },
  mounted(){
    // 页面刷新的时候，页面会滚到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};
</script>

<style lang="scss" scoped>
.main_container {
  width: 100%;
}
</style>


