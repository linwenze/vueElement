<template>
  <div class="m-r-20">
    <el-autocomplete v-model="state4" :fetch-suggestions="querySearchAsync" :placeholder="search.placeholder"  @select="handleSelect" v-bind:style="{ width:  + search.width+'px' }" clearable @clear="clear"></el-autocomplete>
  </div>
</template>
<script>
  import { mapMutations, mapState } from 'vuex'
export default {
  props: {
    search: {
      type: Object,
      default () {
        return {
          show: false,
          url: '',
          width: '150', //快捷搜索输入框宽度
          placeholder: '', //快捷搜索输入框提示文字
          displayCol: [] //弹出需要显示的列
        }
      }
    }
  },
  data() {
    return {
      restaurants: [],
      state4: '',
      timeout: null
    };
  },
  methods: {
...mapMutations(['closeLoading']),
   clear(){
    this.$emit('searchTable');
   },
   /**
    * @DateTime  2018-12-15
    * @param     {[STRING]}    queryString [搜索的keyword]
    * cd OBJECT 组件的回调函数
    */
    querySearchAsync(queryString, cb) {
      let model=this.search.url.split('.')[0]
      let method=this.search.url.split('.')[1]
      // alert(model);
      // alert(method)
      this.$fetch[model][method]({
        page: 1,
        tab: 0,
        keyword:queryString,
        per_page: 10
      },true).then((res) => {
        let list =[] ;
        for (var name of res.data.list.data) {
          name.value = '';
          for (var i of this.search.displayCol) {
            name.value = name.value + name[i] + ' '
          }
          list.push(name)
        }
        cb(list)
      }).catch((err) => {
        cb([])
      })
    },
    handleSelect(item) {
      this.$emit('getResult', item);
    }
  },
  created() {
    let list = [];
    console.log(list)
    for (var name of list) {
      name.value = '';
      for (var i of this.search.displayCol) {
        name.value = name.value + name[i] + ' '
      }
      // console.log(name)
    }

    this.restaurants = list;

  }
};

</script>
<style>
.wrap-table .el-autocomplete .el-input__inner {
  height: 36px;
  line-height: 36px;
  border-radius: 36px
}

.wrap-table .el-input__inner,
.wrap-table .el-pagination__jump,
.wrap-table .el-input__icon {
  line-height: 36px !important
}

.wrap-table .el-pagination__sizes,
.wrap-table .el-select--mini,
.wrap-table .el-pagination button,
.wrap-table .el-input--suffix,
.wrap-table .el-pager li,
.wrap-table .el-pagination .el-select .el-input .el-input__inner {
  height: 36px !important;
  line-height: 36px !important
}

/*.f-r .el-pager li{height:36px;line-height: 36px}
.el-pager li.btn-quicknext, .el-pager li.btn-quickprev{height:36px;line-height: 36px}*/

</style>
