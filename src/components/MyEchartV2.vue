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
        title: { text: options.title, textStyle: { color: "#8a9fd0" } },
        xAxis: {
          type: "category",
          data: options.xAxis,
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: "#8a9fd0", //横轴颜色
            },
          },
          axisLabel: {
            show: true,
            interval: 0, //数据太多时不要隐藏横轴数据
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#8a9fd0", //纵轴颜色
            },
          },
        },
        legend: {
          data: ["本期", "同期"],
        },
        series: [
          {
            data: options.num,
            type: options.type,
            areaStyle: {
              color: {
                //线条线性渐变
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(1, 255, 255, 0.8)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(1, 255, 255,0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          
          {
            name: "同期",
            type: "line",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "本期",
            type: "line",
            emphasis: {
              focus: "series",
            },
          },
        ],
        // tooltip: {
        //   trigger: "item",
        //   backgroundColor: "rgba(0,0,0,0.5)", //设置背景图片 rgba格式
        //   color: "black",
        //   textStyle: {
        //     color: "#fff", //设置文字颜色
        //   },
        // },
      };
      //   创建
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