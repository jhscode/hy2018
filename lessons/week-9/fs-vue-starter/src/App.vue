<template>
  <div id="app">
    <h1>Giphy App</h1>
    <input 
      placeholder="Search for a gif from giphy!"
      v-model="keyword"
      @input="searchGiphy" />
    <img 
      v-for="gif in gifs"
      :src="gif.images.fixed_height.url"
      :key="gif.slug" />

  </div>
</template>

<script>
import giphyClient from './giphyClient'

export default {
  name: 'app',
  components: {},
  data() {
    return {
      keyword: '',
      gifs: []
    }
  },
  methods: {
    async searchGiphy() {
      // console.log(this.keyword)
      const res = await giphyClient.search(this.keyword)
      // console.log(res)
      this.gifs = res.data
    }
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
</style>
