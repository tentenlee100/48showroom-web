<template>
  <nav class="navbar d-none d-sm-block fixed-bottom navbar-light py-0 pt-1" style="background-color: #e8e8e8;">
    <div class="container-fluid p-0" >
      <div class="ml-auto d-flex">
          <div class="m-0 mr-2 d-line-block">
            <h6 class="m-0" style="padding : 0px ;"><small>若有幫助到你，歡迎贊助我</small></h6>
            <h6 class="m-0" style="padding : 0px ;"><small>email:tentenlee100@yahoo.com.tw</small></h6>
          </div>
          <a class="m-0 mr-2" target="_blank" href="https://p.allpay.com.tw/Vzg5f">
            <img style="height: 40px; display:inline; margin-bottom: 10px;"  src="https://payment.allpay.com.tw/Content/themes/WebStyle201404/images/allpay.png" />
          </a>
          <form class="m-0 d-line" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="66CUWZBERZFVN">
            <button name="submit" style=" border:none; background-color: rgba(0,0,0,0.0)">
              <img type="image" style="margin-bottom: 12px;"  src="../assets/paypal.png" border="0"  alt="PayPal － 更安全、更簡單的線上付款方式！"/>
            </button>
            <img alt="" border="0" src="https://www.paypalobjects.com/zh_TW/i/scr/pixel.gif" width="1" height="1">
          </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "sub-navbar",
  data: () => ({

  })
}
</script>
<style scoped>

</style>
