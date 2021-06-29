<template>
  <div class="LHEchart">
    <div class="container" :style="{transform: 'scale('+rate+') translate(-50%, -50%)'}">
      <header>
        <div class="btns">
          <button class="h_btn btn_sel">经营数据</button>
          <button class="h_btn">销售情况</button>
          <button class="h_btn">会员情况</button>
        </div>
        <div class="h_title">
          <h1>领航营销数据分析</h1>
          <p>{{nowTime}} 周一</p>
        </div>
        <div class="h_time">
          <span class="times time_Sel">近7天</span>
          <span class="times">近30天</span>
          <div class="date_picker">时间控件</div>
        </div>
      </header>
      <!-- 售空率 -->
      <div class="content">
        <h2 class="con_title">售空率</h2>
        <div class="content_box">
          <!-- 上一 -->
          <div class="box">
            <my-echart-v-2 ref="skEchart"></my-echart-v-2>
          </div>
          <div class="box tables">
            <div class="table_title">
              <span>客户别</span><span>贸易公司数</span><span>门店数</span><span>售空率</span>
            </div>
            <div class="table_list">
              <div class="rows" v-for="(item,i) in 7" :key="i">
                <span>领航管理中心</span>
                <span>256</span>
                <span>296</span>
                <span>51.0%</span>
              </div>
            </div>
          </div>
          <div class="box ranking">
            <div class="list_title">
              <span>排名</span>
              <span>贸易公司</span>
              <span>售空率</span>
            </div>
            <div class="list_rows" v-for="(item ,i) in 6" :key="i">
              <div class="list_info">
                <img :src="$imgsrc+'user.png'" />
                <span class="name">福建润达</span>
                <span class="num">66.4%</span>
              </div>
              <div class="line">
                <div class="scale" :style="{width:10*i+'%'}"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 下三个图表 -->
      <div class="content_bottom">
        <div class="box shop_add">
          <div class="title">店效及同点增长</div>
          <div class="content_echart">
            <add-echart ref="addEchart"></add-echart>
          </div>
        </div>
        <div class="box shop_new">
          <div class="title">新开店进展</div>
          <div class="summary">
            <div class="num_box">
              <p>今年总店数</p>
              <div class="nums">
                <span v-for="(item,i) in 6" :key="i">{{i}}</span>
              </div>
            </div>
            <div class="num_box">
              <p>今年总店数</p>
              <div class="nums">
                <span v-for="(item,i) in 6" :key="i">{{i}}</span>
              </div>
            </div>
          </div>
          <div class="info">
            <div class="rows" v-for="(item,i) in 8" :key="i">
              <span class="name">领航{{i}}</span>
              <div class="line">
                <div class="scale" :style="{width:i*10+'%'}"></div>
              </div>
              <span class="ratio">{{i*10+'%'}}</span>
              <span class="num">125/170</span>
            </div>
          </div>
        </div>
        <div class="box shop_money">
          <div class="content_echart">
            <my-echert ref="moneyEchart"></my-echert>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
@import "../assets/css/common.less";
.LHEchart {
  //   background-color: #677296;
  background-color: #070e25;

  height: 100%;
  width: 100%;
  .container {
    transform-origin: 0 0;
    transition: 0.3s;
    width: 1920px;
    height: 1080px;
    position: absolute;
    left: 50%;
    top: 50%;
    color: @lh-font-color;
    header {
      height: 112px;
      width: 100%;
      padding: 0 40px 0 40px;
      margin-top: 20px;
      box-sizing: border-box;
      //   border-bottom: 1px solid #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btns {
        text-align: left;
        .h_btn {
          font-weight: 600;
          box-sizing: border-box;
          padding: 0px 36px;
          background-color: transparent;
          color: @lh-font-color;
          cursor: pointer;
        }
        .btn_sel {
          color: #fff;
        }
      }
      .h_title {
        width: 660px;
        text-align: center;
        margin-top: 22px;
        box-sizing: border-box;

        h1 {
          font-size: 34px;
          font-weight: 600;
        }
        p {
          font-size: 18px;
          line-height: 42px;
        }
      }
      .h_time {
        text-align: right;
        width: 592px;
        vertical-align: middle;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .times {
          font-size: 18px;
          color: #bcd0e9;
          display: inline-block;
          vertical-align: middle;
        }
        .time_Sel {
          font-size: 22px;
          font-weight: 500;
          color: #fff;
          position: relative;
        }
        .time_Sel:after {
          content: "";
          height: 6px;
          width: 45px;
          background-color: #67ccff;
          position: absolute;
          bottom: -17px;
          left: 0;
        }
        .date_picker {
          width: 400px;
          height: 64px;
          display: inline-block;
          text-align: center;
          line-height: 64px;
        }
        .date_picker:after {
          content: "";
          display: block;
          visibility: hidden;
          height: 0;
          clear: both;
        }
      }
    }
    // 上三个表格
    .content {
      border: 1px solid @lh-border-color;
      margin: 0 40px;
      height: 432px;
      box-sizing: border-box;
      padding: 14px 30px;
      margin-bottom: 25px;
      .con_title {
        color: #5ad2ff;
        font-size: 24px;
        font-weight: 500;
      }
      .content_box {
        width: 100%;
        height: 366px;
        display: flex;
        justify-content: space-between;
        .box {
          width: 575px;
          height: 100%;
          background-color: #151e37;
        }
        .tables {
          padding: 16px 18px;
          box-sizing: border-box;
          color: @lh-font-color;
          .table_title {
            border: 1px solid #4d87a9;
            span {
              box-sizing: border-box;
              font-size: 17px;
              font-weight: 600;
              display: inline-block;
              text-align: center;
              height: 42px;
              line-height: 42px;
              -webkit-box-shadow: inset 0 0 30px #113051;
              -moz-box-shadow: inset 0 0 30px #113051;
              box-shadow: inset 0 0 30px #113051;
            }
            span:nth-child(1) {
              width: 172px;
              border-right: 1px solid @lh-line-color;
            }
            span:nth-child(2) {
              width: 135px;
              border-right: 1px solid @lh-line-color;
            }
            span:nth-child(3) {
              width: 104px;
              border-right: 1px solid @lh-line-color;
            }
            span:nth-child(4) {
              width: 124px;
            }
          }
          .table_list {
            .rows {
              height: 42px;
              line-height: 42px;
              box-sizing: border-box;

              span {
                display: inline-block;
                text-align: center;
                box-sizing: border-box;
                border: 1px solid @lh-line-color;
              }
              span:nth-child(1) {
                width: 172px;
              }
              span:nth-child(2) {
                width: 135px;
              }
              span:nth-child(3) {
                width: 104px;
              }
              span:nth-child(4) {
                width: 124px;
              }
            }
          }
        }
        .ranking {
          .list_title {
            border: 1px solid #4d87a9;
            display: flex;
            justify-content: space-between;
            span {
              box-sizing: border-box;
              font-size: 17px;
              font-weight: 600;
              text-align: center;
              height: 42px;
              line-height: 42px;
              -webkit-box-shadow: inset 0 0 30px #113051;
              -moz-box-shadow: inset 0 0 30px #113051;
              box-shadow: inset 0 0 30px #113051;
            }
            span:nth-child(1) {
              width: 83px;
            }
            span:nth-child(2) {
              flex: 1;
              text-align: left;
            }
            span:nth-child(3) {
              width: 104px;
            }
          }
          .list_rows {
            height: 52px;
            line-height: 52px;
            .list_info {
              display: flex;
              justify-content: space-between;
              align-items: center;
              img {
                width: 25px;
                height: 25px;
                margin: 0 30px;
              }
              .name {
                color: @lh-font-color;
                font-size: 17px;
                flex: 1;
              }
              .num {
                width: 104px;
                text-align: center;
              }
              
            }
            .line {
              width: calc(100% - 60px);
              height: 6px;
              border-radius: 8px;
              background-color: #5f6686;
              margin: 0 30px;
              .scale {
                height: 100%;
                border-radius: 8px;
                background: linear-gradient(to right, #c34f83, #da729d);
                background: -moz-linear-gradient(to right, #c34f83, #da729d);
              }
            }
          }
        }
      }
    }
    // 下三个图表
    .content_bottom {
      box-sizing: border-box;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      .box {
        height: 466px;
        border: 1px solid @lh-border-color;
        -webkit-box-shadow: inset 0 0 30px #113051;
        -moz-box-shadow: inset 0 0 30px #113051;
        box-shadow: inset 0 0 30px #113051;
        padding: 12px 32px;
        box-sizing: border-box;
        .title {
          color: #55c6f1;
          font-weight: 500px;
          font-size: 24px;
        }
        .content_echart {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }
      }
      .shop_add {
        width: 666px;
      }
      .shop_new {
        width: 560px;
        .summary {
          margin-top: 16px;
          .num_box {
            display: inline-block;
            p {
              line-height: 48px;
            }
            .nums {
              span {
                font-size: 30px;
                font-weight: 600;
                color: #d8c276;
                border: 1px solid #4977bc;
                height: 44px;
                width: 34px;
                line-height: 44px;
                display: inline-block;
                text-align: center;
              }
            }
          }
          .num_box:last-child {
            float: right;
          }
          .num_box:last-child::after {
            clear: both;
            visibility: hidden;
            height: 0;
            display: block;
          }
        }
        .info {
          margin-top: 15px;
          .rows {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 36px;
            line-height: 36px;
            .name {
              font-size: 17px;
              color: #bbcdf0;
              margin-right: 10px;
              width: 70px;
            }
            .line {
              height: 10px;
              border-radius: 8px;
              width: 292px;
              background-color: #5f6686;

              .scale {
                height: 100%;
                background: linear-gradient(to right, #b775cf, #50d7ff);
                background: -moz-linear-gradient(to right, #c34f83, #50d7ff);
                border-radius: 8px;
              }
            }
            .ratio {
              font-size: 16px;
              color: #50d4ff;
              margin: 0 14px 0 8px;
            }
            .num {
              color: #bbcdf0;
              font-size: 16px;
            }
          }
        }
      }
      .shop_money {
        width: 560px;
      }
    }
  }
}
</style>
<script>
import AddEchart from "../components/AddEchart.vue";
import MyEchartV2 from "../components/MyEchartV2.vue";
import MyEchert from "../components/MyEchert.vue";
export default {
  components: { MyEchartV2, MyEchert, AddEchart },
  data() {
    return {
      rate: 1,
      nowTime: null,
      skOption: {
        title: "售空率%",
        type: "line",
        legend: ["本期", "同期"],
        xAxis: ["2021/01", "2021/02", "2021/03", "2021/04", "2021/05"],
        num: [10, 30, 10, 60, 22],
        yAxis: [10, 30, 50, 60, 70],
      },
      moneyOptions: {
        xAxis: [
          "租金",
          "水电",
          "工资",
          "税费",
          "固定资产支出",
          "装修费用",
          "租金",
          "水电",
          "工资",
          "税费",
        ],
        num: [150, 10, 200, 70, 150, 10, 200, 70, 0, 150],
      },
    };
  },
  mounted() {
    this.screen();
    this.$refs.skEchart.initEchart(this.skOption);
    this.$refs.moneyEchart.initEchart(this.moneyOptions);
    this.$refs.addEchart.initEchart(this.skOption);

    // 在事件被触发时，延迟n秒后再触发回调函数，如果n秒内又触发了事件，则会重新开始计算时间（n秒内最后一次生效）
    window.addEventListener(
      "resize",
      (() => {
        let timer; //使用闭包，缓存变量
        return () => {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            this.screen();
          }, 500);
        };
      })()
    ); //此处()作用 - 立即调用return后面函数，形成闭包
    this.gitNowTime = setInterval(() => {
      this.nowTime = this.getDateString(new Date()); // 修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.gitNowTime) {
      clearInterval(this.gitNowTime); // 在Vue实例销毁前，清除定时器
    }
  },

  methods: {
    // 获得实时时间
    getDateString(date) {
      var year = date.getFullYear().toString().padStart(4, "0");
      var month = (date.getMonth() + 1).toString().padStart(2, "0");
      var day = date.getDate().toString().padStart(2, "0");

      var hour = date.getHours().toString().padStart(2, "0");
      var minute = date.getMinutes().toString().padStart(2, "0");
      var second = date.getSeconds().toString().padStart(2, "0");
      return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
    },
    // 界面缩放，界面缩放
    screen() {
      const heightRatio = Number(document.documentElement.clientHeight / 1080);
      const widthRatio = Number(document.documentElement.clientWidth / 1920);
      var ratio =
        document.documentElement.clientWidth /
        document.documentElement.clientHeight;
      if (ratio < 1920 / 1080) {
        this.rate = widthRatio;
      } else {
        this.rate = heightRatio;
      }
    },
  },
};
</script>

