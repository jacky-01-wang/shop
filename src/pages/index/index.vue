<template>
  <view class="content">
    <!-- 搜索 -->
    <view class="search">
      <!-- 搜索框 -->
      <view class="input-box" @click="toSearch">
        <input type="text" />
      </view>
    </view>

    <!-- 轮播图 -->
    <div class="swiper">
      <swiper indicator-dots>
        <swiper-item v-for="item in swiperData" :key="item.goods_id">
       
            <img :src="item.image_src" alt />

        </swiper-item>
      </swiper>
    </div>

    <!-- 分类导航 -->

    <div class="navs">
      <navigator url v-for="item in navList" :key="item">
        <img :src="item.image_src" alt />
      </navigator>
    </div>

    <!-- 楼层商品 -->
    <div class="floors">
      <div class="floor" v-for="item in floorData" :key="item">
        <div class="title">
          <img :src="item.floor_title.image_src" alt />
        </div>
        <div class="item">
          <navigator url v-for="i in item.product_list" :key="i">
            <img :src="i.image_src" alt />
          </navigator>
        </div>
      </div>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      swiperData: [],
      navList:[],
      floorData:[]
    };
  },
  onLoad() {
    this.getSwiper();
    this.getNavData()
    this.getFloorList()
  },
  methods: {
    // 获得楼层商品数据
    async  getFloorList(){
      const {message} =await this.$request({
        path:'/home/floordata'
      })
      console.log(message);
      
      this.floorData=message
    },
    // 跳转到搜索页面
    toSearch() {
      wx.redirectTo({
        url: "/pages/search/index"
      });
    },
 // 获得导航数据
  async getNavData(){
    const {message}=await this.$request({
      path:'/home/catitems',
      method:'get'
    })
    this.navList=message
  },

    // 获得轮播图数据
  async  getSwiper() {
    const {message}= await this.$request({
        path:  "/home/swiperdata",
      });
      this.swiperData = message;
    }
  },


 
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
      position: relative;
      font-size: 24rpx;

      &::after {
        content: "搜索";
        padding-left: 40rpx;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-image: url("http://static.botue.com/ugo/images/icon_search%402x.png");
        background-size: 32rpx;
        background-repeat: no-repeat;
      }
    }
  }
  .swiper {
    navigator {
      width: 750rpx;
      height: 340rpx;
      img {
        width: 750rpx;
        height: 340rpx;
      }
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
	

