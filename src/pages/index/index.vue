<template>
  <view class="content">
    <!-- 搜索 -->
    <view class="search">
      <!-- 搜索框 -->
      <view class="input-box">
        <input type="text" name id />
      </view>
    </view>

    <!-- 轮播图 -->
    <div class="swiper">
      <swiper indicator-dots>
        <swiper-item>
          <img src="/static/uploads/banner1.png" alt />
        </swiper-item>
        <swiper-item>
          <img src="/static/uploads/banner2.png" alt />
        </swiper-item>
        <swiper-item>
          <img src="/static/uploads/banner3.png" alt />
        </swiper-item>
      </swiper>
    </div>

    <!-- 分类导航 -->

    <div class="navs">
      <navigator url>
        <img src="/static/uploads/icon_index_nav_1@2x.png" alt />
      </navigator>
      <navigator url>
        <img src="/static/uploads/icon_index_nav_2@2x.png" alt />
      </navigator>
      <navigator url>
        <img src="/static/uploads/icon_index_nav_3@2x.png" alt />
      </navigator>
      <navigator url>
        <img src="/static/uploads/icon_index_nav_4@2x.png" alt />
      </navigator>
    </div>

    <!-- 楼层商品 -->
    <div class="floors">
      <div class="floor">
        <div class="title">
          <img src="/static/uploads/pic_floor01_title.png" alt />
        </div>
        <div class="item">
          <navigator url>
            <img src="/static/uploads/pic_floor01_1@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_2@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_3@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_4@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_5@2x.png" alt />
          </navigator>
        </div>
      </div>
      <div class="floor">
        <div class="title">
          <img src="/static/uploads/pic_floor01_title.png" alt />
        </div>
        <div class="item">
          <navigator url>
            <img src="/static/uploads/pic_floor01_1@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_2@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_3@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_4@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_5@2x.png" alt />
          </navigator>
        </div>
      </div>
      <div class="floor">
        <div class="title">
          <img src="/static/uploads/pic_floor01_title.png" alt />
        </div>
        <div class="item">
          <navigator url>
            <img src="/static/uploads/pic_floor01_1@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_2@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_3@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_4@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="/static/uploads/pic_floor01_5@2x.png" alt />
          </navigator>
        </div>
      </div>
    </div>


	
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {}
};
</script>
<style lang="less">
.content {
  .input-box {
    padding: 20rpx 16rpx;
    background-color: #ff2d4a;
    input {
      background-color: #fff;
      border-radius: 5px;
      // background-image: url('static/images/input.png');
    }
  }
  .swiper {
    img {
      width: 750rpx;
      height: 340rpx;
    }
  }
  .navs {
    display: flex;
    align-content: center;
    justify-content: space-between;
    height: 180rpx;
    padding: 0 30rpx;
    navigator {
      width: 128rpx;
      height: 140rpx;
      padding: 24rpx 0 29rpx 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .floors {
    .floor {
      .title {
        width: 750rpx;
        height: 60rpx;
        padding: 20rpx 0 0 10rpx;
        box-sizing: border-box;
        background-color: #f4f4f4;
      }
      .item {
		padding: 20rpx 16rpx;
        overflow: hidden;
        navigator {
          float: left;
          &:nth-child(1) {
            width: 232rpx;
            height: 386rpx;
          }
          &:nth-child(2),
          &:nth-child(5) {
            padding-left: 10rpx;
            width: 273rpx;
            height: 188rpx;
          }
          &:nth-child(3),
          &:nth-child(4) {
            padding-left: 10rpx;
            width: 193rpx;
            height: 188rpx;
          }
          &:nth-child(4) {
            padding-top: 10rpx;
          }
          &:nth-child(5) {
            padding-top: 10rpx;
          }
        }
	  }
	  &:nth-child(1) {
        .item {
          navigator {
            &:nth-child(1) {
              width: 232rpx;
              height: 386rpx;
            }
            width: 232rpx;
            height: 188rpx;
          }
        }
      }
    }
  }
}
</style>
	

