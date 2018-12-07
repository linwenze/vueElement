<template>
  <el-menu class="el-menu--dark" @select="handleSelect" :default-openeds="openeds">
    <div v-for="(item, key) in navs" :key="key">
      <el-menu-item v-if="!item.items || item.items.length == 0" :class="{'is-current': path == item.path}" :index='item.path'>
        {{item.title}}
      </el-menu-item>

      <el-submenu v-if="item.items && item.items.length" :index='item.fold'>
        <template slot="title">
          {{item.title}}
        </template>
        <el-menu-item :class="{'is-current': path == c.path}" v-for="(c, k) in item.items" :index='c.path' :key="k">
          {{c.title}}
        </el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
  <!-- <div class="side_bar">
    <div v-for="(item, key) in navs" :key="key">
       <div class=""></div>
       <div ></div>
    </div>
  </div> -->
</template>

<script>
import testData from '../../../jsonData/market.json.js' 
import * as Http from "@/services/api/login";

export default {
  data(){
    return{
      navs: [],
      path: '',
      openeds: ['1'] // 需要默认打开的三级菜单项
    }
  },
  created(){
    this.getTestData();
    this.path = '/market/posterTemplate';
  },
  methods: {
    getTestData(){ // 测试专用数据
        this.testData = Object.assign({},testData);
        this.navs = this.testData.menu;
    },
    handleSelect(key, keyPath) {
      this.path = key; // 当前高亮
      // if(this.navs && this.navs.length){
      //   for(let i=0; i< this.navs.length; i++){
      //     if(key ==this.navs[i].path){
      //       this.$eventHub.$emit('vistedNav', this.navs[i]);
      //       break;
      //     }
      //   }
      // }
    },
    getLeftMenu(){

    }
  }
}
</script>

<style lang="scss" scoped>
 @import "@/assets/css/mixin.scss";
  .sidebar-wrapper {
    /deep/ .el-menu {
      min-height: 100%;
      border-radius: 0px;
      border-right: none;
      width: 201px;
    }

    [class*="el-icon-"] {
      font-size: 18px;
      color: #fff;
    }

    .el-menu--dark {
      width: 201px;
      background:-webkit-linear-gradient(top, #282e34,#444d58);
      background:-o-linear-gradient(bottom, #282e34,#444d58);
      background:-moz-linear-gradient(bottom, #282e34,#444d58);
      background:linear-gradient(to bottom, #282e34,#444d58);
      /deep/ .el-menu-item,
      /deep/ .el-submenu__title {
        color: rgb(191, 203, 217);
        background: #282e34;
        // &.is-active {
        //   color: #bfcbd9;
        //   background-color: inherit;
        // }
        &:hover,
        &:focus{
          // background: rgba(23, 27, 31, .5);
          background: #171b1f;
          color: #fff;
        }
        &.is-current {
          // background:rgba(#171b1f, 0.5);
          // background: rgba(23, 27, 31, .5);
          background: #171b1f;
          color: #fff;
          position: relative;
          &::before {
            content: '';
            width: 5px;
            height: 100%;
            background: #1494eb;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0px;
          }
          &::after{
            content: '';
            width: 0;
            height: 0px;
            border: 10px solid transparent;
            border-right: 10px solid #E9EFF3;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -10px;
          }
        }
      }

      /deep/ .el-submenu .el-menu {
        background-color: #282e34;
      }
      /deep/ .el-submenu .el-submenu__title, {
        background-color: #282e34;
        &:hover,
        &:focus{
          // background: rgba(#171b1f, .5);
          background: #171b1f;
          color: #fff;
        }
      }

    }
  }
</style>

