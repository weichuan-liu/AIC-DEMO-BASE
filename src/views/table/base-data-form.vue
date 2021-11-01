<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="店面名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="店面区域">
        <el-select v-model="form.region" placeholder="请选择区域">
          <el-option label="朝阳区" value="chaoyang" />
          <el-option label="海淀区" value="haidian" />
          <el-option label="东城区" value="dongcheng" />
          <el-option label="西城区" value="xicheng" />
          <el-option label="丰台区" value="fengtai" />
        </el-select>
      </el-form-item>
      <el-form-item label="生效时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="是否立刻生效">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="商圈类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="居民区" name="type" />
          <el-checkbox label="热门商圈" name="type" />
          <el-checkbox label="办公通勤区" name="type" />
          <el-checkbox label="特大景区及特殊店面类型" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="门店类型">
        <el-radio-group v-model="form.resource">
          <el-radio label="小店（小于60桌）" />
          <el-radio label="中店（60桌-75桌）" />
          <el-radio label="大店（大于75桌）" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
// import Sortable from 'sortablejs'

export default {
  name: 'BaseDataForm',
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({ path: '/table/inline-edit-table' })
    }
  }
}
</script>

<style>
.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: #42b983!important;
}
</style>

<style scoped>
.icon-star{
  margin-right:2px;
}
.drag-handler{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.show-d{
  margin-top: 15px;
}
</style>
