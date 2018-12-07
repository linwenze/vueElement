<template>
  <section class="app-main">
    <router-view :key="key"></router-view>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {
      
    };
  },
  computed: {
    key() {
      return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date();
    }
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100%;
}
</style>


