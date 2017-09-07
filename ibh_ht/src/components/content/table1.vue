<template>
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
        label="类型名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="类型描述">
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
</template>

<script>
export default {
  name: 'table1',
  data () {
    return {
      tableData: [
        {
          date: '------',
          name: '热门',
          title: '评论数超过了XX',
          status: '上架',
          stop: true
        },
        {
          date: '------',
          name: '精华',
          title: '李根觉得很不错',
          status: '上架',
          stop: false
        },
        {
          date: '------',
          name: '最新',
          title: '按发布时间',
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

<style>

</style>