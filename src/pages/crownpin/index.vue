<template>
    <el-container>
      <el-header>Header</el-header>
      <el-main>session:{{session}}
        <el-button type="primary" @click="setSession(Math.random()*1000)">设置session</el-button>
      </el-main>
    </el-container>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'crownpin',
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations(['setSession']),

  },
  computed: {
    ...mapState(['session'])
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    height:400px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>