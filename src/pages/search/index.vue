<template>
  <div class="container">
    <view class="search">
      <!-- 搜索框 -->
      <view class="input-box">
        <input type="text" :placeholder="placeholder"/>
        <span>取消</span>
      </view>

      <!-- 搜索结果 -->
      <div class="content">
          <span>历史搜索</span>
          <br>
          <div class="item">小米</div>
          <div class="item">小米</div>
          <div class="item">小米</div>
          <div class="item">净化器</div>
          <div class="item">充气娃娃</div>
          <div class="item">小米智能手机</div>
      </div>
    </view>
  </div>
</template>

<script>
export default {
    data() {
        return {
           placeholder:'请输入你想要搜索的商品' 
        }
    },
};
</script>

<style lang="less" scoped>
.container {
  .input-box {
    display: flex;
    padding: 20rpx 16rpx;
    background-color: #EEEEEE;
      position: relative;
     &::after{
      content:'';
      position: absolute;
      background-image: url('http://static.botue.com/ugo/images/icon_search%402x.png');
      background-repeat: no-repeat;
      background-size: 32rpx;
      top: 50%;
      width: 32rpx;
      height: 32rpx;
      transform: translate(15rpx,-50%);
      }
    span {
      text-align: center;
      width: 160rpx;
      border: 1px solid #000;
      margin-left: 10rpx;
    }
    input {
      flex: 1;
      background-color: #fff;
      padding-left: 50rpx;
      border-radius: 5px;
     
    }
    
  }

  .content{
      span{
          display: inline-block;
          padding: 20rpx;
      }
      .item{
          background-color: #DDDDDD;
          display: inline-block;
          padding: 10rpx;
          border: 1px solid #DDDDDD;
          text-align: center;
          margin: 18rpx;
          height: 60rpx;
      }
  }
}
</style>
