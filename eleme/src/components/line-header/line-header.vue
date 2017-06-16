<template>
<div class="title">
    <div class="line"></div>
    <div class="text">{{wz}}</div>
    <div class="line"></div>
</div>
</template>

<script >
export default {
    props: {
        biaoti: {
            type: String,
            required: true
        }
    },
    data: function () {
        return {
            wz : this.biaoti
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.title
    display flex
    width 80%
    margin 28px auto 24px auto
    text-align center
    .line
        flex 1
        border-bottom 1px solid rgba(255, 255, 255, 0.2)
    .text
        font-size 14px
        font-weight 700
        color rgb(255, 255, 255)
        line-height 14px
</style>
