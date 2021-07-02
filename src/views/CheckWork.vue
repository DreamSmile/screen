<template>
  <div class="check_work_bg">
    <div class="check_work" :style="{transform: 'scale('+scale+') translate(-50%, -50%)'}">
      <header :style="{backgroundImage:'url('+$imgsrc+'title_bg.png)'}">
        <div class="h_line"><img :src="$imgsrc+'header_line.png'" /></div>
        <div class="h_info">
          <img class="h_logo" :src="$imgsrc+'logo.png'" />
          <div class="h_title">
            <h1>利郎员工考勤监控</h1>
            <h2>LILANZ EMPLOYEE ATTENDANCE MONITORING</h2>
          </div>
          <div class="h_time">
            <p class="date">{{nowDate}} {{NowDay}}</p>
            <p class="time">{{parseInt(nowTime.substring(0,2))>12?'下午':'上午'}} {{nowTime}}</p>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="left_bg">
          <img :src="$imgsrc+'left_border.png'" />
        </div>
        <div class="content">
          <div class="con_el" :style="{backgroundImage:'url('+$imgsrc+'bg.png)'}" v-for="item in showData" :key="item.ryid">
            <div class="face">
              <img :src="$imgsrc+'avatar_border.png'" />
              <div class="user_face" v-lazy:background-image="item.photo"></div>
            </div>
            <div class="user_info">
              <p class="user_name">{{item.cname}}</p>
              <p class="user_work">{{item.deptName}}</p>
            </div>
            <div class="user_time">
              <em>{{item.lostDays!=0?'旷工':'迟到'}}</em>{{item.lostDays!=0?item.lostDays:item.delayTimes}}
              {{item.lostDays!=0?'天':'分'}}
            </div>
          </div>
          <div class="page">
            {{showPage}} / {{allPage}}
          </div>
        </div>
        <div class="right_bg">
          <img :src="$imgsrc+'left_border.png'" />
        </div>
      </div>
      <footer>
        <div class="footer_bg" :style="{backgroundImage:'url('+$imgsrc+'bottom_bg.png)'}">
          <div class="box">
            <p class="name">异常考勤</p>
            <p class="num"><em>{{dataList.length}}</em>人</p>
          </div>
          <div class="box">
            <p class="name">迟到人数</p>
            <p class="num"><em>{{parseInt(dataList.length)-lostUser}}</em>人</p>
          </div>
          <div class="box">
            <p class="name">旷工人数</p>
            <p class="num"><em>{{lostUser}}</em>人</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
// 1：获取到接口数据，使用promise延迟修改showData数据和页码等信息
// 获取到的接口数据存储在dataList，页面的数据使用下标的方式截取dataList展示
// 通过定时器+pr
import { Toast, Lazyload } from "vant";
export default {
  data() {
    return {
      scale: 1,
      dataList: [], //接口返回的所有数据
      showData: [], //界面显示的数据，分页模式
      lostUser: 0, //旷工人数
      showPage: 0, //当前显示的分页数
      allPage: 0,
      nowDate: "----:--:--",
      NowDay: "星期X",
      nowTime: "00:00:00",
      startArrIndex: 0,
      endArrIndex: 0,
    };
  },
  mounted() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      duration: 0,
    });
    let _this = this;
    this.setScale();
    this.getData();
    this.getNowdate = setInterval(() => {
      _this.nowDate = this.getDateString(new Date()); // 获得日期
      _this.NowDay = this.getSunDay(new Date()); //星期
    }, 1000);
    this.getNowTime = setInterval(() => {
      _this.nowTime = this.getTimeString(new Date()); //获得时分秒
    }, 1000);
    window.addEventListener(
      "resize",
      (() => {
        let timer; //使用闭包，缓存变量
        return () => {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            _this.setScale();
          }, 500);
        };
      })()
    ); //此处()作用 - 立即调用return后面函数，形成闭包
  },
  beforeDestroy() {
    if (this.getNowdate) {
      clearInterval(this.getNowdate); // 在Vue实例销毁前，清除定时器
    }
    if (this.getNowTime) {
      clearInterval(this.getNowTime);
    }
  },
  methods: {
    getData() {
      this.$api
        .getCheckWork({
          action: "loadCheckData",
          loadDate: this.getDateString(new Date()),
        })
        .then((res) => {
          if (res.errcode != 0) {
            alert("获取信息错误，原因为：" + res.errmsg);
            return;
          }
          if (res.data.length < 1) {
            alert("今日无迟到人员！");
            return;
          }
          this.clearData(); //先清除
          this.dataList = res.data;
          this.allPage = Math.ceil(parseInt(this.dataList.length) / 16); //总页数
          this.showData = this.dataList.slice(0, 16); //获取到数据的时候就先显示第一页到界面上
          Toast.clear();
          this.setData();
          let arrLater = this.dataList.filter((val) => {
            return Number(val.lostDays) > 0;
          });
          this.lostUser = arrLater.length;
        })
        .catch((err) => {
          alert("连接失败，原因为：" + err);
        });
    },
    async setData() {
      // 每隔三秒更新showData，检测到是最后一页的时候，重新请求一次接口
      if (this.showPage < this.allPage) {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            this.showData = [];
            this.startArrIndex = parseInt(this.showPage) * 16; //当前页面显示的第一个数据在总数据中的index
            this.endArrIndex = this.startArrIndex + 16; //当前页面显示的最后一个数据在总数据中的index
            this.showPage = this.showPage == this.allPage ? 1 : ++this.showPage;
            this.showData = this.dataList.slice(
              this.startArrIndex,
              this.endArrIndex
            );
            resolve();
          }, 10000);
        });
        this.setData();
      } else {
        setTimeout(() => {
          this.getData();
        }, 5000);
      }
    },
    // 获得日期
    getDateString(date) {
      let year = date.getFullYear().toString().padStart(4, "0");
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      let day = date.getDate().toString().padStart(2, "0");
      return `${year}/${month}/${day}`;
    },
    getSunDay(date) {
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      return `${weeks[date.getDay()]}`;
    },
    // 获得时分秒
    getTimeString(date) {
      let hour = date.getHours().toString().padStart(2, "0");
      let minute = date.getMinutes().toString().padStart(2, "0");
      let second = date.getSeconds().toString().padStart(2, "0");
      return `${hour}:${minute}:${second}`;
    },
    // 重新获取数据并赋值之前，先清空
    clearData() {
      this.dataList = [];
      this.showData = [];
      this.showPage = 1; //当前显示的分页数
      this.allPage = 1;
      this.startArrIndex = 0;
      this.endArrIndex = 0;
    },

    // 缩放
    setScale() {
      const heightRatio = Number(document.documentElement.clientHeight / 840);
      const widthRatio = Number(document.documentElement.clientWidth / 1440);
      var ratio =
        document.documentElement.clientWidth /
        document.documentElement.clientHeight;
      if (ratio < 1440 / 840) {
        this.scale = widthRatio;
      } else {
        this.scale = heightRatio;
      }
    },
  },
};
</script>
<style scoped lang="less">
.check_work_bg {
  // background-color: #e2e2e2;
  background-color: #000;
  height: 100%;
  width: 100%;
  .check_work {
    transform-origin: 0 0;
    height: 840px;
    width: 1440px;
    transition: 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #0e1222;
    header {
      width: 100%;
      height: 120px;
      position: relative;
      background-position: center;
      background-size: cover;
      box-sizing: border-box;
      .h_line {
        text-align: center;
        padding-top: 24px;
      }
      .h_info {
        .h_logo {
          position: absolute;
          left: 25px;
          top: 53px;
          img {
            width: 120px;
          }
        }
        .h_title {
          color: #ffedea;
          text-align: center;
          h1 {
            font-size: 30px;
            font-weight: 500;
            margin: 12px 0 12px 0;
          }
          h2 {
            font-size: 12px;
          }
        }
        .h_time {
          position: absolute;
          top: 28px;
          right: 25px;
          color: #fff;
          text-align: center;
          .date {
            font-size: 14px;
          }
          .time {
            font-size: 22px;
            font-weight: 500;
            margin-top: 8px;
          }
        }
      }
    }
    .container {
      height: 656px;
      width: 100%;
      padding: 0 25px;
      box-sizing: border-box;
      position: relative;
      .left_bg {
        height: 100%;
        position: absolute;
        left: 25px;
        top: 0;
        img {
          height: 100%;
        }
      }
      .content {
        // height: 440px;
        height: 457px;
        width: 1300px;
        margin: auto;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        display: flex;
        // justify-content: space-between;//去除这个样式，防止不足4个时样式会错乱、
        flex-wrap: wrap;

        .con_el {
          width: 304px;
          height: 94px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px;
          padding: 0 22px;
          box-sizing: border-box;
          background-position: center;
          background-size: contain;
          .face {
            position: relative;
            img {
              width: 76px;
              height: 76px;
            }
            .user_face {
              position: absolute;
              top: 7px;
              left: 7px;
              width: 62px;
              height: 62px;
              background-position: center;
              background-size: cover;
              transition: all 2s;
              -webkit-transition: all 2s; /* Safari */
              border-radius: 50%;
            }
          }
          .user_info {
            width: 68px;
            height: 42px;
            .user_name {
              font-size: 18px;
              font-weight: 600;
              color: #fff;
              width: 4em;
              overflow: hidden;
              text-overflow: ellipsis;
              word-break: keep-all;
              white-space: nowrap;
            }
            .user_work {
              margin-top: 10px;
              font-size: 12px;
              color: #b0abab;
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              display: -webkit-box;
            }
          }
          .user_time {
            // margin-top: 20px;
            // margin-left: 13px;
            width: 98px;
            height: 53px;
            border: 1px solid #5a5a5a;
            color: #ff7455;
            line-height: 53px;
            text-align: center;
            em {
              font-size: 18px;
              font-weight: 500;
              margin-right: 4px;
            }
          }
        }
        .page {
          text-align: center;
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          margin: 0 auto;
          position: absolute;
          bottom: -60px;
          left: 0;
          right: 0;
        }
      }
      .right_bg {
        position: absolute;
        right: 25px;
        top: 0;
        height: 100%;
        -webkit-transform: rotate(180deg); //翻转背景图
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        img {
          height: 100%;
        }
      }
    }
    footer {
      width: 100%;
      height: 140px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      .footer_bg {
        width: 864px;
        height: 100%;
        background-size: cover;
        background-position: center;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .box {
          height: 100%;

          .name {
            font-size: 18px;
            color: #a6b5d4;
            margin-top: 45px;
          }
          .num {
            color: #dbc548;
            font-size: 18px;
            margin-top: 21px;
            em {
              font-size: 36px;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>