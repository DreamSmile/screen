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
          <div class="box"></div>
        </div>
      </div>
      <!-- 下三个图表 -->
      <div class="content_echart">
        <div class="box shop_add">
          <div class="content_echart"></div>
        </div>
        <div class="box shop_new">
          <div class="content_echart"></div>
        </div>
        <div class="box shop_money">
          <div class="content_echart"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
@import "../assets/css/common.less";
.LHEchart {
  background-color: #677296;
  height: 100%;
  width: 100%;
  .container {
    background-color: #070e25;
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
      border-bottom: 1px solid #fff;
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
              //   padding-left: 20px;
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
      }
    }
    // 下三个图表
    .content_echart {
      box-sizing: border-box;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      .box {
        height: 466px;
        border: 1px solid @lh-border-color;

        .content_echart {
          //   background-color: #151e37;
          //   width: calc(100% - 60px);
          //   height: calc(100% - 28px);
          box-sizing: border-box;
          //   margin: 14px 30px;
        }
      }
      .shop_add {
        width: 666px;
      }
      .shop_new {
        width: 560px;
      }
      .shop_money {
        width: 560px;
      }
    }
  }
}
</style>
<script>
import MyEchartV2 from "../components/MyEchartV2.vue";
export default {
  components: { MyEchartV2 },
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
    };
  },
  mounted() {
    this.screen();
    this.$refs.skEchart.initEchart(this.skOption);
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

