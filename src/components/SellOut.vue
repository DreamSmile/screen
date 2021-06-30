<template>
  <div class="money_echert_el">
  </div>
</template>
<script>
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from "echarts/charts";
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
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["本期", "同期"],
          textStyle: {
            //图例文字的样式
            color: "#8a9fd0",
            fontSize: 16,
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["2021-05", "2021-06", "2021-06", "2021-06", "2021-06"],
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
            name: "售罄率%",
            min: 0,
            max: 100,
            interval: 20,
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
            name: "本期",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [10, 30, 60, 30, 50],
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default",
                  //渐变色实现
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1, //变化方向
                    //渐变色
                    [
                      { offset: 0, color: "rgba( 214,119,138, 0.4)" },
                      { offset: 1, color: "transparent" },
                    ]
                  ),
                },
                lineStyle: {
                  //线的颜色
                  color: "#d6778a",
                },
              },
              emphasis: {
                // 鼠标经过时：
                symbol: "circle",
                borderWidth: 2,
                borderColor: "#fff",
                color: "#d6778a",
              },
            },
          },
          {
            name: "同期",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [30, 40, 11, 27, 10],
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default",
                  //渐变色实现
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1, //变化方向
                    //渐变色
                    [
                      { offset: 0, color: "rgba( 48,197,255, 0.4)" },
                      { offset: 1, color: "transparent" },
                    ]
                  ),
                },
                lineStyle: {
                  //线的颜色
                  color: "#30c5ff",
                },
              },
              emphasis: {
                // 鼠标经过时：
                symbol: "circle",
                borderWidth: 2,
                borderColor: "#fff",
                color: "#30c5ff",
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
.money_echert_el {
  width: 100%;
  height: 100%;
}
</style>
