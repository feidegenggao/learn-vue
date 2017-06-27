<template>
  <div class="goods">
    <div class="goods-title">
      <ul class="goods-title-ul">
        <li v-for="item in goods" class="goods-title-li">
          <span class="icon" v-bind:class="titleIconMap[item.type]" v-if="item.type > 0"></span>
          <span class="text">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="goods-content">
      content
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
export default{
    data(){
        return {
          goods:[]
        }
    },
    created(){
      this.titleIconMap=['decrease', 'discount', 'special', 'invoice', 'guarantee'];

      this.$http.get('/api/goods').then(response => {
        let data = response.body;
        if(data.errno === ERR_OK){
          this.goods = data.data;//赋值给seller对象
          console.log(this.goods)
        }
      }, response => {
        console.log("response:" + response)
      })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"

  .goods
    display flex
    .goods-title
      width: 80px
      background: #f3f5f7
      .goods-title-ul
        margin: 0px
        padding:0 12px
      .goods-title-li
        list-style-type none
        margin: 0
        height: 54px
        border-bottom solid
        border-bottom-width 1px
        border-bottom-color rgba(7, 17, 27, 0.1)
        font-weight 200
        line-height 14px
        vertical-align middle
      .icon
        width 12px
        height 12px
        display: inline-block
        background-size 12px
        background-repeat no-repeat
        &.special
          bg-image('special_2')
        &.decrease
          bg-image('decrease_2')
        &.discount
          bg-image('discount_2')
        &.invoice
          bg-image('invoice_2')
        &.guarantee
          bg-image('guarantee_2')
      .text
        font-size 12px
        color: rgb(7, 17, 27)
    .goods-content
      background: grey
      flex 1
      font-size 12px
</style>
