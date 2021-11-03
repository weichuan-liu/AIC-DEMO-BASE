<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 3000

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
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: '直配菜', max: 6000 },
            { name: '锅底', max: 2000 },
            { name: '肉类', max: 3000 },
            { name: '自备菜', max: 1000 },
            { name: '小吃', max: 1000 },
            { name: '酒水饮料', max: 2000 }
          ]
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['历史平均销售', '预计销售', '实际销售']
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [5063, 1677, 2739, 670, 722, 1782],
              name: '历史平均销售'
            },
            {
              value: [4542, 1656, 2347, 678, 656, 1564],
              name: '预计销售'
            },
            {
              value: [3942, 1245, 1978, 1014, 527, 1510],
              name: '实际销售'
            }
          ],
          animationDuration: animationDuration
        }]
      })
    }
  }
}
</script>
