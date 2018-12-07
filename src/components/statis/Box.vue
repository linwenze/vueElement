<template>
  <div>
    <el-row v-show="isShow">

    </el-row>
    <el-row>
      <el-col :span="18">
        <el-button type="primary" round> <i class="fa fa-search" aria-hidden="true"></i>查询</el-button>
         <el-button round>清空查询条件</el-button>
      </el-col>
      <el-col :span="6" class="text-right">
        <i class="fa" :class="{'fa-angle-double-up': isShow}"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShow: true
    }
  }
}
</script>

