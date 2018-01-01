<template>
  <div id="">
    <div class="container" >
        <div class="jumbotron">
            <div class="row">
                <div class="col-lg-12">
                    <p class="lead">show room URL:</p>
                    <br/>
                </div>
                <div class="col-lg-12">

                    <div class="input-group">
                        <input type="text" class="form-control" name="url" v-model="enterUrl" placeholder="輸入SHOW ROOM 網址">
                        <span class="input-group-btn">
                            <button type="submit" class="btn btn-primary" @click="callGeturlApi">取得</button>
                        </span>

                    </div>
                </div>
                <div class="col-lg-12">
                    <p  class="text-right">
                        <button type="button" class="btn btn-xs btn-link">
                            <a href="https://www.ptt.cc/bbs/AKB48/M.1465937353.A.1BA.html" target="_blank" class=".alert-link" >使用說明</a>
                        </button>
                    </p>
                </div>

            </div>
        </div>
    </div>

    <div class="container">

        <div class="jumbotron dark-matter">

            <label>觀看URL:</label>
            <input type="url" v-model="resultUrl" class="form-control"/>
            <p  class="text-right">

                <button class="btn btn-xs btn-warning" v-clipboard:copy="resultUrl" v-clipboard:success="onCopy"  v-clipboard:error="onError">
                    複製到剪貼簿
                </button>
            </p>
            <div v-if="loading" class="alert alert-info" role="alert">解析中</div>
            <div v-if="resultAlert" class="alert alert-danger" role="alert">失敗</div>
        </div>
        <footer class="footer"><p class="text-center">若遇到有任何無法解析的網址 請麻煩把網址寄PTT站內給tentenlee</p></footer>

    </div>
  </div>
</template>
<script>
import ApiUrl from '@/config/ApiUrl'


export default {
  name: "get-url",
  data: () => ({
    loading: false,
    enterUrl: "",
    resultUrl: "",
    resultAlert: false,
  }),
  methods: {
    onCopy(e) {
      this.$snotify.warning("複製成功", "", {
        timeout: 3000,
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });

    },
    onError(e) {
      alert('Failed to copy texts')
    },
    callGeturlApi() {
      this.loading = true
      this.resultAlert = false
      const body = {
        url: this.enterUrl
      }
      this.$http.post(ApiUrl.getUrl, body,{emulateJSON:true}).then(response => {
        // get body data
        console.log(response.body);
        this.resultUrl = response.body
        this.loading = false
        this.resultAlert = false

      }, response => {
        this.loading = false
        this.resultAlert = true
      })
    }
  }
}
</script>
<style scoped>
</style>
