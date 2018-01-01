<template>
  <nav class="navbar navbar-default navbar-fixed-bottom hidden-xs " role="navigation">
    <div class="container-fluid" style="padding-bottom : 0px ; " >
      <div class="" style="float:right;">
        <div class="noMargin" style="display:inline-block; padding : 0px ;">
          <h4 class="noMargin" style="padding : 0px ;"><small>若有幫助到你，歡迎贊助我</small></h4>
          <h4 class="noMargin" style="padding : 0px ;"><small>email:tentenlee100@yahoo.com.tw</small></h4>
        </div>
        <a style=" display:inline; margin-bottom: 5px; margin-right: 10px; margin-left: 10px;" target="_blank" href="https://p.allpay.com.tw/Vzg5f">
          <img style="height: 40px; display:inline; margin-bottom: 10px;"  src="https://payment.allpay.com.tw/Content/themes/WebStyle201404/images/allpay.png" />
        </a>
        <form class="noMargin" style=" display:inline; "   target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
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
.noMargin {
  margin: 0;
}
</style>
