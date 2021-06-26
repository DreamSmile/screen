<template>
  <div class="my_echert" id="my_echart">
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
]);
export default {
  props: {
    sOption: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {},
  methods: {
    //   xAxix横轴，yAxis纵轴
    initEchart(options) {
      //   console.log("子组件方法");

      let getchart = echarts.init(this.$el);
      let option = {
        xAxis: {
          type: "category",
          data: options.xAxis,
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            show: true,
            interval: 0, //数据太多时不要隐藏横轴数据
            textStyle: {
              color: "#fff", //更改坐标轴文字颜色
              fontSize: 12, //更改坐标轴文字大小
            },
            formatter: function (params) {
              //限制长度过长换行
              let newParamsName = "";
              let paramsNameNumber = params.length;
              let provideNumber = 4; //一行显示几个字
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
        yAxis: {
          type: "value",
          splitLine: {
            //设置网格线颜色
            show: true,
            lineStyle: {
              color: ["#1d2d35"],
              width: 1,
              type: "solid",
            },
          },
        },
        series: [
          {
            data: options.num,
            type: "bar",
            // barWidth: 20,
            barGap: "16%" /*多个并排柱子设置柱子之间的间距*/,
            barCategoryGap: "50%",
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
                      color: "#0c242f", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#38b6b4", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
        aria: {
          label: {
            data: {
              maxCount: 6,
            },
          },
        },
        // dataZoom: [
        //   {
        //     type: "slider",
        //     show: true,
        //     start: 0,
        //     end: 6,
        //     handleSize: 8,
        //   },
        //   {
        //     type: "inside",
        //     start: 0,
        //     end: 6,
        //   },
        // ],

        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0.5)", //设置背景图片 rgba格式
          color: "black",
          //   borderWidth: "1", //边框宽度设置1
          //   borderColor: "gray", //设置边框颜色
          textStyle: {
            color: "#fff", //设置文字颜色
          },
        },
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