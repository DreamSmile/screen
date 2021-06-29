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
  </div>
</template>
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
      //   background-image: url("http://tm.lilanz.com/QYWX/Test/LMTest/assets/img/screen/down.png");
    }
    img {
      width: 10px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>