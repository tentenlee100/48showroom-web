<template>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
          <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      <router-link to="/">
        <a class="navbar-brand">SHOWROOM 48</a>
      </router-link>
    </div>
    <collapse v-model="showNavbar" class="navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
        <router-link exact-active-class="active" tag="li" to="/" @click.native="showNavbar = false">
          <a>正在直播中</a>
        </router-link>
        <router-link exact-active-class="active" tag="li" to="/getUrl" @click.native="showNavbar = false">
          <a>取得觀看url</a>
        </router-link>
        <li>
          <a @click="showNavbar = false" href="http://sr48.net/" target="_blank">日飯分析</a>
        </li>
        <dropdown tag="li">
          <a class="dropdown-toggle" role="button" data-role="trigger">各活動頁<span class="caret"></span></a>
          <template slot="dropdown">
              <template v-for="page in pages" >
                <li><a @click="showNavbar = false" :href="page.url"  target="_blank">{{page.name}}</a></li>
              </template>
          </template>
        </dropdown>
      </ul>
    </collapse>
  </div>
</nav>
</template>
<script>
import {
  Dropdown,
  Navbar,
  Collapse
} from 'uiv'
export default {
  name: "navbar",
  data: () => ({
    showNavbar: false,
    pages: [{
        url: "https://www.showroom-live.com/campaign/akb48_sr",
        name: "AKB48 Group"
      },
      {
        url: "https://www.showroom-live.com/campaign/nogizaka46_sr",
        name: "乃木坂46"
      },
      {
        url: "https://www.showroom-live.com/campaign/keyakizaka46_sr",
        name: "櫸板46"
      },
      {
        url: "https://www.showroom-live.com/campaign/Equal_LOVE",
        name: "=LOVE"
      },
      {
        url: "https://www.showroom-live.com/campaign/akbdraft3rd",
        name: "第3回 AKB48グループドラフト会議"
      },
      {
        url: "https://www.showroom-live.com/campaign/last-idol",
        name: "ラストアイドル LAST IDOL"
      }

    ],
  }),
  components: {
    Dropdown,
    Navbar,
    Collapse
  }
}
</script>
<style scoped>
</style>
