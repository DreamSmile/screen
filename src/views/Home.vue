<template>
  <div class="home">
    <div class="container" :style="{transform: 'scale('+rate+') translate(-50%, -50%)'}">
      <header>
        <div class="btns"><button class="btn btn_sel">主产品微商商城</button><button class="btn">轻商务微商商城</button></div>
      </header>
      <div class="content">
        <div class="con_left">
          <!-- 当前在线用户 -->
          <div class="user">
            <div class="title">
              <span class="name">主产品在线用户Beta</span>
            </div>
            <div class="box">
              <div class="user_icon" :style="{backgroundImage:'url('+$imgsrc+'user.png)'}"></div>
              <div class="info">
                <p class="now_user">当前实时在线</p>
                <p class="now_num"><em>12</em>看看谁在线</p>
              </div>
            </div>
            <div class="summary">
              <span><img :src="$imgsrc+'spot.png'" />今日在线峰值<em>15</em>人</span>
              <span><img :src="$imgsrc+'spot.png'" />今日访问用户<em>233</em>人</span>
            </div>
          </div>
          <!-- 左侧排行榜 -->
          <div class="ranking">
            <div class="title">
              <span class="name">贸易公司营业员云销售排行榜</span>
            </div>
            <div class="faces">
              <div class="face">
                <img class="img_border" :src="$imgsrc+'face_border.png'" />
                <div class="face_photo" :style="{backgroundImage:'url('+$imgsrc+'face.jpg)'}"></div>
              </div>
              <div class="face face_big">
                <img class="img_border" :src="$imgsrc+'face_border.png'" />
                <div class="face_photo" :style="{backgroundImage:'url('+$imgsrc+'face.jpg)'}"></div>
              </div>
              <div class="face">
                <img class="img_border" :src="$imgsrc+'face_border.png'" />
                <div class="face_photo" :style="{backgroundImage:'url('+$imgsrc+'face.jpg)'}"></div>
              </div>
            </div>
            <ul>
              <li v-for="(item,i) in 7" :key="i">
                <span class="NO">TOP <em>{{i}}</em></span>
                <div class="info">
                  <div class="num"><span>张颖</span><span>21</span><span>33312</span></div>
                  <p class="adress">2X安徽晋盛东区（直营）WHMA02马鞍山市南超长超出超长超出超长超出超长超出</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="con_center">
          <!-- 当日实时销售额 -->
          <div class="real_data">
            <div class="title">
              <span class="name">今日实时销售额</span>
              <span class="time">2021年6月9日 12:00:08</span>
            </div>
            <div class="btns">
              <button class="btn isSel">今日</button>
              <button class="btn">本周</button>
              <button class="btn">本月</button>
              <button class="btn">更多</button>
            </div>
            <div class="nums">
              <div class="bg" v-for="(item,i) in 9" :key="i">
                <span>{{i+1}}</span>
              </div>
            </div>
            <div class="introduce">
              <span>当日实时订单量：<em>3332</em></span>
              <span>当日实时商品量：<em>3332</em></span>
            </div>
          </div>
          <!-- 售空率 -->
          <div class="sellout">
            <div class="box_echart">
              <div class="title">
                <span class="name">贸易公司售空率</span>
                <span class="num">售空率<em> 69%</em></span>
              </div>
              <div class="echart">
                这是图表
              </div>
            </div>
            <div class="box_echart">
              <div class="title">
                <span class="name">贸易公司售空率</span>
                <span class="num">售空率<em> 69%</em></span>
              </div>
              <div class="echart">
                这是图表
              </div>
            </div>
          </div>
          <!-- 理单 -->
          <div class="sell">
            <div class="title">
              <span class="name">贸易公司理单云仓销售</span>
            </div>
            <div class="echart"></div>
          </div>
        </div>
        <div class="con_right">
          <div class="date">
            <select>
              <option>2021-06-01</option>
            </select>
            <em>至</em>
            <select>
              <option>2021-06-01</option>
            </select>
          </div>
          <div class="title">
            <span class="name">贸易公司云仓库销售排行榜</span>
          </div>
          <div class="list_box">
            <div class="table_title">
              <span>序号</span><span>公司名称</span><span>金额</span>
            </div>
            <ul>
              <li v-for="(item,i) in 9" :key="i" :class="{bg:(i%2==0)?true:false}">
                <div class="NO"><span>{{i+1}}</span></div>
                <span class="name">2X安徽晋盛东区（直营）马鞍山市南超长超出超长超出超长</span>
                <span class="num">331.22</span>
              </li>
            </ul>
          </div>
          <div class="title last_title">
            <span class="name">贸易公司门店云仓库销售排行榜</span>
          </div>
          <div class="list_box">
            <div class="table_title">
              <span>序号</span><span>公司名称</span><span>金额</span>
            </div>
            <ul>
              <li v-for="(item,i) in 9" :key="i" :class="{bg:(i%2==0)?true:false}">
                <div class="NO"><span>{{i+1}}</span></div>
                <span class="name">2X安徽晋盛东区（直营）马鞍山市南超长超出超长超出超长</span>
                <span class="num">331.22</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.home {
  background-color: #091a24;
  width: 100%;
  height: 100%;
  .container {
    transform-origin: 0 0;
    transition: 0.3s;
    width: 1920px;
    height: 1216px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #091a24;

    header {
      width: 100%;
      height: 124px;
      line-height: 124px;
      .btns {
        margin: auto;
        width: 632px;
        height: 32px;
      }
      .btn {
        // background-color:rgba(57,184,182,0.3);
        background-color: #39b8b6;
        opacity: 0.3;
        color: #fff;
        padding: 10px 60px;
        border: 1px solid #b5e1e1;
        box-sizing: border-box;
        font-size: 24px;
      }
      .btn_sel {
        background-color: #39b8b6;
        opacity: 1;
        border: 2px solid #b5e1e1;
      }
    }
    .content {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .con_left {
        width: 460px;
        padding-left: 56px;
        .title {
          border-bottom: 1px solid #39b8b6;
          padding-bottom: 10px;
          .name {
            color: #fff;
            font-weight: 500;
            font-size: 17px;
          }
        }

        .user {
          height: 240px;
          padding: 0 8px 0 16px;
          .box {
            margin: 55px 0 41px 0;
            padding-left: 31px;
            .user_icon {
              background-position: 50%;
              background-size: cover;
              width: 67px;
              height: 67px;
              margin-right: 30px;
              display: inline-block;
              vertical-align: top;
            }
            .info {
              color: #fff;
              height: 67px;
              display: inline-block;
              font-size: 0;
              vertical-align: top;
              box-sizing: border-box;
              .now_user {
                font-size: 15px;
                margin-bottom: 18px;
                margin-bottom: 17px;
              }
              .now_num {
                font-size: 12px;
                color: #37b2b0;
                em {
                  font-size: 26px;
                  color: #fff;
                  margin-right: 20px;
                }
              }
            }
          }
          .summary {
            color: #fff;
            line-height: 56px;
            span {
              font-size: 15px;
              img {
                width: 14px;
                height: 14px;
              }
              em {
                font-size: 18px;
                margin-left: 10px;
              }
            }
            span:last-child {
              margin-left: 12px;
            }
          }
        }
        .ranking {
          margin-top: 35px;
          .faces {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 22px;
            .face {
              height: 100px;
              width: 100px;
              position: relative;
              margin-top: 44px;
              .img_border {
                width: 100%;
                height: 100%;
              }
              .face_photo {
                width: 64px;
                height: 64px;
                background-position: 50%;
                background-size: cover;
                border-radius: 50%;
                position: absolute;
                top: 14px;
                left: 18px;
              }
            }
            .face_big {
              width: 120px;
              height: 120px;
              margin-top: 0;
              .face_photo {
                width: 88px;
                height: 88px;
              }
            }
          }
        }
        ul {
          background-color: #0b1f29;
          li {
            height: 82px;
            box-sizing: border-box;
            padding: 0 22px 0 16px;
            .NO {
              line-height: 82px;
              font-size: 15px;
              color: #eb9940;
              font-weight: 500;
              vertical-align: middle;
              em {
                font-size: 18px;
              }
            }
            .info {
              display: inline-block;
              vertical-align: middle;
              box-sizing: border-box;
              margin-left: 13px;
              color: #fff;
              width: 306px;
              .num {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 17px;
                line-height: 30px;
              }
              .adress {
                width: 306px;
                font-size: 14px;
                overflow: hidden;
                text-overflow: hidden;
                word-break: keep-all;
                white-space: nowrap;
                line-height: 30px;
              }
            }
          }
        }
      }
      .con_center {
        width: 1050px;
        margin: 0 34px 0 40px;
        box-sizing: border-box;
        // flex: 1;
        .real_data {
          .title {
            border-bottom: 2px solid #39b8b6;
            padding-bottom: 11px;
            .name {
              font-size: 24px;
              color: #fff;
              font-weight: 500;
              vertical-align: top;
            }
            .time {
              vertical-align: top;
              margin-left: 16px;
              color: #39b8b6;
              font-size: 20px;
              font-weight: 500;
            }
          }
          .btns {
            margin: 22px 0 42px 0;
            .btn {
              color: #fff;
              background-color: transparent;
              border: 1px solid #39b8b6;
              font-size: 14px;
              padding: 6px 10px;
              cursor: pointer;
            }
            .isSel {
              background-color: #39b8b6;
            }
          }
          .nums {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .bg {
              width: 88px;
              height: 88px;
              text-align: center;
              background-color: #1b585e;
              background: linear-gradient(transparent, #1b585e);
              background: -webkit-linear-gradient(transparent, #1b585e);
              background: -moz-linear-gradient(transparent, #1b585e);
              span {
                font-size: 58px;
                line-height: 88px;
                font-weight: 500;
                color: #a2fffe;
              }
            }
          }
          .introduce {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 500;
            margin-top: 32px;
            span {
              font-size: 20px;
              color: #fff;
              em {
                font-size: 26px;
                color: #39b8b6;
              }
            }
          }
        }
        .sellout {
          margin-top: 60px;
          .box_echart {
            width: 470px;
            height: 334px;
            vertical-align: top;
            display: inline-block;
            width: calc(50% - 17px); //间隔为34px
            .title {
              padding-bottom: 10px;
              border-bottom: 2px solid #39b8b6;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              .name {
                font-size: 20px;
                color: #fff;
                font-weight: 500;
              }
              .num {
                background-image: -webkit-linear-gradient(
                  bottom,
                  #ff894d,
                  #fe5870
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 14px;
                em {
                  font-size: 16px;
                  font-weight: 500s;
                }
              }
            }
            .echart {
              background-color: #0b212c;
              height: 296px;
            }
          }
          .box_echart:last-child {
            // float: right;
            margin-left: 34px;
          }
          // .box_echart:last-child:after {
          //   clear: both;
          //   display: block;
          //   visibility: hidden;
          //   height: 0;
          // }
        }
        .sell {
          margin-top: 34px;
          .title {
            padding-bottom: 10px;
            border-bottom: 2px solid #39b8b6;
            display: flex;
            .name {
              font-size: 20px;
              color: #fff;
              font-weight: 500;
            }
          }
          .echart {
            height: 300px;
            width: 100%;
            background-color: #0b212c;
          }
        }
      }
      .con_right {
        width: 404px;
        padding-right: 56px;
        .date {
          select {
            padding: 7px 34px;
            text-align: center;
            border: 1px solid #39b8b6;
            color: #fff;
            background: transparent;
          }
          em {
            color: #39b8b6;
            font-size: 12px;
            margin: 0 12px;
          }
        }
        .title {
          margin-top: 24px;
          border-bottom: 2px solid #39b8b6;
          padding-bottom: 11px;
          .name {
            font-size: 17px;
            color: #fff;
            font-weight: 500;
          }
        }
        .list_box {
          background-color: #0b1d27;
          .table_title {
            font-size: 14px;
            color: #757e83;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // margin-top: 22px;
            // margin-bottom: 18px;
            line-height: 55px;
            height: 55px;
            padding: 0 14px;
            box-sizing: border-box;
          }
          ul {
            li {
              color: #fff;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 60px;
              line-height: 60px;
              padding: 0 14px;
              box-sizing: border-box;
              .NO {
                background-color: #3ab8b6;
                width: 20px;
                height: 20px;
                box-sizing: border-box;
                text-align: center;
                border-radius: 50%;
                // position: relative;
                span {
                  font-size: 10px;
                  font-weight: 500;
                  line-height: 20px;
                  display: block;
                  // position: absolute;
                  // top: 50%;
                  // left: 50%;
                  // margin-top: -5px;
                  // margin-left: -5px;
                }
                
              }
              .name {
                font-size: 14px;
                width: 194px;
                overflow: hidden;
                text-overflow: hidden;
                word-break: keep-all; /* 不换行 */
                white-space: nowrap; /* 不换行 */
              }
              .num {
              }
            }
            .bg {
              background-color: #0c2c36;
              height: 30px;
              line-height: 30px;
            }
          }
        }
        .last_title {
          margin-top: 34px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      rate: 1,
    };
  },
  mounted() {
    let _this = this;
    _this.screen();
    window.onresize = function () {
      _this.screen();
    };
  },

  methods: {
    screen() {
      const heightRatio = Number(document.documentElement.clientHeight / 1216);
      const widthRatio = Number(document.documentElement.clientWidth / 1920);
      var ratio =
        document.documentElement.clientWidth /
        document.documentElement.clientHeight;
      if (ratio < 1920 / 1216) {
        this.rate = widthRatio;
      } else {
        this.rate = heightRatio;
      }
    },
  },
};
</script>

