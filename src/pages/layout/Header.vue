<template>
  <div class="header-wrapper">
    <div style="width: 100%;height:50px;" v-if="isFixed"></div>
    <div class="header-container flex" :class="{'header-container-fixed': isFixed}">
      <div class="header-menu" v-loading.fullscreen="loading">
        <div class="header-title-wrap" :class="{'header-title-wrap-fixed': isFixed}">
          <router-link to="/home" style="min-width: 260px;">
            <span class="text-center header-title" :class="{'header-title-fixed': isFixed}">
              <i class="scrm-icon scrm-icon-45 scrm-logo" v-if="!isFixed"></i>
              <P class="title-font">赤峰奔驰南山专卖店</P>
            </span>
            <label class="version">Vip专业版</label>
          </router-link>
        </div>

        <el-menu class="menu-nav" mode="horizontal" @select="handleSelect">
          <el-menu-item :class="{'is-current': path == menu.path,'el-menu-item-fixed': isFixed}" 
            v-for="(menu, key) in menus" :key="key" :index='menu.path'>
            <i class="scrm-icon scrm-icon-30" style="margin-bottom: 10px;" :class="menu.icon" v-if="!isFixed"></i>
            <p>{{menu.title}}</p>
          </el-menu-item>
        </el-menu>
      </div>

      <el-menu mode="horizontal" class="avatar-container flex" :class="{'avatar-container-fixed': isFixed}">
        <div>
          <router-link to="/index" class="icon">
            <span style="position: relative;">
              <i class="scrm-icon scrm-icon-16 scrm-notice"></i>
              <span class="hotspot"></span>
            </span>
          </router-link>

          <router-link to="/index" class="icon">
            <i class="scrm-icon scrm-icon-20 scrm-college"></i>
          </router-link>
        </div>
        <el-dropdown trigger="click">
          <div class="avatar-wrapper">
            <img class="user-avatar" :src="userInfo.userAvatar" :onerror="defaultImg">
            <span class="user-name">张三</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <!-- <div @click="dialogFormVisible = true">
              <el-dropdown-item>
                设置
              </el-dropdown-item>
            </div> -->
            <div @click="logout">
              <el-dropdown-item>
                退出登录
              </el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu>
    </div>
  </div>
</template>

<script>
  // import * as userInfo from '@/utils/commonService/getUserInfo';
  import testData from '../../../jsonData/header.json.js' 
  import * as Http from "@/services/api/menunav";

  export default {
    data() {
      return {
        isFixed: false, // 滚动显示 
        menus: [], // 菜单
        loading: false,
        userInfo: {},
        path: '/crownpin',
        defaultImg: 'this.src="'+ require('../../assets/images/login/logo.png') +'"',
        testData: '', // 测试数据
      }
    },
    created() {
      console.log("header 头部初始化")
      // this.getTopMenu();
      // this.getCurrentPath();
      this.getTestData();
    },
    mounted () {
      console.log("header 头部初始化")
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      getTestData(){ // 测试专用数据
        this.testData = Object.assign({},testData);
        this.menus = this.testData.menu;
      },
      handleScroll(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop > 50){
          this.isFixed = true;
        }else {
          this.isFixed = false;
        }
      },
      getTopMenu(){ // 获取头部菜单
        Http.getTopNav().then(res => {
          this.$handleResponse(res, res=>{
            this.menus = res;
          });
        }).catch(res => {
          
        })
      },
      getSubNav(id, title){
        Http.getSubNav(id, title).then(res => {
          this.$handleResponse(res, res=>{
            let params = {
              menu: res,
              currtPath: res[0].items[0].path
            }
            this.$eventHub.$emit('subNav', params); // 传递给子菜单
             this.$router.push(params.currtPath); // 跳转
          });
        }).catch(res => {})
      },
      getCurrentPath(){
        // 初始化或者刷新的时候
        let pathArr = window.location.search.split('/');
        this.path='/'+pathArr[1];
      },
      logout() { // 退出登录
        this.$confirm('请确认是否退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.doLogout();
        }).catch(() => {

        });
      },
      doLogout() { // 执行退出操作
        this.$router.push('/login');
        //this.loading = true;
        // Http.logout().then(res => {
        //   this.loading = false;
        //   this.$handleResponse(res, res => {
        //     if (res) {
        //       localStorage.removeItem('userInfo'); // 清除用户信息
        //       sessionStorage.removeItem('visited'); // 清除拜访过的菜单
        //       this.$router.push('/login');
        //     }
        //   });
        // }).catch(res => {
        //   this.loading = false;
        // })
      },
      handleSelect(key, keyPath) {  // 当前选中高亮
        this.path = key;
        if(key == '/market'){
          this.$router.push('/market/softTemplate');
        }else {
          this.$router.push(key);
        }
        
        // 防止点击时，key 跳转的链接没有追加子链接时，则跳转地址依旧是上一次记录
        // this.$router.beforeEach((to, from, next) => {
        //   if (key === to.path) {
        //     next({
        //       path: from.path
        //     })
        //   } else {
        //     next()
        //   }
        // });
      }
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
      // this.$eventHub.$off('getNav');
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/assets/css/mixin.scss";
  .header-wrapper {
    $navHeight: 100px;
    .header-container {
      width: 100%;
      height: $navHeight;
      background-color: $mainMenuBg;
      @include flexJustify(space-between);
      @include flexAlign(center);
    }
    .header-container-fixed {
      height: 50px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 200;
    }
    .header-menu {
      flex: 1;
      @include flexAlign(flex-start);
      font-size: 18px;
      color: #fff;
      display: inline-block;
      min-width: 1150px;
      .header-title-wrap {
        display: inline-block;
        vertical-align: middle
      }
      .header-title-wrap-fixed{
        line-height: 50px;
      }
      .header-title {
        height: $navHeight;
        display: inline-block;
        margin-left: 30px;
        padding-top: 12px;
        .title-font{
          margin-top: 2px;
          font-weight: 500;
          font-size: 18px;
          color: #fff;
        }
      }
      .header-title-fixed {
        height: 50px;
        padding-top: 0;
      }
      .version{
        position: relative;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        padding: 0 8px;
        text-align: center;
        background-color: #1494eb;
        border-radius: 4px;
        margin-left: 10px;
        display: inline-block;
        top: -3px;
        &:before {
          content: '';
          width: 0;
          height: 0;
          border: 4px solid transparent;
          border-right: 4px solid #1494eb;
          position: absolute;
          left: -8px;
          top: 50%;
          margin-top: -4px;
        }
      }
      .menu-nav {
        padding-left: 30px;
        min-width: 720px;
        display: inline-block;
        vertical-align: middle;
        .el-menu-item {
          padding: 25px 24px 0;
          height: 100px;
          line-height: 20px;
          text-align: center;
          color: #bfcbd9;
          opacity: .5;
          &.is-current {
            border-bottom: 4px solid $decorationColor !important;
            color: #fff;
            background:#171b1f;
            opacity: 1
          }
        }
        .el-menu-item-fixed {
          height: 50px;
          line-height: 50px;
          padding: 0 24px;
        }
      }
    }
    .el-menu {
      background-color: transparent;
    }
    .el-menu--horizontal {
      border-bottom: none;
      &>.el-menu-item {
        &:not(.is-disabled):hover,
        &:not(.is-disabled):focus {
          background-color: transparent;
          color: #fff;
          opacity: .9;
        }
        &.is-active {
          border-bottom-color: transparent;
        }
      }
    }
    .avatar-container {
      outline: none;
      min-width: 200px;
      margin-right: 20px;
      padding-top: 46px;
      @include flexAlign(center);
      @include flexJustify(flex-end);
      .icon {
        margin-right: 20px;
        display: inline-block;
        [class*="el-icon-"] {
          font-size: 20px;
          color: #9595ad;
        }
      }
      .avatar-wrapper {
        cursor: pointer;
        position: relative;
        color: #bfcbd9;
        .user-avatar {
          width: 30px;
          height: 30px;
          display: inline-block;
          vertical-align: middle;
          @include borderRadius(50%);
          background-color: #fff;
        }
        .user-name {
          margin: 0 12px;
        }
      }
    }
    .avatar-container-fixed{
      padding-top: 0;
    }
    .hotspot {
      position: absolute;
      top: -2px;
      left: 16px;
      display:inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #f06060;
    }
  }

</style>
