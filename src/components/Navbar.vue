<template>
<b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
  <b-navbar-brand to="/">SHOWROOM 48</b-navbar-brand>
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/" exact>正在直播中</b-nav-item>
      <!-- <b-nav-item to="/getUrl" exact>取得觀看url</b-nav-item> -->
      <b-nav-item href="http://sr48.net/" target="_blank" exact>日飯分析</b-nav-item>

      <b-nav-item-dropdown text="各活動頁" extra-toggle-classes="nav-link-custom" right>
        <template v-for="elem in pages" >
          <b-dropdown-item :key="elem.key" :href="elem.url" target="_blank" >{{elem.name}}</b-dropdown-item>
        </template>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>

<!--
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
</nav> -->
</template>
<script>
import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav'
import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle'
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item'
import bNavItemDropdown from 'bootstrap-vue/es/components/nav/nav-item-dropdown'
import bDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item'

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
        url: "https://www.showroom-live.com/event/ngt48_2nd_audition",
        name: "NGT48 第2期生オーディション"
      },
      {
        url: "https://www.showroom-live.com/campaign/last-idol",
        name: "ラストアイドル LAST IDOL"
      }

    ],
  }),
  components: {
    'b-navbar': bNavbar,
    'b-navbar-nav': bNavbarNav,
    'b-navbar-brand': bNavbarBrand,
    'b-navbar-toggle': bNavbarToggle,
    'b-collapse': bCollapse,
    'b-nav-item': bNavItem,
    'b-nav-item-dropdown': bNavItemDropdown,
    'b-dropdown-item': bDropdownItem
  }
}
</script>
<style scoped>
</style>
