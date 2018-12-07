<template>
  <div class="xg_platform">
    <div class="common-section xg_top clearfix">
      <el-row>
        <el-col :span="12">
          <i class="scrm-icon scrm-icon-16 scrm-classify"></i>
          <span class="top-module m-l-5">汽车销冠</span>
        </el-col>
        <el-col :span="12" class="text-right">
          <router-link to="/index" class="icon m-r-15">
            <i class="scrm-icon scrm-icon-16 scrm-exchange"></i>
            <span class="m-l-5 text-blue">兑换功能</span>
          </router-link>

          <router-link to="/index" class="icon">
            <i class="scrm-icon scrm-icon-16 scrm-myorder"></i>
            <span class="m-l-5 text-blue">我的订单</span>
          </router-link>
        </el-col>
      </el-row>
    </div>

    <div class="common-section xg_content">
      <div v-for="(menu, key) in menus" :key="key">
        <div class="_title">{{menu.title}}</div>
        <div class="_toolBox clearfix">
          <div class="_tool pointer" v-for="(item,key1) in menu.items" :key="key1" @click="handSelect(item)">
            <div class="_left">
              <i class="scrm-icon scrm-icon-70" :class="[item.icon]"></i>
            </div>
            <div class="_right">
              <div class="text-bold">{{item.title}}</div>
              <div class="text-gray">{{item.content}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import testData from "../../../jsonData/crownpin.json.js";
export default {
  data() {
    return {
      testData: "", // 测试数据
      menus: []
    };
  },
  mounted() {
    this.getTestData();
    this.menus;
  },
  methods: {
    getTestData() {
      // 测试专用数据
      this.testData = Object.assign({}, testData);
      this.menus = this.testData.menu;
    },
    handSelect(item){
      if(item.path){
        this.$router.push(item.path);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.xg_platform {
  .xg_top {
    padding: 15px;
  }
  ._title {
    height: 20px;
		line-height: 20px;
		font-weight: 600;
    color:#000;
    margin: 10px 0 20px;
  }
  ._toolBox{
    ._tool{
      width: 18%;
      float: left;
      height: 110px;
      // border: 1px solid #e8e8e8;
      padding: 20px 3px 10px 20px;
      margin: 0 2.5% 30px 0;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.05);
      &:nth-of-type(5n){
        margin-right: 0;
      }
      ._left {
        vertical-align: top;
        display: inline-block;
      }
      ._right {
        padding-left: 12px;
        display: inline-block;
        width: 60%;
        .text-bold {
          font-size: 18px;
        }
        .text-gray {
          margin-top: 15px;
          color: #a4a4a4;
          font-size: 12px;
        }
      }
      &:hover {
        transition: transform 0.2s ease-in;
        transform: translateY(-10px);
        box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

@media screen and (min-width: 1500px) {
  .xg_platform {
    ._toolBox{
      ._tool{
        ._right{
          width: 65%;
        }
      }
    }
  }
  // ._right{
  //   width: 65%;
  // }
}

@media screen and (min-width: 1700px) {
  .xg_platform {
    ._toolBox{
      ._tool{
        ._right{
          width: 70%;
        }
      }
    }
  }
}
</style>


