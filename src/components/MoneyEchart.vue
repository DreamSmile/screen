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
        },
        legend: {
          data: ["本期", "同期"],
          textStyle: {
            //图例文字的样式
            color: "#8a9fd0",
            fontSize: 16,
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "租金",
              "水电费",
              "工资",
              "税费",
              "固定资产摊销",
              "装修费用摊销",
            ],
            axisLabel: {
              show: true,
              interval: 0, //数据太多时不要隐藏横轴数据
              textStyle: {
                color: "#8a9fd0", //更改坐标轴文字颜色
                fontSize: 12, //更改坐标轴文字大小
              },
              formatter: function (params) {
                //限制长度过长换行
                let newParamsName = "";
                let paramsNameNumber = params.length;
                let provideNumber = 6; //一行显示几个字
                let rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                  for (let p = 0; p < rowNumber; p++) {
                    let tempStr = "";
                    let start = p * provideNumber;
                    let end = start + provideNumber;
                    if (p == rowNumber - 1) {
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;
                  }
                } else {
                  newParamsName = params;
                }
                return newParamsName;
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "金额(万元)",
            min: 0,
            max: 5,
            interval: 1,
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#232f4e"],
                width: 1,
                type: "solid",
              },
            },
          },
        ],
        series: [
          {
            name: "本期",
            type: "bar",
            data: [2.0, 1.9, 4.0, 3.2, 2.6, 0.7],
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
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
                      color: "#3e68ff", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#3ec2ff", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
          {
            name: "同期",
            type: "bar",
            barGap: "0%", //柱状图贴紧
            data: [0.6, 3.9, 1.0, 2.4, 2.7, 2.7],
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
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
                      color: "#294e82", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#294e82", // 100% 处的颜色
                    },
                  ],
                  false
                ),
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
