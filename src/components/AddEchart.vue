<template>
  <div class="my_echert" id="my_echart">
  </div>
</template>
<script>
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { LineChart, BarChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { TooltipComponent, LegendComponent } from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
  TooltipComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
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
          // "同期专卖店",
          // "同期商场",
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
            axisPointer: {
              type: "shadow",
            },
            axisLine: {
              lineStyle: {
                color: "#8a9fd0", //横轴颜色
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "店效",
            min: 0,
            max: 50,
            interval: 10,
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#232f4e"],
                width: 1,
                type: "solid",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#8a9fd0", //横轴颜色
              },
            },
          },
          {
            type: "value",
            name: "增长率",
            min: 0,
            max: 50,
            interval: 10,
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#232f4e"],
                width: 1,
                type: "solid",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#8a9fd0", //横轴颜色
              },
            },
          },
        ],
        series: [
          {
            name: "本期专卖店",
            type: "bar",
            data: [20.0, 40.9, 17.0, 23.2, 25.6, 20.7],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#399aff", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#68c8ff", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
          {
            name: "本期商场",
            type: "bar",
            data: [20.6, 5.9, 9.0, 26.4, 28.7, 40.7],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#37bbaf", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#9aeba6", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
          {
            name: "同店增长",
            type: "line",
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 40.5, 6.3, 10.2, 40.2],
            itemStyle: {
              normal: {
                color: "#ffd859",
              },
            },
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
