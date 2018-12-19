<template>
	<div id="sale">
		<el-dialog
		  title="分配销售顾问"
		  :visible.sync="dialogVisible"
		  width="624px" height="266px"
		  :before-close="handleClose">
		  <div class="dialog-center">
		  	   <div class="dialog-center-title">将选中的<span>1</span>个客户分配给</div>
		  	   <el-form ref="form" :model="form" label-width="80px">
				  <el-form-item label="销售顾问">
				    <el-select v-model="form.region" placeholder="选择更换的销售顾问">
				      <el-option label="销售顾问1" value="shanghai"></el-option>
				      <el-option label="销售顾问2" value="beijing"></el-option>
				    </el-select>
				  </el-form-item>
			   </el-form>
		  </div>
		  <span slot="footer" class="dialog-footer">
		  	    <el-button type="primary" round>确定</el-button>
		    	<el-button round>取消</el-button>
 			 	
		  </span>
		</el-dialog>
	</div>
</template>
<script>
export default {
    data() {
      return {
        form: {
          region: ''
        },
        dialogVisible: true
      }
    },
    methods: {
      dialogVisible(){
      	this.dialogVisible=false
      }
    }
  };
</script>
<style>
.el-dialog__header{
	 	font-size:12px;
		padding:24px 30px;
		border-bottom:1px solid #ebeaf0 !important;
	}
	.dialog-center-title{
		padding-left:80px;
		font-size:14px;
		color:#444;
		width:523px;
		line-height:24px;
		padding-bottom:10px;
		
	}
	.dialog-center-title span{
		color:#f06060;
	}
	.dialog-center-selection{

	}

	.el-dialog__title{
		font-size:14px !important;
		color:#444446 !important;
	}
	.el-select{
		display:block !important;
	}
	.el-dialog__body{
		padding:30px 20px 0px !important;
	}
	.el-dialog__footer{
		display:flex;
		justify-content: center;
		align-items: center;
	}
	.el-button.el-button--default.is-round{
		border-color:#1494eb !important;
		color:#1494eb;
	}
	.el-form-item__label{
		color:#454545 !important;
	}
	#sale .el-icon-close{
		font-size:24px;
	}
</style>