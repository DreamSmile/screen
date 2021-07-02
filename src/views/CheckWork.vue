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
            <p class="date">2021/07/01 星期四</p>
            <p class="time">下午 14:32:21</p>
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
              <div class="user_face" :style="{backgroundImage:'url('+$imgsrcFace+')'}"></div>
              <!-- <div class="user_face" :style="{backgroundImage:'url('+!item.photo?item.photo:$imgsrcFace}"></div> -->
            </div>
            <div class="user_info">
              <p class="user_name">{{item.cname}}</p>
              <p class="user_work">{{item.deptName}}</p>
            </div>
            <div class="user_time">
              <em>迟到</em>{{item.lostDays!=0?item.lostDays:item.delayTimes}}
              {{item.lostDays!=0?'天':'分'}}
            </div>
          </div>
          <div class="page">
            {{showPage}}/{{allPage}}
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
            <p class="num"><em>60</em>人</p>
          </div>
          <div class="box">
            <p class="name">迟到人数</p>
            <p class="num"><em>60</em>人</p>
          </div>
          <div class="box">
            <p class="name">旷工人数</p>
            <p class="num"><em>60</em>人</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<style scoped lang="less">
.check_work_bg {
  background-color: #e2e2e2;
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
        height: 440px;
        width: 1300px;
        margin: auto;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
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
              border-radius: 50%;
            }
          }
          .user_info {
            width: 68px;
            .user_name {
              font-size: 18px;
              font-weight: 600;
              color: #fff;
              margin-top: 24px;
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
          margin: 33px auto;
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
<script>
export default {
  data() {
    return {
      scale: 1,
      dataList: [
        {
          userid: 1944,
          cname: "吴辉雄",
          rybh: "4353",
          deptid: 1387,
          deptName: "休闲时尚/IP联名T恤",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 1.0,
          ryid: 8882,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_8882.jpg",
          status: "lostDay",
          counts: 1.0,
          TITLE: "经理",
        },
        {
          userid: 1969,
          cname: "曾培专",
          rybh: "4368",
          deptid: 1091,
          deptName: "凤眼/压衬",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 1.0,
          ryid: 8844,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_8844.jpg",
          status: "lostDay",
          counts: 1.0,
          TITLE: "专员",
        },
        {
          userid: 3977,
          cname: "章宇峰",
          rybh: "3890",
          deptid: 105,
          deptName: "总裁办",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 1.0,
          ryid: 6593,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_6593.jpg",
          status: "lostDay",
          counts: 1.0,
          TITLE: "总监",
        },
        {
          userid: 3981,
          cname: "连玲芳",
          rybh: "3917",
          deptid: 776,
          deptName: "平面企划组",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 0.5,
          ryid: 6604,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_6604.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "专员",
        },
        {
          userid: 9043,
          cname: "蔡梅香",
          rybh: "6630",
          deptid: 956,
          deptName: "高端项目",
          delayTimes: 1,
          delayMinutes: 3,
          lostDays: 0.0,
          ryid: 39344,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_39344.jpg",
          status: "delay",
          counts: 3.0,
          TITLE: "主管",
        },
        {
          userid: 9057,
          cname: "李军",
          rybh: "6647",
          deptid: 878,
          deptName: "工程督导组",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 1.0,
          ryid: 39425,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_39425.jpg",
          status: "lostDay",
          counts: 1.0,
          TITLE: "主管",
        },
        {
          userid: 9424,
          cname: "黄志鹏",
          rybh: "7045",
          deptid: 898,
          deptName: "牛仔项目",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 0.5,
          ryid: 41208,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_41208.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "专员",
        },
        {
          userid: 9670,
          cname: "林燕妮",
          rybh: "7291",
          deptid: 756,
          deptName: "招聘培训",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 0.5,
          ryid: 42439,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_42439.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "主管",
        },
        {
          userid: 10169,
          cname: "刘丽霞",
          rybh: "7787",
          deptid: 1160,
          deptName: "产品企划",
          delayTimes: 1,
          delayMinutes: 7,
          lostDays: 0.5,
          ryid: 44094,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_44094.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "专员",
        },
        {
          userid: 10286,
          cname: "许凤琳",
          rybh: "7896",
          deptid: 791,
          deptName: "业务采购五部",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 0.5,
          ryid: 44448,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_44448.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "专员",
        },
        {
          userid: 10354,
          cname: "王智勇",
          rybh: "7969",
          deptid: 1238,
          deptName: "线上零售中心",
          delayTimes: 1,
          delayMinutes: 10,
          lostDays: 0.0,
          ryid: 44924,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_44924.jpg",
          status: "delay",
          counts: 10.0,
          TITLE: "副总监",
        },
        {
          userid: 10517,
          cname: "杨小翔",
          rybh: "8136",
          deptid: 1318,
          deptName: "T恤/毛衫/羊绒",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 0.5,
          ryid: 45298,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_45298.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "专员",
        },
        {
          userid: 10537,
          cname: "努尔比燕·吐尔洪",
          rybh: "8158",
          deptid: 1206,
          deptName: "轻商务项目",
          delayTimes: 1,
          delayMinutes: 7,
          lostDays: 0.5,
          ryid: 45344,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_45344.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "专员",
        },
        {
          userid: 10567,
          cname: "卢东明",
          rybh: "8187",
          deptid: 1015,
          deptName: "轻薄羽绒/商务休闲T恤",
          delayTimes: 1,
          delayMinutes: 5,
          lostDays: 0.0,
          ryid: 45408,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_45408.jpg",
          status: "delay",
          counts: 5.0,
          TITLE: "专员",
        },
        {
          userid: 10574,
          cname: "简世豪",
          rybh: "8194",
          deptid: 1161,
          deptName: "视觉企划",
          delayTimes: 1,
          delayMinutes: 5,
          lostDays: 0.0,
          ryid: 45415,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_45415.jpg",
          status: "delay",
          counts: 5.0,
          TITLE: "专员",
        },
        {
          userid: 10909,
          cname: "杨雅君",
          rybh: "8548",
          deptid: 1316,
          deptName: "外套",
          delayTimes: 1,
          delayMinutes: 1,
          lostDays: 0.0,
          ryid: 46806,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_46806.jpg",
          status: "delay",
          counts: 1.0,
          TITLE: "专员",
        },
        {
          userid: 10999,
          cname: "李盛华",
          rybh: "5071",
          deptid: 989,
          deptName: "总账核算课",
          delayTimes: 1,
          delayMinutes: 1,
          lostDays: 0.0,
          ryid: 16654,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_16654.jpg",
          status: "delay",
          counts: 1.0,
          TITLE: "主管",
        },
        {
          userid: 11271,
          cname: "雷燕芳",
          rybh: "8872",
          deptid: 997,
          deptName: "造价合约组",
          delayTimes: 1,
          delayMinutes: 1,
          lostDays: 0.0,
          ryid: 48041,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_48041.jpg",
          status: "delay",
          counts: 1.0,
          TITLE: "主管",
        },
        {
          userid: 11391,
          cname: "王凤",
          rybh: "8965",
          deptid: 1337,
          deptName: "休闲裤",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 0.5,
          ryid: 48413,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_48413.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "专员",
        },
        {
          userid: 11415,
          cname: "郑臻",
          rybh: "8957",
          deptid: 336,
          deptName: "领航营销公司",
          delayTimes: 2,
          delayMinutes: 3,
          lostDays: 0.0,
          ryid: 48400,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_48400.jpg",
          status: "delay",
          counts: 3.0,
          TITLE: "专员",
        },
        {
          userid: 11486,
          cname: "杜雨芸",
          rybh: "9073",
          deptid: 1035,
          deptName: "成衣质量跟进部",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 0.5,
          ryid: 48810,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_48810.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "专员",
        },
        {
          userid: 11508,
          cname: "丁佳梅",
          rybh: "9128",
          deptid: 1324,
          deptName: "单西/羊绒",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 0.5,
          ryid: 48938,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_48938.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "专员",
        },
        {
          userid: 11516,
          cname: "陈姗",
          rybh: "9056",
          deptid: 789,
          deptName: "业务采购二部",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 0.5,
          ryid: 48787,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_48787.jpg",
          status: "lostDay",
          counts: 0.5,
          TITLE: "专员",
        },
        {
          userid: 11576,
          cname: "林景钦",
          rybh: "9200",
          deptid: 1072,
          deptName: "牛仔裤",
          delayTimes: 0,
          delayMinutes: 0,
          lostDays: 1.0,
          ryid: 49121,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_49121.jpg",
          status: "lostDay",
          counts: 1.0,
          TITLE: "基层员工",
        },
        {
          userid: 11600,
          cname: "卢佳欣",
          rybh: "9171",
          deptid: 1238,
          deptName: "线上零售中心",
          delayTimes: 1,
          delayMinutes: 1,
          lostDays: 0.0,
          ryid: 49050,
          photo: "http://webt.lilang.com:9001/photo/tzphoto/photo_49050.jpg",
          status: "delay",
          counts: 1.0,
          TITLE: "专员",
        },
      ], //接口返回的所有数据
      showData: [], //界面显示的数据，分页模式
      showPage: 1, //当前显示的分页数
      allPage: 1,
    };
  },
  mounted() {
    let _this = this;
    this.setScale();
    this.getData();
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
  methods: {
    getData() {
      // 当数量超过一页显示
      //   for(let i=0;i< this.dataList.length;i++){

      //   }
      if (this.dataList.length > 16) {
        this.allPage = Math.ceil(parseInt(this.dataList.length) / 16); //总页数
        for (let i = 0; i < 16; i++) {
          //   if (i > 15) {
          this.showData.push(this.dataList[i]);
          //   }
        }
      } else {
        this.showData = this.dataList;
      }

      return;
      this.$api
        .getCheckWork({
          action: "loadCheckData",
          loadDate: "2021/07/01",
        })
        .then((res) => {
          if (res.errcode != 0) {
            alert("获取信息错误，原因为：" + res.errmsg);
            return;
          }
          console.log(res.data);
          this.dataList = res.data;
        })
        .catch((err) => {
          alert("连接失败，原因为：" + err);
        });
    },
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