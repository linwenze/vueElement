<template>
  <div>
    <car-bread></car-bread>
    <div class="crownpin_content">
      <el-tabs type="border-card" @tab-click="handleClick">
        <el-tab-pane :label="item[0].name +'(' + item[0].num + ')'">
          用户管理
          <el-row>
            <el-col :span="6"> aefawefawe</el-col>
            <el-col :span="6"> 2222</el-col>
            <el-col :span="6"> 555</el-col>
            <el-col :span="6"> 8888</el-col>
            <el-col :span="6"> 2222</el-col>
            <el-col :span="6"> 333</el-col>
            <el-col :span="6"> aefawefawe</el-col>
            <el-col :span="6"> 2222</el-col>
            <el-col :span="6"> 333</el-col>
            <el-button type="primary" round>查询</el-button>
         <el-button round>清空查询条件</el-button>
          </el-row>

        </el-tab-pane>
        <el-tab-pane :label="item[1].name +'(' + item[1].num + ')'">
          配置管理
        </el-tab-pane>
        <el-tab-pane :label="item[2].name +'(' + item[2].num + ')'">
          角色管理
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import CarBread from '../xgComponent/CarBread'
export default {
  components:{
    CarBread
  },
  data(){
    return{
      item: [{'name': '待处理','num': 299},{'name': '已报价', 'num': 699}, {'name': '已取消', 'num': 845}]
    }
  },
  methods:{
    handleClick(tab, event){

    }
  }
}
</script>

<style lang="scss" scoped>
.crownpin_content {
  margin: 0 30px;
  /deep/ .el-tabs__item{
    height: 50px;
    line-height: 50px;
  }
}
.crownpin_content /deep/ .el-tabs__item:focus.is-active.is-focus:not(:active) {
  box-shadow: 0 0 0 0 #fff inset;
}

.crownpin_content /deep/ .el-tabs--border-card>.el-tabs__content {
  min-height: 580px;
}
</style>

