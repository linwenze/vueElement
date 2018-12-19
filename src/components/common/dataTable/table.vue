<template :table="table">
  <div class="wrap-table">
    <el-row class="flex vcenter h80" v-if="table.hasFirstPagination">
      <el-col :span="6">
        <slot name="buttons"></slot>
      </el-col>
      <el-col :span="18">
        <div class="flex vcenter h80 lright">
          <search :search='table.search' @getResult='getResult' @searchTable='handleCurrentChange'></search>
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 15, 20, 30]" :page-size="this.table.page.per_page" layout="sizes, prev, pager, next" :total="table.page.total_count">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <el-table v-loading="table.loading" :show-summary="table.hasShowSummary" :summary-method="table.getSummaries" ref="TlRlTable" :data="table.data" tooltip-effect="dark" :border="table.border" style="width: 100%" :row-class-name="rowClassName" :span-method="objectSpanMethod" header-row-class-name="thClassName" @selection-change="handleSelectionChange" @row-click="rowClick">
      <el-table-column v-if="table.hasSelect" type="selection" width="55">
      </el-table-column>
      <el-table-column type="expand" v-if="table.hasExpand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item :label="item.label" v-for="item in table.expands" :key="item.id">
              <span>{{ props.row[item.prop] }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <template v-for="item in table.tr">
        <el-table-column v-if="item.show !== false && item.show === 'template'" :label="item.label" :class-name="item.className ? item.className : ''" :key="item.id" :width="item.width ? item.width : ''" :min-width="item.minWidth ? item.minWidth : ''">
          <template slot-scope="scope">
            <slot :name="item.prop" :obj="scope"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else-if="item.show !== false && item.show !== 'template'" :label="item.label" :prop="item.prop" :class-name="item.className ? item.className : ''" :key="item.id" :width="item.width ? item.width : ''" :min-width="item.minWidth ? item.minWidth : ''">
        </el-table-column>
      </template>
      <el-table-column column-key="operation" :label="table.operation.label" :width="table.operation.width ? table.operation.width : ''" :min-width="table.operation.minWidth ? table.operation.minWidth : ''" :class-name="table.operation.className" v-if="table.hasOperation">
        <template slot-scope="scope">
          <el-button v-for="item in table.operation.data" :type="item.type" plain :class="item.classname ? item.classname : ''" :key="item.id" :size="item.size" @click.stop="handleOperation(scope.$index, scope.row, item.id)" :icon="item.icon" round>{{ item.label }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="flex vcenter h66">
      <el-col :span="12">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="12">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="this.table.page.per_page" layout="prev, pager, next" :total="table.page.total_count" class="f-r">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import search from "@/components/common/dataTable/search";
export default {
  name: 'recordlist',
  components: {
    search,
  },
  props: {
    table: {
      type: Object,
      default () {
        return {
          hasMergeRowOrColumn: false, // 是否合并单元格
          loading: false, // 加载中动画
          hasShowSummary: false, // 是否显示表位合计行
          border: false, // 是否带有纵向边框，默认为false
          hasSelect: false, // 有无选中功能
          hasOperation: false, // 有无操作功能
          hasExpand: false, // 有无展开行功能
          hasFirstPagination:false,
          tr: [ // 表头数据 —— className:列的class名
            {
              id: '1',
              label: 'label',
              prop: 'prop',
              className: 'classname',
              minWidth: '80',
              show: true // show有三种值：false隐藏当前列，true常规表格列，template自定义表格列

            }
          ],
          data: [], // 表格数据 —— 如需添加行class，处理数据时则需要传入class名， class需为数组
          page: 1,
          search: {
            show: false,
            data: [],
            width: '150', //快捷搜索输入框宽度
            placeOrder: '', //快捷搜索输入框提示文字
            displayCol: [] //弹出需要显示的列
          },
          operation: { // 操作功能
            label: '操作', // 操作列的行首文字
            width: '200', // 操作列的宽度
            className: '', // 操作列的class名
            data: [ // 操作列数据
              {
                label: '通过', // 按钮文字
                Fun: 'handleSubmit', // 点击按钮后触发的父组件事件
                size: 'mini', // 按钮大小
                id: '1', // 按钮循环组件的key值
                classname: 'show' // 按钮的类名
              }
            ]
          },
          expands: [ // 展开行数据
            {
              id: '1',
              label: 'label',
              prop: 'prop'
            }
          ],
          getSummaries(param) { // 自定义表位合计行数据
            // *** 此函数传入param参数
            console.log(param);
            // *** 最后返回一个数组，合计行会显示数组中的内容
            return []
          }
        }
      }
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  created() {
  },
  methods: {
    //获取搜索返回的列表、
    /**
    *@param {res} OBJECT 快捷搜索选中事件
     */
    getResult(res){
      this.$emit('searchTable',{searchData:res});
    },
    handleCurrentChange() {
      this.$emit('searchTable', { page: this.currentPage });
    },
    handleSizeChange(val) {
      this.table.page.per_page = val;
      this.currentPage = 1;
      this.$emit('searchTable', { page: 1, per_page: val });
    },
    handleSelectionChange(val) {
      this.$emit('onHandleSelectionChange', val);
    },
    handleOperation(a, b, id) {
      const data = this.table.operation.data;
      for (let i = 0; i < data.length; i++) {
        if (id === data[i].id) {
          this.$emit(data[i].Fun, a, b);
        }
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (!this.hasMergeRowOrColumn) {
        return
      } else {
        this.$emit('onMergeRowOrColumn', { row, column, rowIndex, columnIndex });
      }
    },
    // 点击某一行时触发的函数
    // *** 按下左键然后移动鼠标到其它列放开左键，会有报错 -- 优化：添加点击行参数，
    rowClick(Row, Event, Column) {
      if (!Column || Column.type === 'selection' || Column.columnKey === 'operation' || Column.type === 'expand') {
        return
      }
      const data = {
        row: Row,
        event: Event,
        column: Column
      };
      this.$emit('onRowClick', data)
    },
    // 行类名的回调函数
    // 在表格数据中添加class字段即为表格行类名，配合css可对表格行中的自定义标签进行样式优化
    rowClassName(rowdata) {
      const data = this.table.data;
      let className = data[rowdata.rowIndex].class ? data[rowdata.rowIndex].class : '';
      if (className.length === 0) {
        return
      }
      className = className.join(' ');
      return className
    }
  }
}

</script>
<style>
.el-pagination {
  padding: 0 5px
}

</style>
