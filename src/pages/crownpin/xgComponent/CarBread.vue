<template>
  <div class="clearfix">
    <el-row class="crownpin-top">
      <el-col :span="18">
        <div style="width: 50px;height: 50px;background: #1494eb;display: inline-block;vertical-align: middle;margin: -2px 5px 0 0;"></div>
        <i class="scrm-icon scrm-icon-16 scrm-classify"></i>
        <span class="top-module m-l-5">汽车销冠</span>
      </el-col>
      <el-col :span="6" class="text-right">
        <router-link to="/index" class="icon">
          <i class="scrm-icon scrm-icon-16 scrm-myorder"></i>
          <span class="m-l-5 text-blue">使用教程</span>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.crownpin-top {
  font-size: 14px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .05);
  margin: 0 30px 20px;
  height: 50px;
  line-height: 50px;
  padding-right: 15px;
}
</style>


