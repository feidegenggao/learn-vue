<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header><!--绑定seller对象-->

    <div class="link">
      <router-link to="/goods">商品</router-link>
      <router-link to="/rating">评价</router-link>
      <router-link to='/seller'>商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '@/components/header/Header'
const ERR_OK = 0;
export default {
  data() {
    return {
      seller: {

      }
    };
  },
  created() {
    this.$http.get('/api/seller').then(response => {
      let data = response.body;
      // console.log(data)
      if(data.errno === ERR_OK){
        this.seller = data.data;//赋值给seller对象
        console.log(this.seller)
      }
    }, response => {
      console.log("response:" + response)
    })
  },
  name: 'app',
  components: {//需要注册后使用
    'v-header' : header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link .router-link-active {
  color: rgb(240, 20, 20); 
}

.link{
  display: flex;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1)
}

.link a {
  flex: 1;
   font-size: 20px;
   display: block;
   text-decoration: none;
   color: rgb(77, 85, 93)
}

</style>
