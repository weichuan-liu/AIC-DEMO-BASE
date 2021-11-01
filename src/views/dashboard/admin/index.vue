<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'

const lineChartData = {
  newVisitis: {
    expectedData: [34065, 27161, 31098, 28179, 31580, 35088, 35395, 35452, 33353, 34550, 33903, 34896],
    actualData: [33042, 28085, 32889, 28588, 32796, 34668, 36615, 34242, 32436, 35567, 34443, 36215]
  },
  messages: {
    expectedData: [9837, 9163, 10374, 9634, 10120, 10768, 11786, 11031, 10998, 11155, 10955, 12355],
    actualData: [10297, 8829, 10708, 9278, 10572, 11146, 11473, 10706, 10684, 11499, 11321, 11975]
  },
  purchases: {
    expectedData: [3829329, 3201887, 3409830, 3203918, 4029103, 4099837, 4102847, 3901873, 3809183, 4003927, 4209387, 4297481],
    actualData: [3938435, 3260449, 3899636, 3333799, 3769993, 3966167, 4137997, 3805435, 3736740, 4079238, 4045869, 4307412]
  },
  shoppings: {
    expectedData: [118079.8, 118881.8, 105534.8, 125556, 135092.8, 126609, 120039.96, 116392.9, 111942, 122935, 121678, 92499],
    actualData: [113746.28, 124304, 116307, 131867, 159232, 150812.8, 116646, 112464.9, 132164, 134177.8, 141137.5, 138628]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    // GithubCorner, remove Github corner
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
