<template>
  <div
    v-loading="algorithmResultLoading"
    class="app-container"
    element-loading-text="计算中"
  >
    <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
    <el-button type="primary" @click="onSubmit">运行分析</el-button>
    <el-tag style="width: 100%;margin-top:20px;" size="medium">部分数据预览</el-tag>
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'

export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      algorithmResultLoading: false
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results.slice(0, 5) // only show first 5 rows
      this.tableHeader = header
    },
    onSubmit() {
      this.algorithmResultLoading = true
      setTimeout(() => { this.algorithmResultLoading = false }, 5000)
      setTimeout(() => { this.$router.push({ path: '/table/complex-table' }) }, 5000) // setTimeout is async, this is a trick, callback() should be the formal way
      // this.$router.push({ path: '/table/complex-table' })
    }
  }
}
</script>
