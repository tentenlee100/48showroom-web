<template>
<b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
  <b-navbar-brand to="/">SHOWROOM 48</b-navbar-brand>
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/" exact>開台紀錄</b-nav-item>
      <b-nav-item to="/schedule" exact>預計開台</b-nav-item>
      <!-- <b-nav-item to="/getUrl" exact>取得觀看url</b-nav-item> -->
      <!-- <b-nav-item href="http://sr48.net/" target="_blank" exact>日飯分析</b-nav-item> -->

      <b-nav-item-dropdown text="各活動頁" extra-toggle-classes="nav-link-custom" right>
        <template v-for="elem in pages" >
          <b-dropdown-item :key="elem.key" :href="elem.url" target="_blank" >{{elem.name}}</b-dropdown-item>
        </template>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>
<script>

export default {
  name: "navbar",
  data: () => ({
    showNavbar: false,
    pages: [{
        url: "https://www.showroom-live.com/campaign/akb48_sr",
        name: "AKB48 Group"
      },
      {
        url: "https://www.showroom-live.com/event/tpe48_tgctym18 ",
        name: "TPE48成員 TGC富山2018時尚秀登台機會爭奪戰"
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
        url: "https://www.showroom-live.com/campaign/last-idol",
        name: "ラストアイドル LAST IDOL"
      }

    ],
  }),
  components: {
  }
}
</script>
<style scoped>
</style>
