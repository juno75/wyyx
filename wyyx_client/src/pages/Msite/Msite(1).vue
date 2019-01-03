<template>
  <div class="msite">
    <div class="top-blank"></div>
    <header>
      <div class="header-top">
        <a href="javascript:;"></a>
        <div class="hand-search">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共197575件好物</span>
        </div>
        <div class="hand-loading">
          登录
        </div>
      </div>
      <div class="tabWrap">
        <div class="tabs" v-if="showTabs">
          <ul>
            <li class="red-border">推荐</li>
            <li>居家</li>
            <li>居家</li>
            <li>居家</li>
            <li>居家</li>
            <li>居家</li>
            <li>居家</li>
            <li>居家</li>
            <li>居家</li>
            <li>居家</li>
            <li>居家</li>
          </ul>
        </div>

        <div class="tab-list" v-else>
          <h3>全部频道</h3>
          <ul class="lists">
            <li>推荐</li>
            <li>居家</li>
            <li>鞋包配饰</li>
            <li>特价区</li>
            <li>好货</li>
          </ul>
        </div>
        <i class="iconfont icon-iconfontxiangxia" ref="upDown" :class="{up:!showTabs}" @click="toggleTabs"></i>

      </div>
    </header>
    <div class="mask" v-show="!showTabs"></div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/4d078ea6e81cbf0fd128ef1b255bd6e2.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="slogon">
      <div class="slogon-all slogon-left">
        <i></i>
        <span>网易自营品牌</span>
      </div>
      <div class="slogon-all slogon-center">
        <i></i>
        <span>30天无忧退货</span>
      </div>
      <div class="slogon-all slogon-right">
        <i></i>
        <span>48小时快速退款</span>
      </div>
    </div>
    <ul class="shopNav" v-if="categories.kingKongModule">
      <li v-for="(kingKong, index) in categories.kingKongModule.kingKongList" :key="index">
        <img :src="kingKong.picUrl" alt="">
        <span>{{kingKong.text}}</span>
      </li>

    </ul>

    <div class="bossRecommen">
      <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
    </div>

    <ul class="shoppingGuide" v-if="categories.sceneLightShoppingGuideModule">
      <li class="shoppingGuide-item" v-for="(shoppingGuide, index) in categories.sceneLightShoppingGuideModule"
          :key="index">
        <div class="title">{{shoppingGuide.styleItem.title}}</div>
        <div class="desc">{{shoppingGuide.styleItem.desc}}</div>

        <img :src="itemPic.picUrl" alt="" v-for="(itemPic, index) in shoppingGuide.styleItem.itemPicBeanList"
             :key="index">

      </li>

    </ul>
    <Split/>


    <div class="personalShop">
      <div class="personalShop-title">私人订制</div>
      <div class="personalShop-carousel">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(personalShop, index) in personalShopArr" :key="index">
              <div class="personalShop-item" v-for="(good ,index) in personalShop" :key="index">
                <img class="primaryPic" :src="good.primaryPicUrl" alt="">
                <div class="text">
                  <span class="name">{{good.name}}</span>
                  <span class="price">¥{{good.retailPrice}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <Split/>

    <div class="timeToBuy">
      <div class="timeToBuy-header">
        <span class="timeToBuy-title">限时购</span>
        <div class="countDown">
          <span class="hour">03</span>
          <span class="colon">:</span>
          <span class="minutes">04</span>
          <span class="colon">:</span>
          <span class="seconds">05</span>
        </div>
        <span class="more">更多></span>
      </div>
      <ul class="timeToBuy-goods">
        <li class="timeToBuy-good">
          <img src="http://yanxuan.nosdn.127.net/3d35820f82d32bff156900afabbc058a.png?imageView&thumbnail=216x216&quality=75" alt="">
          <span class="activityPrice">￥39.2</span>
          <span class="originPrice">￥49</span>
        </li>
        <li class="timeToBuy-good">
          <img src="http://yanxuan.nosdn.127.net/3d35820f82d32bff156900afabbc058a.png?imageView&thumbnail=216x216&quality=75" alt="">
          <span class="activityPrice">￥39.2</span>
          <span class="originPrice">￥49</span>
        </li>
        <li class="timeToBuy-good">
          <img src="http://yanxuan.nosdn.127.net/3d35820f82d32bff156900afabbc058a.png?imageView&thumbnail=216x216&quality=75" alt="">
          <span class="activityPrice">￥39.2</span>
          <span class="originPrice">￥49</span>
        </li>
        <li class="timeToBuy-good">
          <img src="http://yanxuan.nosdn.127.net/3d35820f82d32bff156900afabbc058a.png?imageView&thumbnail=216x216&quality=75" alt="">
          <span class="activityPrice">￥39.2</span>
          <span class="originPrice">￥49</span>
        </li>
        <li class="timeToBuy-good">
          <img src="http://yanxuan.nosdn.127.net/3d35820f82d32bff156900afabbc058a.png?imageView&thumbnail=216x216&quality=75" alt="">
          <span class="activityPrice">￥39.2</span>
          <span class="originPrice">￥49</span>
        </li>
        <li class="timeToBuy-good">
          <img src="http://yanxuan.nosdn.127.net/3d35820f82d32bff156900afabbc058a.png?imageView&thumbnail=216x216&quality=75" alt="">
          <span class="activityPrice">￥39.2</span>
          <span class="originPrice">￥49</span>
        </li>
        <li class="timeToBuy-good">
          <img src="http://yanxuan.nosdn.127.net/3d35820f82d32bff156900afabbc058a.png?imageView&thumbnail=216x216&quality=75" alt="">
          <span class="activityPrice">￥39.2</span>
          <span class="originPrice">￥49</span>
        </li>
        <li class="timeToBuy-good">
          <img src="http://yanxuan.nosdn.127.net/3d35820f82d32bff156900afabbc058a.png?imageView&thumbnail=216x216&quality=75" alt="">
          <span class="activityPrice">￥39.2</span>
          <span class="originPrice">￥49</span>
        </li>
        <li class="timeToBuy-good">
          <img src="http://yanxuan.nosdn.127.net/3d35820f82d32bff156900afabbc058a.png?imageView&thumbnail=216x216&quality=75" alt="">
          <span class="activityPrice">￥39.2</span>
          <span class="originPrice">￥49</span>
        </li>
      </ul>
    </div>
    <Split/>

    <div class="newGoods">
      <div class="newGoods-header">
        <span class="newGoods-title">新品首发</span>
        <span class="more">更多></span>
      </div>
      <ul class="newGoods-goods">
        <li class="newGoods-good">
          <img class="primaryPic" src="http://yanxuan.nosdn.127.net/40bee3e5b74b9f85f3db4c251e966cb4.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="text">
              <span class="name">西班牙制造 高浓VC保湿抗...</span>
            <span class="price">￥289</span>
          </div>
        </li>
        <li class="newGoods-good">
          <img class="primaryPic" src="http://yanxuan.nosdn.127.net/40bee3e5b74b9f85f3db4c251e966cb4.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="text">
            <span class="name">西班牙制造 高浓VC保湿抗...</span>
            <span class="price">￥289</span>
          </div>
        </li>
        <li class="newGoods-good">
          <img class="primaryPic" src="http://yanxuan.nosdn.127.net/40bee3e5b74b9f85f3db4c251e966cb4.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="text">
            <span class="name">西班牙制造 高浓VC保湿抗...</span>
            <span class="price">￥289</span>
          </div>
        </li>
        <li class="newGoods-good">
          <img class="primaryPic" src="http://yanxuan.nosdn.127.net/40bee3e5b74b9f85f3db4c251e966cb4.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="text">
            <span class="name">西班牙制造 高浓VC保湿抗...</span>
            <span class="price">￥289</span>
          </div>
        </li>
        <li class="newGoods-good">
          <img class="primaryPic" src="http://yanxuan.nosdn.127.net/40bee3e5b74b9f85f3db4c251e966cb4.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="text">
            <span class="name">西班牙制造 高浓VC保湿抗...</span>
            <span class="price">￥289</span>
          </div>
        </li>
        <li class="newGoods-good">
          <img class="primaryPic" src="http://yanxuan.nosdn.127.net/40bee3e5b74b9f85f3db4c251e966cb4.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="text">
            <span class="name">西班牙制造 高浓VC保湿抗...</span>
            <span class="price">￥289</span>
          </div>
        </li>
      </ul>
    </div>
    <Split/>

    <div class="popularGoods">
      <div class="popularGoods-header">
        <span class="popularGoods-title">人气推荐</span>
        <span class="more">更多></span>
      </div>
      <div class="spItem">
        <div class="spItem-img">
          <img src="http://yanxuan.nosdn.127.net/77b7e8586397dc27613e6c5c6da7a85a.png?imageView&quality=65&thumbnail=280x280" alt="">
        </div>
        <div class="spItem-des">
          <div class="name">男式轻薄无缝羽绒服</div>
          <div class="desc">一体无缝设计，大气温暖防钻绒</div>
          <div class="price">¥200</div>
        </div>
      </div>
      <ul class="popularGoods-goods">
        <li class="popularGoods-good">
          <img class="primaryPic" src="http://yanxuan.nosdn.127.net/fb53b989d34b32366f138b5e563ccd0a.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="text">
            <span class="name">升级款95%白鹅绒秋冬加厚...</span>
            <span class="price">¥896</span>
          </div>
        </li>
        <li class="popularGoods-good">
          <img class="primaryPic" src="http://yanxuan.nosdn.127.net/fb53b989d34b32366f138b5e563ccd0a.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="text">
            <span class="name">升级款95%白鹅绒秋冬加厚...</span>
            <span class="price">¥896</span>
          </div>
        </li>
        <li class="popularGoods-good">
          <img class="primaryPic" src="http://yanxuan.nosdn.127.net/fb53b989d34b32366f138b5e563ccd0a.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="text">
            <span class="name">升级款95%白鹅绒秋冬加厚...</span>
            <span class="price">¥896</span>
          </div>
        </li>
      </ul>
    </div>
    <Split/>

    <div class="topicGoods">
      <div class="topicGoods-header">
        <span class="topicGoods-title">专题精选</span>
        <span class="more">更多></span>
      </div>
      <div class="topicGoods-wrapper">
        <ul class="topicGoods-list">
          <li class="topicGoods-item">
            <div class="topicGoods-item-img">
              <img src="https://yanxuan.nosdn.127.net/571e99aba1df41c9a7098a8c0b83526a.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
            </div>
            <div class="topicGoods-title">一个接近满分的黄桃罐头是怎样的？</div>
            <div class="topicGoods-subtitle">肉质剔透，甘润适口</div>
          </li>
          <li class="topicGoods-item">
            <div class="topicGoods-item-img">
              <img src="https://yanxuan.nosdn.127.net/a8db9df4270f8d329d125b239e8de186.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
            </div>
            <div class="topicGoods-title">一个接近满分的黄桃罐头是怎样的？</div>
            <div class="topicGoods-subtitle">肉质剔透，甘润适口</div>
          </li>
          <li class="topicGoods-item">
            <div class="topicGoods-item-img">
              <img src="https://yanxuan.nosdn.127.net/93e9864a90adb4ca079f2404a9426453.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
            </div>
            <div class="topicGoods-title">一个接近满分的黄桃罐头是怎样的？</div>
            <div class="topicGoods-subtitle">肉质剔透，甘润适口</div>
          </li>
        </ul>
      </div>
    </div>
    <Split/>

    <div class="crowd">
      <div class="crowd-header">
        <span class="crowd-title">众筹</span>
        <span class="more">更多></span>
      </div>
      <ul class="crowd-list">
        <li class="crowd-item">
          <div class="crowd-item-img">
            <img src="https://yanxuan.nosdn.127.net/f0007d7b330b5ed3e88f43f27f9f565a.png?imageView&thumbnail=210x210&quality=75" alt="">
          </div>
          <div class="crowd-item-info">
            <div class="crowd-item-title">易武贡茶 迷你普洱茶饼100克</div>
            <div class="crowd-item-price">￥198起</div>
            <div class="crowd-item-progress">
              <div class="bg" style="width:100%;"></div>
            </div>
            <div class="crowd-item-percent">284%</div>
            <div class="crowd-item-supportNum">306人已支持</div>
          </div>
        </li>
        <li class="crowd-item">
          <div class="crowd-item-img">
            <img src="https://yanxuan.nosdn.127.net/4ffd108225357b1ce5d95c3dcd1eb2a4.png?imageView&thumbnail=210x210&quality=75" alt="">
          </div>
          <div class="crowd-item-info">
            <div class="crowd-item-title">易武贡茶 迷你普洱茶饼100克</div>
            <div class="crowd-item-price">￥198起</div>
            <div class="crowd-item-progress">
              <div class="bg" style="width:100%;"></div>
            </div>
            <div class="crowd-item-percent">284%</div>
            <div class="crowd-item-supportNum">306人已支持</div>
          </div>
        </li>
      </ul>
    </div>
    <Split/>

    <div class="ftWrap">
      <div class="ftContent">
        <div class="bd">
          <a class="goApp" href="javascript:;">下载APP</a>
          <a class="goPc" href="javascript:;">电脑版</a>
        </div>
        <p class="copyRight">
          <span>网易公司版权所有 © 1997-</span>
          <span>2019</span>
          <br>
          <span>食品经营许可证：JY13301080111719</span>
          <br>
        </p>
      </div>
    </div>
    <div class="blank"></div>


  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return {
        showTabs:true
      }
    },
    mounted(){
      this.$store.dispatch('getCategory')

      new BScroll('.tabs',{
        click:true,
        scrollX: true,
        scrollY: false,
      }),
      new BScroll('.topicGoods-wrapper', {
        click:true,
        scrollX: true,
        scrollY: false,

      }),
      new Swiper('.swiper-container', {
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
      })
//        new Swiper('.personalShop-carousel .swiper-container', {
//        loop: true,
//        pagination: {
//          el: '.swiper-pagination',
//        },
//      })
    },

    computed:{
      ...mapState(['categories'])
    },

    methods:{
      toggleTabs(){
        this.showTabs = !this.showTabs
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixins";
    .top-blank
      width 100%
      height 148px
    header
      width: 100%;
      height:148px;
      position: fixed;
      top:0;
      z-index: 99;
      .header-top
        width: 100%;
        height:1.1733rem;
        padding: .21333rem .4rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        position: relative;
        background-color: #fff;
        a
          width: 1.84rem;
          height: .53333rem;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
          display: inline-block;
          margin-right: .26667rem;
        .hand-search
          flex-grow: 1;
          display: flex;
          justify-content: center;
          height: .74667rem;
          font-size: .37333rem;
          background-color: #ededed;
          border-radius: .10667rem;
          align-items: center;
          i
            font-size: .37333rem;
            margin-right: .1333rem;
          span
            color:#666;
            box-sizing: border-box;
            text-size-adjust: 100%;
        .hand-loading
          width: .98667rem;
          height: .53333rem;
          line-height: .53333rem;
          text-align: center;
          color: #b4282d;
          border: 1px solid #b4282d;
          border-radius: .10667rem;
          margin-left: .21333rem;
          font-size: .32rem;
      .tabWrap
        width: 100%;
        height: .8rem;
        background-color: #fff;
        box-sizing: border-box;
        position: relative;
        margin-top: -1px;
        .tabs
          width: 8.2666rem;
          height:100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          background-color: #fff;
          padding-left: .4rem;
          overflow: hidden;
          ul
            display:flex;
            height:100%;
            white-space:nowrap;
            li
              padding: 0 .21333rem;
              line-height: .8rem;
              font-size: .37333rem;
              color: #333;
              text-align: center;
              margin-top: -3px;
              &.red-border
                border-bottom: 3px solid #b4282d;

        i
          position: absolute;
          right: .4rem;
          top:0;
          width: .8rem;
          height: .8rem;
          line-height: .8rem;
          text-align: center;
          font-size: .3733rem;
          box-sizing: border-box;
          color:#333;
          border-radius:50%;
          transition: transform .5s;
          &.up
            transform: rotate(180deg);
        .tab-list
          width: 100%;
          background-color: #fff;
          padding: 0 .4rem .4rem .4rem;
          box-sizing: border-box;
          h3
            height: .8rem;
            line-height: .8rem;
            font-size: .37333rem;
          .lists
            overflow: hidden;
            padding-top: .53333rem;
            box-sizing: border-box;
            li
              width: 2rem;
              height: .74667rem;
              line-height: .74667rem;
              text-align: center;
              float: left;
              margin-bottom: .53333rem;
              margin-right: .4rem;
              background: #FAFAFA;
              border: 1px solid #CCC;
              border-radius: .05333rem;
              font-size: 24px;
              box-sizing: border-box;
              &:nth-child(4n)
                margin-right: 0;
    .mask
      position: fixed;
      z-index: 1;
      background: rgba(0,0,0,.5);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    .swiper-container
      height: 100%;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      /*margin-top 148px*/
    .slogon
      width: 100%
      display flex
      padding: .21333rem 0
      background #ffffff

      .slogon-all
        flex 1
        color: #B4282D
        font-size: .32rem
        text-align center

        i
          vertical-align: middle
          display: inline-block
          background-image: url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .42667rem;
          height: .42667rem;


    .shopNav
      width 100%
      height: 5.22667rem;
      background #ffffff
      clearFix()

      li
        width: 1.46667rem
        height: 2.08rem
        float: left
        margin: .13333rem .26667rem 0
        display flex
        flex-direction column

        img
          width: 1.46667rem
          height: 1.46667rem

        span
          text-align center
          color: #333333
          margin-top: .13333rem
          font-size: .32rem
          line-height: .48rem
          white-space: nowrap

    .bossRecommen
      width 100%
      background-color: #FFFFFF;
      height: 2.13333rem;

      img
        width: 100%
        height: 100%

    .shoppingGuide
      overflow: hidden;
      padding: .13333rem .4rem .4rem .34667rem;
      background: #fff;

      .shoppingGuide-item
        background-image: url(https://yanxuan.nosdn.127.net/252dbf6cdf6597f5a25940544be765c0.png);
        background-size: 100% 100%;
        display: block;
        width: 4.30333rem;
        height: 3.52rem;
        float: left;
        margin: .05333rem 0 0 .05333rem;
        padding: .26667rem 0 0 .26667rem;
        border-radius: .05333rem;

        .title
          color: #333333
          padding-left: .13333rem;
          font-size: .42667rem;

        .desc
          color: #7f7f7f
          padding-left: .13333rem
          font-size: .32rem
          margin-top .13333rem
          margin-bottom .13333rem

        img
          width: 2rem;
          height: 2rem;
          float: left;
          margin-right: .05333rem;

    .personalShop
      background #ffffff

      .personalShop-title
        width: 100%;
        height: 1.33333rem;
        line-height: 1.33333rem;
        font-size: .42667rem;
        padding: 0 .4rem;
        background: #fff;
        overflow: hidden;
        margin-bottom: .26667rem;
      .personalShop-carousel
        width: 100%

        .swiper-pagination
        .swiper-slide
          position: relative;
          width: 750px;
          height: auto

          .personalShop-item
            padding: 0 !important;
            margin-left: .26667rem;
            width: 2.88rem;
            float: left;

            .primaryPic
              background-color: #f5f5f5;
              margin-bottom: .16rem;
              width: 2.88rem;
              height: 2.88rem;

            .text
              margin-top: 0;
              margin-bottom: .13333rem;
              font-size: .32rem;
              overflow: visible;
              white-space: normal;
              line-height: .48rem;

              .name
                width: 2.88rem;
                color: #333;
                margin-top: 0;
                margin-bottom: .13333rem;
                font-size: .32rem;
                line-height: .48rem;
                white-space: normal;

              .price
                color: #b4282
    .timeToBuy
      width: 100%;
      line-height: 1.33333rem;
      padding: 0 .4rem;
      background: #fff;
      overflow: hidden;
      font-size: .42667rem;

      .timeToBuy-header
        width: 100%
        clearFix()

        .timeToBuy-title
          float left

        .countDown
          float left
          display: inline-block
          vertical-align: middle
          margin: -.02rem 0 0 .16rem

          .hour, .minutes, .seconds
            display: inline-block
            font-size: .32rem
            line-height: .48rem
            width: .48rem
            height: .48rem
            text-align: center
            background-color: #333
            border-radius: .05333rem
            color: #fff
            margin: 0 .13333rem

          .colon
            font-size: .37333rem

        .more
          float right
          display: block;
          font-size: .37333rem;
          color: #333;
          line-height: 1.33333rem;
          margin-right .67333rem

      .timeToBuy-goods
        clearFix()

        .timeToBuy-good
          text-align center
          color: #333;
          float: left;
          margin-right: .26667rem;

          img
            display block
            width: 2.88rem
            height: 2.88rem
            background: #F5F5F5;
            border-radius: 4px;

          .activityPrice
            font-size: .37333rem;
            color: #b4282d;

          .originPrice
            font-size: .32rem;
            color: #7F7F7F;
            text-decoration: line-through;

    .newGoods
      width: 100%;
      line-height: 1.33333rem;
      background: #fff;
      overflow: hidden;
      padding: 0 .2rem;
      font-size: .42667rem;

      .newGoods-header
        width: 100%
        padding: 0 .2rem;
        clearFix()

        .newGoods-title
          float left

        .more
          float right
          display: block;
          font-size: .37333rem;
          color: #333;
          line-height: 1.33333rem;
          margin-right .67333rem

      .newGoods-goods
        clearFix()

        .newGoods-good
          float left
          padding: 0 0 .17333rem !important;
          margin-left: .26667rem;
          width: 2.88rem;

          .primaryPic
            background-color: #f5f5f5;
            margin-bottom: .16rem;
            width: 2.88rem;
            height: 2.88rem;

          .text
            margin-top: 0;
            margin-bottom: .13333rem;
            font-size: .32rem;
            overflow: visible;
            white-space: normal;
            line-height: .48rem;

            .name
              width: 2.88rem;
              color: #333;
              margin-top: 0;
              margin-bottom: .13333rem;
              font-size: .32rem;
              line-height: .48rem;
              white-space: normal;

            .price
              color: #b4282d

    .popularGoods
      width: 100%;
      line-height: 0.53333rem;
      background: #fff;
      overflow: hidden;
      padding: 0 .2rem;
      font-size: .42667rem;

      .popularGoods-header
        width: 100%
        line-height: 1.33333rem;
        padding: 0 .2rem;
        clearFix()

        .popularGoods-title
          float left

        .more
          float right
          display: block;
          font-size: .37333rem;
          color: #333;
          line-height: 1.33333rem;
          margin-right .67333rem

      .spItem
        color: #333;
        width: 9.2rem;
        height: 3.73333rem;
        display: flex;
        background: #FEF0DF;
        border-radius: .05333rem;
        margin: 0 .2rem .26667rem;

        .spItem-img
          width: 3.73333rem;
          height: 3.73333rem;
          background: url(//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png)
          background-size: 100% 100%;
          margin-right: .4rem;

          img
            width: 100%
            height: auto

        .spItem-des
          height 3.73333rem
          padding 1.23333rem 0 0 .2rem

          .name
            font-size: .37333rem;
            width: 4.66667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

          .desc
            font-size: .32rem;
            color: #7F7F7F;
            width: 4.66667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

          .price
            font-size: .37333rem;
            color: #b4282d;

      .popularGoods-goods
        clearFix()

        .popularGoods-good
          float left
          padding: 0 0 .17333rem !important;
          margin-left: .26667rem;
          width: 2.88rem;

          .primaryPic
            background-color: #f5f5f5;
            margin-bottom: .16rem;
            width: 2.88rem;
            height: 2.88rem;

          .text
            margin-top: 0;
            margin-bottom: .13333rem;
            font-size: .32rem;
            overflow: visible;
            white-space: normal;
            line-height: .48rem;

            .name
              width: 2.88rem;
              color: #333;
              margin-top: 0;
              margin-bottom: .13333rem;
              font-size: .32rem;
              line-height: .48rem;
              white-space: normal;

            .price
              color: #b4282d

    .topicGoods
      width: 100%;
      line-height: 0.53333rem;
      background: #fff;
      overflow: hidden;
      padding: 0 .2rem;
      font-size: .42667rem;

      .topicGoods-header
        width: 100%
        line-height: 1.33333rem;
        padding: 0 .2rem;
        clearFix()

        .topicGoods-title
          float left

        .more
          float right
          display: block;
          font-size: .37333rem;
          color: #333;
          line-height: 1.33333rem;
          margin-right .67333rem

      .topicGoods-wrapper
        background: #fff;
        padding: 0 .4rem .4rem;
        overflow: hidden;

        .topicGoods-list
          display inline-block
          white-space: nowrap

          &::-webkit-scrollbar {
            display: none
          }
          clearFix()

          .topicGoods-item
            display inline-block
            margin-right: 31.25px;
            width: 6.4rem;
            padding-bottom: .32rem;
            background: #F5F5F5;
            border-radius: .10667rem;
            overflow: hidden;

            .topicGoods-item-img
              display: block;
              width: 6.4rem;
              height: 3.56rem;
              margin-bottom: .21333rem;
              overflow: hidden;

              img
                width: 100%;
                height: auto;
                position: relative;
                left: 50%;
                transform: translateX(-50%);

            .topicGoods-title
              height: .54667rem;
              line-height: .53333rem;
              margin-bottom: .08rem;
              overflow: hidden;
              padding: 0 .26667rem;
              white-space: nowrap;
              -ms-text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              width: 5.46667rem;
              float: left;
              font-size: .37333rem;

            .topicGoods-subtitle
              white-space: nowrap;
              overflow: hidden;
              -ms-text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              width: 5.86667rem;
              font-size: .32rem;
              color: #7F7F7F;
              padding: 0 .26667rem;


    .crowd
      width: 100%;
      line-height: 0.53333rem;
      background: #fff;
      overflow: hidden;
      padding: 0 .2rem;
      font-size: .42667rem;

      .crowd-header
        width: 100%
        line-height: 1.33333rem;
        padding: 0 .2rem;
        clearFix()

        .crowd-title
          float left

        .more
          float right
          display: block;
          font-size: .37333rem;
          color: #333;
          line-height: 1.33333rem;
          margin-right .67333rem

      .crowd-list
        border-top: 1px solid #D8D8D8;
        padding-bottom: .4rem;
        .crowd-item
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          padding: .4rem .2rem 0;
          color: #333;
          .crowd-item-img
            margin-right: .4rem;
            background: #f4f4f4;
            img
              width: 2.8rem;
              height: 2.8rem;

          .crowd-item-info
            position relative
            left 0
            top 0
            .crowd-item-name
              font-size: .37333rem;
              width: 6rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            .crowd-item-price
              margin-top: .1rem;
              font-size: .42667rem;
              color: #b4282d;
            .crowd-item-progress
              width: 4.8rem;
              height: .08rem;
              background: #D8D8D8;
              border-radius: .04rem;
              overflow: hidden;
              position: relative;
              margin-top: .29333rem
              .bg
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                background-color: #FEA438;
            .crowd-item-percent
              position: relative;
              right: -5.2rem;
              top: -.373333rem;
              font-size: .32rem;
              color: #7F7F7F;
            .crowd-item-supportNum
              margin-top: .2rem;
              font-size: .32rem;
              color: #7F7F7F;

    .ftWrap
      border-top: 1px solid rgba(0,0,0,.15);
      background-color: #414141;
      .ftContent
        text-align: center;
        padding: .22rem .26667rem .37333rem;
        width: 10rem;
        margin-right: auto;
        margin-left: auto;
        .bd
          .goApp
            margin-right: .66667rem;
            padding 0.23333rem 0.53333rem
            width: 2.29333rem;
            font-size: .32rem;
            color: #fff;
            border 1px #fff solid
          .goPc
            width: 2.29333rem;
            padding 0.23333rem 0.53333rem
            font-size: .32rem;
            color: #fff;
            border 1px #fff solid
        .copyRight
          margin-top: .48rem;
          font-size: .32rem;
          line-height: .42667rem;
          color: #999;
    .blank
      width 100%
      height 1.30667rem;
</style>
