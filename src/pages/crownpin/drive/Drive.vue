<template>
  <div>
    
    <div class="clearfix">
      <!--subnav位置-->
       <SubNavView></SubNavView>
    </div>
    <div class="top-table">
        <TopTable @tabSearch='searchTable' :topTableData=topTableData></TopTable>
    </div>
    <search-bar @find="find" @clear="clear" @searchIshidden=searchIshidden>

      <template slot="searchFilter">
        <div class="searchOpen" v-if="searchIsOpen">
          <el-row class="m-b-30">
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">销售顾问/DCC</el-col>
                <el-col :span="17">
                  <select v-model="filter.advisor_id">
                    <option v-for="option in formOption.accoutOptions" v-bind:value="option.accountId">
                      {{ option.nickname }}
                    </option>
                  </select>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">关键字</el-col>
                <el-col :span="17">
                  <el-input v-model="filter.keyword" placeholder="请输入关键字" size="small"></el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">发起预约时间</el-col>
                <el-col :span="17">
                  <el-date-picker size="small" v-model="filter.send" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                  </el-date-picker>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">试驾时间</el-col>
                <el-col :span="17">
                  <el-date-picker size="small" v-model="filter.drive" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                  </el-date-picker>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row class="m-b-30">
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">智能试驾</el-col>
                <el-col :span="17">
                  <select v-model="filter.type">
                    <option v-for="option in formOption.typeOptions" v-bind:value="option.id">
                      {{ option.title }}
                    </option>
                  </select>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">是否超时</el-col>
                <el-col :span="17">
                  <select v-model="filter.over_time">
                    <option v-for="option in formOption.over_timeOptions" v-bind:value="option.id">
                      {{ option.title }}
                    </option>
                  </select>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="searchClose" v-if="!searchIsOpen">
             <ul>
               <li v-if="filter.advisor_id !=''">{{filter.advisor_id}}</li>
               <li v-if="filter.keyword !=''">{{filter.keyword}}</li>
               <li v-if="filter.send !=''">{{filter.send}}</li>
               <li v-if="filter.drive !=''">{{filter.drive}}</li>
               <li v-if="filter.type !=''">{{filter.type}}</li>
               <li v-if="filter.over_time !=''">{{filter.over_time}}</li>
             </ul>
        </div>
        

      </template>
    </search-bar>
    <div class="mar-l-r30 bg-white">
      <div class="mar-l-r16">
        <data-table :table="dataTable" @searchTable='searchTable' @onHandleSelectionChange="handleSelectionChange" @handleSee="handleSee">
          <div slot="buttons">
            <el-button type="primary" size="medium" round icon="el-icon-search" @click="exportFile()">导出</el-button>
          </div>
          <template slot-scope="props" slot="name">
            <a class="template-username" :href="'/market/softTemplate?mobile=' + props.obj.row.name" target="_blank">{{ props.obj.row.name }}</a>
          </template>
          <template slot-scope="props" slot="tel">
            <a class="template-username" :href="'/market/softTemplate?mobile2=' + props.obj.row.tel" target="_blank">{{ props.obj.row.tel }}</a>
          </template>
        </data-table>
      </div>
    </div>
  </div>
</template>
<script>
import { dataTable } from "@/components/common/dataTable";
import { searchBar } from "@/components/common/searchBar";
import { SubNavView } from "@/components/common/subNavView"
import TopTable from "../../layout/TopTable"

import { mapMutations, mapState } from 'vuex'
export default {
  components: {
    dataTable,
    searchBar,
    TopTable,
    SubNavView
  },
  data() {
    return {
      formOption: {accoutOptions:[],typeOptions:[],over_timeOptions:[]},
      filter: {
        page: 1,
        drive:[],
        send:[],
        tab: 0,
        per_page: 10
      },
      value6: '',
      dataTable: {},
      topTableData:{},
      searchIsOpen:true
    }
  },
  created() {
    this.initTable();
    this.searchTable();
    this.getAccount();
    this.initTopTable()
  },
  methods: {
    ...mapMutations(['closeLoading']),
    exportFile() {
      alert('导出')
    },

    initTable() {

      this.dataTable = {
        tr: [{
            id: '1',
            label: '客户姓名',
            prop: 'name',
            show: 'template',
            className: 'name'
          },
          {
            id: '2',
            label: '客户电话',
            show: 'template',
            prop: 'tel'
          },
          {
            id: '3',
            label: '预约车型',
            prop: 'style'
          },
          {
            id: '4',
            label: '发起预约时间',
            prop: 'addtime'
          },
          {
            id: '7',
            label: '到店时间',
            prop: 'confirm_at'
          },
          {
            id: '8',
            label: '试驾时间',
            prop: 'drive_at',
            minWidth: '150'
          },
          {
            id: '9',
            label: '智能试驾',
            prop: 'lincense_info',
            minWidth: '150'
          },
          {
            id: '10',
            label: '销售顾问',
            prop: 'advisor_name'
          }, {
            id: '11',
            label: '处理时长',
            prop: 'when_long'
          },
          {
            id: '12',
            label: '状态',
            prop: 'statusText'
          }
        ],
        data: [],
        page: {},
        hasSelect: true, //是否有复选框
        hasExpand: false, //是否有收缩功能
        hasFirstPagination: true, //是否有第一条分页条
        hasOperation: true,
        search: {
          show: true,
          url: 'crownpin.shijia', //快捷搜索的方法名称
          width: '260', //快捷搜索输入框宽度
          placeholder: '客户名称、手机号', //快捷搜索输入框提示文字
          displayCol: ['name', 'tel'] //弹出需要显示的列
        },
        operation: { // 操作功能
          label: '操作', // 操作列的行首文字
          width: '80', // 操作列的宽度
          className: 'text-center', // 操作列的class名
          data: [ // 操作列数据
            {
              label: '查看', // 按钮文字
              Fun: 'handleSee', // 点击按钮后触发的父组件事件
              size: 'mini', // 按钮大小
              icon: '', //图标
              type: 'primary',
              id: '1' // 按钮循环组件的key值
            }
          ]
        }

      }
    },
    handleSelectionChange() {},
    searchIshidden(){
      this.searchIsOpen = !this.searchIsOpen
    },
    //获取菜单列表
    getAccount() {
      this.$fetch.common.getAccount({
        all: 1,
        roleId: '6,7,22',
        unbind: '9'
      }).then((res) => {
        this.formOption.accoutOptions = res.data.list.data;
        this.closeLoading(); //关闭加载中
      }).catch((err) => {
        this.closeLoading();
      })
    },
    //搜索回调
    find() {
      //时间参数处理
      this.filter.drive_start_at=this.filter.drive[0];
      this.filter.drive_end_at=this.filter.drive[1];
       this.filter.start_at=this.filter.send[0];
      this.filter.end_at=this.filter.send[1];
      this.searchTable()
    },
    //清除搜索条件
    clear() {
      this.filter = {page: 1,
        drive:[],
        send:[],
        tab: 0,
        per_page: 10};
      this.searchTable()
    },
    // handleSync(){
    // },
    /**
     * @param OBJECT [参数]
     * parma.searchData OBJECT 快捷搜索返回结果
     */
    searchTable(parma) {
      if (parma && parma.searchData) {
        this.dataTable.data = [parma.searchData];
      } else {
        Object.assign(this.filter, parma)
        this.$fetch.crownpin.shijia(this.filter).then((res) => {
          this.closeLoading(); //关闭加载中
          this.dataTable.data = res.data.list.data;//表格所需数据
          this.dataTable.page = res.data.list.page;//表格所需数据
          this.topTableData =res.data.tabs
          this.formOption.typeOptions=res.data.search.type.enum;//下拉列表智能试驾列表
          this.formOption.over_timeOptions=res.data.search.over_time.enum;//下拉列表是否超时列表
        }).catch((err) => {
          this.closeLoading();
        })
      }
    },
    initTopTable(){
      this.$fetch.crownpin.shijia(this.filter).then((res) => {
          //this.closeLoading(); //关闭加载中
          //this.dataTable.data = res.data.list.data;//表格所需数据
          //this.dataTable.page = res.data.list.page;//表格所需数据
          this.topTableData =res.data.tabs
         // this.formOption.typeOptions=res.data.search.type.enum;//下拉列表智能试驾列表
         // this.formOption.over_timeOptions=res.data.search.over_time.enum;//下拉列表是否超时列表
        }).catch((err) => {
          //this.closeLoading();
        })
    },
    /*
    @param idx Number 表下标
    row Object 当前行数据
    id String 行ID
     */
    handleSee(idx, row, id) {
      alert(idx)
    }
  },
  computed: {
    ...mapState(['userInfo']),
  }
}

</script>
<style lang="scss" scoped>
.crownpin-top {
  font-size: 14px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .05);
  margin: 0 30px 20px;
  height: 50px;
  line-height: 50px;
  padding-right: 15px;
}
.searchClose{
  padding:0 20px 20px;
}
.searchClose ul li{

    font-size:14px;
    border:1px solid #d3d8db;
    list-style:none;
    display:inline;
    padding: 10px;
    margin-right:15px;
}
</style>
