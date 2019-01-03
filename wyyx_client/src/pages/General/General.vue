<template>
<div>
  <div class="header-wrap">

    <div class="left">
      <i class="iconfont icon-yidiandiantubiao04"></i>
    </div>
    <div class="center">
      <a href="javascript:;" class="item active">发现</a>
      <a href="javascript:;" class="item">甄选家</a>
    </div>
    <div class="right">
      <i class="iconfont icon-sousuo1"></i>
      <i class="iconfont icon-gouwuche"></i>
    </div>

</div>
  <div class="tab">
    <div class="tab-wrapper">
      <a class="item active" href="javascript:;">推荐</a>
      <a class="item" href="javascript:;">达人</a>
      <a class="item" href="javascript:;">上新</a>
      <a class="item" href="javascript:;">晒单</a>
      <a class="item" href="javascript:;">HOME</a>
    </div>
  </div>

  <Split/>
  <div class="content">
    <div class="content-item">
        <div class="u-name">
          <span class="ava">
            <img src="https://yanxuan.nosdn.127.net/a911393b603a87e74824290f54b37b24.png?imageView&amp;quality=65&amp;thumbnail=56y56" alt="">
          </span>
          <span>选妹</span>
        </div>
        <div class="title">网易CEO丁磊的年度好货推荐，全场超低三石福利价！低至50%Off
        </div>
        <div class="u-pic">
          <img src="https://yanxuan.nosdn.127.net/d4b80051264bd13dac9e9f07a77f46ff.jpg?imageView&amp;quality=65&amp;thumbnail=690y376" alt="">
        </div>
        <div class="u-rcount">
          <i class="ico"></i>
          <span>43.1k人看过</span>
        </div>
    </div>
    <Split/>
  </div>

</div>
</template>

<script>

  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header-wrap
    position: fixed;
    width 100%
    height: 1.33333rem;
    background-color: #fafafa;
    box-sizing: border-box;
    border-bottom: .01rem solid #d9d9d9;
    z-index: 1;
    max-width: 768px;
    margin: auto;
    overflow: hidden;
    padding: 0 .26rem 0 .24rem;
    .left
      display: block;
      float: left;

      i
        display: block;
        font-size .56rem
        width: .46rem;
        height: 1.3333rem;
        line-height 1.3333rem

    .center
      position: absolute;
      width: 3.2rem;
      height: 100%;
      line-height: 1.33333rem;
      text-align: center;
      left: 50%;
      top: 0;
      margin-left: -1.6rem;
      font-size: .4rem;
      color: #7F7F7F;
      z-index: 1;
      a
        padding: 0 .16rem;
        vertical-align: middle;

        &.active
          font-size: .6rem;
          color: #b4282d;
          font-weight: bold;
    .right

      float: right;
      height: 1rem;
      margin-right: .02rem;
      i

        font-size .56rem
        width: .46rem;
        height: 1.3333rem;
        line-height 1.3333rem
  .tab
    top: 1.33333rem;
    width: 100%;
    height: 1rem;
    background: #fafafa;
    border-bottom: .01rem solid #d9d9d9;
    border-top: .01rem solid #d9d9d9;
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    left: 0;
    z-index: 20;
    .tab-wrapper
      width: 100%;
      height: 1rem;
      padding-bottom: .2rem;
      white-space: nowrap;
      overflow-y: hidden;
      overflow-x: auto;
      display: flex;
      justify-content space-around
      .item
        display: inline-block;
        height: 1rem;
        line-height: 1rem;
        box-sizing: border-box;
        font-size: .4rem;
        color: #7F7F7F;
        padding: 0 .08rem;
        margin: 0 .2rem;
        vertical-align: middle;
        &.active
          color: #B4282D;
          border-bottom: .04rem solid #B4282D;
  .content
    padding: 2.2rem 0 .98rem 0;
    .content-item
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      box-sizing: border-box;
      padding: .36rem .3rem;
      display: block;
      .u-name
        margin-bottom: .24rem;
        font-size: .4rem;
        color: #333;
        line-height: .36rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .ava
          width: .56rem;
          height: .56rem;
          overflow: hidden;
          border-radius: 50%;
          box-sizing: border-box;
          border: .01rem solid #d9d9d9;
          margin-right: .12rem;
        span
          display: inline-block;
          vertical-align: middle;
      .title
        font-size: .48rem;
        color: #333;
        line-height: .7rem;
        margin: -.08rem 0 .16rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        font-family: PingFangSC-Regular;
      .u-pic
        position: relative;
        margin-bottom: .2rem;
        overflow: hidden;
        border-radius: .08rem;
        background: #f0f0f0;
        img
          width 100%
          height 100%
          display: block
      .u-rcount
        margin-bottom: -.16rem;
        font-size: .3rem;
        color: #999;
        line-height: .32rem;
        margin-top: .18rem;
        .ico
          display: inline-block;
          width: .28rem;
          height: .2rem;
          vertical-align: middle;
          margin-right: .08rem;
        span
          display: inline-block;
          vertical-align: middle;
</style>
