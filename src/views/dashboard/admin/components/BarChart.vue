<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '南京一店',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [3046, 3051, 3201, 3528, 3574, 4592, 3261],
          animationDuration
        }, {
          name: '南京二店',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [4137, 3162, 3462, 3638, 3859, 4502, 3864],
          animationDuration
        }, {
          name: '南京三店',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [4387, 3684, 3287, 3445, 4215, 3698, 4057],
          animationDuration
        }]
      })
    }
  }
}
</script>
