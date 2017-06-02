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
    </div>
    <div class="bulletin-wrapper"></div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      msg: 'This is header'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";//这个地方引用代码不能使用alias，@这种符号进行简写。只能用这种相对路径来写

h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}

.header {
  color: #fff;
  background: #000;
}

.header .content-wrapper{
  padding: 24px 12px 18px 24px;
}

.header .content-wrapper .avatar{
  display: inline-block;
  vertical-align:top;
}
.header
  .content-wrapper
    .avatar
      img
        border-radius:2px;


.header .content-wrapper .content{
  display: inline-block;
  margin-left: 16px;
}

.header .content-wrapper .content .title{
  margin: 2px 0 8px 0;
}


.header
  .content-wrapper
    .content
      .title
        .brand
          display: inline-block;//span标签只有设置该属性才可以设置宽高，否则宽高无效
          vertical-align: top;//对齐方式
          width: 30px;
          height: 18px;
          bg-image('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        .name
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;//行间距
          font-weight: bold;//加粗
      .description
        margin-bottom:10px;
        font-size: 12px;
        line-height: 12px;
      .support
        .icon
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right:4px;
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

</style>
