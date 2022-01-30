<template>
  <div class="app d-flex flex-column"> 
  <gb-header/>
  <gb-search/>
  <gb-table/>
  <gb-footer/>
  </div>
</template>

<script>
import GbHeader from './components/GbHeader.vue'
import GbFooter from './components/GbFooter.vue'
import GbTable from './components/GbTable.vue'
import GbSearch from './components/GbSearch.vue'
export default {
  name: 'App',
  components: {
    GbHeader,
    GbSearch,
    GbTable,
    GbFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
#app {
  text-align: center;
  margin-top: 60px;
}
html, body {
  background-color:#282a36 ;
}
.app{
  background: #282a36;
}

</style>
