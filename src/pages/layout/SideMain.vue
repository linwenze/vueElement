<template>
  <div class="side_main" >
    
    <div class="sidebar-wrapper">
      <side-bar></side-bar>
    </div>
    <!-- 右容器内容 -->
    <div class="right-container">
      <div class="right-content" :style="{'min-height': minHeight+'px'}">
        <router-view></router-view>
      </div>
      <scrm-footer></scrm-footer>
    </div>
  </div>
</template>

<script>
import { AppMain } from "./index";
import ScrmFooter from "./Footer";
import SideBar from './SideBar';


export default {
  components: {
    ScrmFooter,
    SideBar,

  },
  data() {
    return {
       minHeight: 500,
    };
  },
  mounted() {
    this.resetHeight(); // 初始化执行

    window.onresize = () => {
      this.resetHeight(); // 窗口改变执行
    };
  },
  methods: {
    resetHeight() {
      this.minHeight = `${document.documentElement.clientHeight}` - 100 - 70; // 100为头部header，70 为底部的footer
      if (this.minHeight < 550) this.minHeight = 550;
    }
  }
};
</script>

<style lang="scss" scoped>
.side_main {
  height: 100%;
  position: relative;
  .sidebar-wrapper {
    width: 200px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    overflow: hidden;
    transition: all 0.28s ease-out;
    background:#282e34;
    // background:-webkit-linear-gradient(top, #282e34,#444d58);
    // background:-o-linear-gradient(bottom, #282e34,#444d58);
    // background:-moz-linear-gradient(bottom, #282e34,#444d58);
    // background:linear-gradient(to bottom, #282e34,#444d58);
  }
  .right-container {
    min-height: 100%;
    transition: all 0.28s ease-out;
    margin-left: 200px;
  }
}
</style>
