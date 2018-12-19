<template>
  <div class="search-bar bg-white mar-l-r30">
    <slot name="searchFilter"></slot>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" size="medium" round icon="el-icon-search" class="m-l-16" @click="find">查询</el-button>
        <el-button plain size="medium" round icon="el-icon-delete" @click="clear">清空查询条件</el-button>
        <a class="f-r mar-l-r16 shrink pointer" @click="changsearchstyle" v-if="ishidden"><i class="el-icon-arrow-up"></i>收起</a>
        <a class="f-r mar-l-r16 shrink pointer" @click="changsearchstyle" v-if="!ishidden"><i class="el-icon-arrow-down"></i>展开</a>
      </el-col>
    </el-row>
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
      value6: '',
      input: '',
      ishidden:true
    };
  },
  methods: {
    ...mapMutations(['closeLoading']),
    find() {
      this.$emit('find');
    },
    clear() {
      this.$emit('clear');
    },
    changsearchstyle(){
    this.ishidden = !this.ishidden
    this.$emit('searchIshidden')
  }
  },
  created() {


  }
  
};

</script>
<style>
</style>
