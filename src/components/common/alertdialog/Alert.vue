<template>
	<div id="alertRoot">
		<el-dialog title="提示" :visible.sync="dialogFormVisible">
		  <div class="warningContent">
				<div class="warningContentIcon">
					<i  class="el-icon-warning warningBig"></i>
				</div>
				<p>请选择潜客进行分配</p>
		  </div>
		  <div slot="footer" class="dialog-footer dialog-footer-flex ">
		    <el-button type="primary" round>确定</el-button>
		  </div>
	    </el-dialog>
</div>
</template>
<script>
	export default {
    data() {
      return {
        dialogFormVisible: true
      }
    },
    methods: {
      dialogFormVisible(){
      	//this.dialogFormVisible=false
      }
    }
  };
</script>
<style>
	#alertRoot .el-dialog{
		width:470px !important;
	}
	 .el-dialog__header{
	 	font-size:12px;
		padding:24px 30px;
		border-bottom:1px solid #ebeaf0 !important;
	}
	#alertRoot .el-dialog__title{
		font-size:14px !important;
	}
	.warningContentIcon{
		width:100%;
		padding-bottom:18px;
	}
	.warningContent,.warningContentIcon,.dialog-footer-flex{
		display:flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.warningBig{
		font-size:60px;
		color:#f39b77;
	}
	#alertRoot .el-dialog__footer{
		padding-top:0 !important;
	}
	#alertRoot .el-dialog__body{
		padding-bottom:20px !important;
	}
	#alertRoot .el-icon-close{
		font-size:24px;
	}
	
</style>