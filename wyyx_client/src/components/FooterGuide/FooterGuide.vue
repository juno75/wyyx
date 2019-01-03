<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goto('./msite')" :class="{on: $route.path==='/msite'}">
    <span class="item_icon">
      <i class="iconfont icon-yidiandiantubiao04"></i>
    </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('./category')" :class="{on: $route.path==='/category'}">
    <span class="item_icon">
      <i class="iconfont icon-fenlei"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('./general')" :class="{on: $route.path==='/general'}">
    <span class="item_icon">
      <i class="iconfont icon-shiwutupian"></i>
    </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('./cart')" :class="{on: $route.path==='/cart'}">
    <span class="item_icon">
      <i class="iconfont icon-cart"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('./profile')" :class="{on: $route.path==='/profile'}">
    <span class="item_icon">
      <i class="iconfont icon-tubiaozhizuomoban"></i>
    </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>

    export default {

      methods: {
        goto(path) {
          this.$router.replace(path)
        }
      }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins";
  .footer_guide
      width: 100%;
      height:1.30667rem;
      display: flex;
      text-align: center;
      position:fixed;
      bottom: 0;
      border-top:1px solid #d9d9d9;
      z-index 100
      background #ffffff
      a
        display: flex;
        flex: 1;
        text-align: center;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        color:#666;
        &.on
          color:#b4282d;
        i
          font-size: 0.5333rem;
        span
          font-size: 0.32rem;

</style>


