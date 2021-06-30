<template>
  <div class="test">
    测试
    <div class="haha">
      <select>
        <option>测试</option>
        <option>测试测试</option>
      </select>
      <img :src="$imgsrc+'down.png'" />
    </div>
    <input type="text" v-model="inpVal" />
    <p>传输的input值：{{sendInpVal}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inpVal: "",
      sendInpVal: "",
      timer: null,
    };
  },
  watch: {
    inpVal: function (val) {
      this.changeInpVal();
    },
  },
  methods: {
    changeInpVal() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.sendInpVal = this.inpVal;
        this.timer = null;
      }, 500);
    },
  },
};
</script>
<style scoped lang="less">
.test {
  .haha {
    position: relative;
    padding-right: 20px;
    width: 40px;
    select {
      color: #39b8b6;
      font-size: 20px;
      appearance: none; //去掉下拉图标
      -webkit-appearance: none;
      -moz-appearance: none;
      background-color: transparent;
    }
    img {
      width: 10px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  input {
    border: 1px solid #000;
  }
}
</style>