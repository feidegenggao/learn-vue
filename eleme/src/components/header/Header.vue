<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" v-bind:src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>

        <div v-if="seller.supports" class="support">
          <!--有support内容才有下面的内容-->
          <span class="icon" v-bind:class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>

      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-icon"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i></i>
    </div>
    <div class="header-background">
      <img :src="seller.avatar">
    </div>
    <transition name="fade">
    <div v-show="detailShow" class="detail" @click="closeDetail">
      <div class="detail-main">
        <h1>{{seller.name}}</h1>
        <star :size="48" :score="2.6" class="detail-star"></star>

        <lineHeader biaoti="优惠信息"></lineHeader>

        <ul v-if="seller.supports" class="supports">
          <li v-for="item in seller.supports" class="item">
            <span class="icon" v-bind:class="classMap[item.type]"></span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
        <lineHeader biaoti="商家信息"></lineHeader>

        <div class="bulletin">
          <p class="content">
            {{seller.bulletin}}
          </p>
        </div>
      </div>
      <div class="detail-close" @click="closeDetail">
        <i>×</i>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
  import star from '@/components/star/star';
  import lineHeader from '@/components/line-header/line-header';

  export default {
    name: 'header',
    data() {
      return {
        detailShow: false,//该组件需要用到的属性值
        msg: 'This is header'
      }
    },
    methods: {//存放该组件需要的方法
      showDetail(){
        this.detailShow = true;
      },
      closeDetail(){
        this.detailShow = false;
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      //下标和字符串对应出来
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    components: {//注册star组件
      star,
      lineHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"; //这个地方引用代码不能使用alias，@这种符号进行简写。只能用这种相对路径来写

  a {
    color: #42b983;
  }

  .header {
    color: #fff;
    background: rgba(7, 17, 27, 0.5);
  }

  .header .content-wrapper {
    padding: 24px 12px 18px 24px;
    position: relative;
  }

  .header .content-wrapper .avatar {
    display: inline-block;
    vertical-align: top;
  }

  .header
    .content-wrapper
      .avatar
        img
          border-radius: 2px;

  .header .content-wrapper .content {
    display: inline-block;
    margin-left: 16px;
  }

  .header .content-wrapper .content .title {
    margin: 2px 0 8px 0;
  }

  .header
    .content-wrapper
      .content
        .title
          .brand
            display: inline-block; //span标签只有设置该属性才可以设置宽高，否则宽高无效
            vertical-align: top; //对齐方式
            width: 30px;
            height: 18px;
            bg-image('brand');
            background-size: 30px 18px;
            background-repeat: no-repeat;
          .name
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px; //行间距
            font-weight: bold;
        .description
          margin-bottom: 10px;
          font-size: 12px;
          line-height: 12px;
        .support
          .icon
            display: inline-block;
            vertical-align: top; //这个没用。。
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px;
            background-repeat: no-repeat;
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height: 12px;
            font-size: 10px;

      .support-count
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background: rgba(0, 0, 0, 0.2);
        text-align: center;
        .count
          font-size: 10px;
    .bulletin-wrapper
      background: rgba(7, 17, 27, 0.2);
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; //font-size: 0;//消除icon和text之间的间隙
      .bulletin-icon
        display: inline-block;
        vertical-align: top;
        width: 22px;
        height: 12px;
        margin-top: 8px;
        bg-image('bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      .bulletin-text
        vertical-align: top;
        margin: 0 4px;
        font-size: 10px;
        font-weight: 200;
    .detail
      position: fixed;
      z-index: 100;
      min-height: 100vh;
      overflow: scroll;
      bottom: 0; //为啥，这个地方就可以滚动了？
      display: flex;
      flex-flow: column;
      top: 0;
      width 100%
      text-align center
      transition: all 0.5s
      background-color: rgba(7, 17, 27, 0.8)
    .fade-enter-active, .fade-leave-active
      transition: opacity .5s
    .fade-enter, .fade-leave-to
      opacity: 0
  .detail-main
        margin-top: 64px;
        flex: 1;
        .detail-star
          margin-top: 18px;
          padding: 2px;
        .supports
          text-align left
          width 80%
          margin:0 auto //水平居中
          .item
            padding:0 12px
            margin-bottom 12px
            font-size 0
            .icon
              width 32px;
              height 32px;//这个地方是要展示的图片的区块的大小，如果该区域比background-size大，那么，默认会repeat。指定no-repeat，那么就会值展示一个
              background-size 32px//这个地方指定的是图片最小的大小
              background-repeat no-repeat
              display inline-block
              &.decrease
                bg-image('decrease_2')
              &.discount
                bg-image('discount_2')
              &.special
                bg-image('special_2')
              &.invoice
                bg-image('invoice_2')
              &.guarantee
                bg-image('guarantee_2')
            .text
              color: white
              font-size 16px
              line-height 16px
              margin-left 6px
              vertical-align 8px
        .bulletin
          width 80%
          margin:0 auto //水平居中
          .content
            padding 0 12px
            line-height 24px
            font-size 12px
            text-align left
      .detail-close
        color: red;
        font-size: 42px;
        height: 64px;
        text-align: center;

  .header
    position: relative;
    overflow: hidden;
    .header-background
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
      img
        width: 100%;
        height: 100%;
</style>
