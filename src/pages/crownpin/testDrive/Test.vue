<template>
	<div id="buy">
	<div @click= "opendialog">测试弹窗</div>
    <TestDrive></TestDrive>
</div>
</template>
<script>
    import TestDrive from "./TestDrive"
	export default{
		components:{
          TestDrive
		},
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			opendialog(){
				//alert(11111)
                  this.isShow = true;
			}
		}
	};
</script>
<style></style>