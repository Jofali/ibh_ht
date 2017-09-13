<template>
<div class="sort-wrap">
  <el-row class="content-nav">
    <h2>
      <i class="el-icon-menu"></i>
      类型管理
    </h2>
    <el-col :span="16">
      <el-button type="success" @click="dialog= true">
        <i class="el-icon-plus"></i>
        新增类型
      </el-button>
      <el-dialog title="新增类型" :visible.sync="dialog">
        <el-form :model="form">
          <el-form-item label="类别名称">
            <el-input v-model="form.TypeName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="form.Note" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="创建者">
            <el-input v-model="form.CreateUserId" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog = false">取 消</el-button>
          <el-button type="primary" @click="addSort">确 定</el-button>
        </div>
      </el-dialog>
    </el-col>
    <el-col :span="8">
      <el-input
        placeholder="搜索"
        icon="search"
        v-model="search"
        :on-icon-click="sortSearch">
      </el-input>
    </el-col>
  </el-row>
  <el-table
    :data="this.$store.state.sortTable"
    height="250"
    style="width: 95%;margin: 0 auto;">
    <el-table-column
      prop="AtId"
      label="类别Id">
    </el-table-column>
    <el-table-column
      prop="TypeName"
      label="类别名">
    </el-table-column>
    <el-table-column
      prop="Note"
      label="描述">
    </el-table-column>
    <el-table-column
      label="上/下架">
        <template scope="scope">
          <el-switch
            v-model="scope.row.Usable"
            on-color="#13ce66"
            off-color="#ff4949"
            on-text="上架"
            off-text="下架"
            @change="editUsable(scope.$index)">
          </el-switch>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column
      prop="CreateDate"
      sortable
      label="创建时间">
    </el-table-column>
    <el-table-column
      prop="CreateUserName"
      label="创建者">
    </el-table-column>
    <el-table-column
        label="操作"
        width="180">
      <template scope="scope">
        <el-button
          @click="editState(scope.$index)"
          size="small">
          <i class="el-icon-edit"></i>
          编辑
        </el-button>
        <el-button
          @click.native.prevent="deleteSort(scope.$index)"
          type="danger"
          size="small">
          <i class="el-icon-delete2"></i>
          删除
        </el-button>
        <el-dialog title="修改类型" :visible.sync="edit">
          <el-form :model="scope.row.editForm">
            <el-form-item label="类别名称">
              <el-input v-model="editForm.TypeName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="描述">
              <el-input v-model="editForm.Note" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="edit = false">取 消</el-button>
            <el-button type="primary" @click="editTable">确 定</el-button>
          </div>
        </el-dialog>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'table1',
  data () {
    return {
      search: '',
      form: {
        TypeName: '',
        Note: '',
        CreateUserId: ''
      },
      dialog: false,
      edit: false,
      editForm: {}
    }
  },
  created: function () {
    this.updataSort()
  },
  methods: {
    sortSearch () {
      alert('搜索')
    },
    updataSort () {
      const self = this
      self.$axios.get('Article/Type').then((response) => {
        self.$store.commit('UPDATA_SORTTABLE', response.data)
        for (let i = 0; i < self.$store.state.sortTable.length; i++) {
          let arr = self.$store.state.sortTable[i].CreateDate.substring(0, 10)
          self.$store.commit('UPDATA_SORTTABLEDATE', {i, arr})
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    addSort () {
      const self = this
      self.$axios.post('Article/AddType', self.form).then((response) => {
        if (response.data) {
          self.dialog = false
          self.$message({
            message: '新增成功',
            type: 'success'
          })
          self.updataSort()
        } else {
          self.$message.error('新增失败')
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    deleteSort (sortId) {
      const self = this
      const userId = self.$store.state.sortTable[sortId].AtId
      self.$confirm('此操作将永久删除该分类,是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        self.$axios.get('Article/DelType?AtId=' + userId).then((response) => {
          if (response.data) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          } else {
            console.log(response.data)
          }
        }).catch((error) => {
          console.log(error)
        })
        self.updataSort()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    editState (index) {
      this.editForm = this.$store.state.sortTable[index]
      this.edit = true
    },
    editTable () {
      const self = this
      self.$axios.get('Article/MdfType?AtId=' + self.editForm.AtId + '&TypeName=' + self.editForm.TypeName + '&Note=' + self.editForm.Note).then((response) => {
        if (response.data) {
          self.$message({
            message: '修改成功',
            type: 'success'
          })
          self.edit = false
        } else {
          self.$message({
            message: '修改失败',
            type: 'warning'
          })
        }
        this.updataSort()
      }).catch((error) => {
        console.log(error)
      })
    },
    editUsable (index) {
      const self = this
      const form = this.$store.state.sortTable[index]
      console.log(this.$store.state.sortTable[index])
      self.$axios.get('Article/TypeUsable?AtId=' + form.AtId + '&Usable=' + form.Usable).then((response) => {
        if (response.data) {
          self.$message({
            message: '修改成功',
            type: 'success'
          })
        } else {
          self.$message({
            message: '修改失败',
            type: 'warning'
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>