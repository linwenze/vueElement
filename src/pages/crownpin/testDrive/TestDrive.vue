<template>
	<div id="popup">
		<el-dialog
		  title="试驾预约业务记录"
		  :visible.sync="dialogVisible"
		  width="950px" height="330px"
		  :before-close="handleClose">
		  <div class="dialog-center">
		  	   <div class="dialog-center-left">待处理</div>
		  	   <div class="dialog-center-right">
		  	   	    <el-table
				    :data="tableData"
				    border
				    style="width: 100%">
				    <el-table-column
				      prop="name"
				      label="客户姓名"
				      width="130">
				    </el-table-column>
				    <el-table-column
				      prop="tel"
				      label="手机号码"
				      width="140">
				    </el-table-column>
				    <el-table-column
				      prop="time"
				      label="询价时间"
				       width="160">
				    </el-table-column>
				    <el-table-column
				      prop="type"
				      label="询价车型"
				       width="190">
				    </el-table-column>
				    <el-table-column
				      prop="content"
				      label="询价内容">
				    </el-table-column>
				  </el-table>
		  	   </div>
		  	   <div class="clearfiex"></div>
		  </div>
		  <div class="testArrow"><img src="../../../assets/images/test/arrow.jpg"></div>
		  <div class="dialog-center">
		  	   <div class="dialog-center-left dialog-center-left-blue">已取消</div>
		  	   <div class="dialog-center-right">
		  	   	    <el-table
				    :data="closeData"
				    border
				    style="width: 432px">
				    <el-table-column
				      prop="sale"
				      label="销售顾问"
				      width="130">
				    </el-table-column>
				    <el-table-column
				      prop="closetime"
				      label="取消时间"
				      width="140">
				    </el-table-column>
				    <el-table-column
				      prop="why"
				      label="取消原因"
				       width="160">
				    </el-table-column>
				    </el-table>
		  	   </div>
		  	   <div class="clearfiex"></div>
		  </div>
		  <span slot="footer" class="dialog-footer" id="seeDa">
		    <el-button type="primary" @click="goArchives" round>查看完整客户档案</el-button>
		  </span>
		</el-dialog>
	</div>
</template>
<script>
	export default{
		data() {
	      return {
	        tableData:[{
	          tel: '18825207792',
	          name: '王小虎',
	          time: '2016-05-04',
	          type: '宝马730购东风日产全车型,多种金融购车方案,在线预约试驾享实惠;现在就登录「车巴巴」,获取购车优惠!汽车报价大全',
	          content: '高考成功后'
	        }],
	        closeData:[{
	          sale: '王小虎',
	          closetime: '2016-05-04',
	          why: '宝马730购东风日产全车型',
	        }],
	        dialogVisible: true
	      }
	    },
	    methods:{
	    	handleClose(){
	    		this.dialogVisible = false;
	    	}
	    }
	};
</script>
<style>
    .testArrow{
    	width:100%;
    	height:60px;

    }
    .testArrow >img{
    	margin-left:44px;
    }
	.clearfiex{
		clear: both;
	}
	 .el-dialog__header{
	 	font-size:12px;
		padding:24px 30px;
		border-bottom:1px solid #ebeaf0 !important;
	}
	#popup .el-dialog__title{
		font-size:14px;
		color:#434343;
	}
	.dialog-center{
		width:890px;
		height:auto;
		margin:0px auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dialog-center-left{
		float:left;
		width:90px;
		height:90px;
		font-size:14px;
		color:#434343;
		line-height:90px;
		text-align:center;
		border:1px solid #dadbdd;
		border-radius: 50%;
	}
	.dialog-center-left-blue{
		color:#1593ea;
		border:1px solid #1593ea;
	}
	.el-table_1_column_1 .cell{
		/*margin-left:30px;*/
	}
	.dialog-center-right{
		width:780px;
		float:right;
		margin-left:20px;
	}
	#seeDa .el-button{
		width:172px;
	}
	.dialog-footer{
		height:36px;
	}

	#popup .el-icon-close{
		font-size:24px;
	}
	.el-dialog__footer{
		display:flex;
		justify-content: center;
	}
</style>