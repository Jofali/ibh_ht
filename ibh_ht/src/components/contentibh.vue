<template>
  <div class="content">
    <el-table
      :data="tableData"
      height="250"
      style="width: 100%">
      <el-table-column
        prop="date"
        :label="ccc"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="作者"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        label="状态">
          <template scope="scope">
            <el-switch
              v-model="scope.row.status"
              :disabled="scope.row.stop"
              on-color="#13ce66"
              off-color="#ff4949"
              on-value="上架"
              on-text="上架"
              off-value="下架"
              off-text="下架">
            </el-switch>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          size="small">
          <i class="el-icon-edit"></i>
          编辑
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="danger"
          size="small">
          <i class="el-icon-delete2"></i>
          删除
        </el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          title: '上海市普陀区金沙江路 1518 弄',
          status: '上架',
          stop: true
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          title: '上海市普陀区金沙江路 1517 弄',
          status: '下架',
          stop: false
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          title: '上海市普陀区金沙江路 1519 弄',
          status: '上架',
          stop: false
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          title: '上海市普陀区金沙江路 1516 弄',
          status: '上架',
          stop: false
        }
      ],
      ccc: '日期'
    }
  },
  computed: {
    stand: function () {
      return this.data.tableData.status
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    width: 100%;
  }
</style>