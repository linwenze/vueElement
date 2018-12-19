<template>
	<div id="buy">
	<div @click= "opendialog">测试弹窗</div>
    <CarPricePopup v-if="isShow"></CarPricePopup>
    <!-- <saleDialog></saleDialog> -->
    <alerts></alerts>
</div>
</template>
<script>
    import CarPricePopup from "./CarPricePopup"
    import { saleDialog } from "@/components/common/salesdialog";
    import { alerts } from "@/components/common/alertdialog";
	export default{
		components:{
          CarPricePopup,
          saleDialog,
          alerts
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