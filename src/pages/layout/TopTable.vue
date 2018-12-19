<template>
	<div id="topTable">
		<el-tabs v-model="activeName" @tab-click="handleClick(activeName)">
		    <el-tab-pane v-for="obj in topTableData" :label="obj.label+'('+obj.count+')'" :name="obj.value | filterNuber"></el-tab-pane>
		    
	    </el-tabs>
	</div>

</template>
<script>
  export default {
  	props:["topTableData"],
    data() {
      return {
        activeName:'0' ,
       
       
      };
    },
    methods: {
      handleClick(num) {
        this.$emit('tabSearch',{tab:num})
      }
    }
    
  };

</script>
<style>
 #topTable{
 	background:#fff;
 	margin:0 30px;
 }
 #topTable .el-tabs__nav-wrap::after{
    height:0;
 }
 #topTable .el-tabs__active-bar{
 	top:0;
 	height:5px;
 }
 

</style>