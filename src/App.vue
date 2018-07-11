<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <sub-navbar></sub-navbar>
    <vue-snotify class="material"></vue-snotify>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
import SubNavbar from './components/SubNavbar'

export default {
  name: 'app',
  components: {
    Navbar,
    SubNavbar
  }
}
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/bootstrap.scss';
.material {
  @import "~vue-snotify/styles/material.css"
}
body {
  padding-top: 60px;
  padding-bottom: 70px;
  background-color: #fafafa;
}
.date-picker{
  font-size: 16px;
}
</style>
