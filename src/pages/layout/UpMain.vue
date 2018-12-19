<template>
  <div class="up_main">
    
    <div class="up_container" :style="{'min-height': minHeight+'px'}">
      <router-view></router-view>
    </div>
    <!-- footer部分 -->
    <div class="down_container">
      <scrm-footer></scrm-footer>
    </div>
  </div>
</template>

<script>
import ScrmFooter from "./Footer";

export default {
  components: {
    ScrmFooter
   
  }, 
  data(){
    return{
      minHeight: 680,
    }
  },
  mounted() {
    this.resetHeight(); // 初始化执行

    window.onresize = () => {
      this.resetHeight(); // 窗口改变执行
    };
  },
  methods: {
    resetHeight() {
      this.minHeight = `${document.documentElement.clientHeight}` - 100- 70;
      if (this.minHeight < 550) this.minHeight = 550;
    }
  }
}
</script>

<style lang="scss" scoped>
.up_container {
  padding-top: 20px;
}
</style>


