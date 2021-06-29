<template>
  <div class="my_echert" id="my_echart">
  </div>
</template>
<script>
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { LineChart, BarChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  LegendComponent,
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  DataZoomComponent,
  LegendComponent,
]);
export default {
  methods: {
    initEchart(options) {
      let getchart = echarts.init(this.$el);
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          data: ["本期专卖店", "本期商场", "同店增长"],
          textStyle: {
            //图例文字的样式
            color: "#7e91bf",
            fontSize: 16,
          },
        },
        xAxis: [
          {
            type: "category",
            data: [
              "全部",
              "领航一部",
              "领航二部",
              "领航三部",
              "广东大区",
              "零售客户",
            ],
            axisLine: {
              lineStyle: {
                color: "#8a9fd0", //纵轴颜色
              },
            },
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "店效",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value}",
            },
            axisLine: {
              lineStyle: {
                color: "#8a9fd0", //纵轴颜色
              },
            },
          },
          {
            type: "value",
            name: "同店增长",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "本期专卖店",
            type: "bar",
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
          },
          {
            name: "同期专卖店",
            type: "bar",
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
          },
          {
            name: "同店增长",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
        ],
      };
      getchart.setOption(option);
    },
  },
};
</script>
<style scoped lang="less">
#my_echart {
  width: 100%;
  height: 100%;
}
</style>
