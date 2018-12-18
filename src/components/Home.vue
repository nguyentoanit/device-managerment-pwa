<template>
  <div class="hello">
    <qrcode-stream @decode="onDecode"></qrcode-stream>
    <br>
    <label>Choose a QR file:</label>
    <qrcode-capture @decode="onDecode" />
  </div>
</template>

<script>
import { QrcodeStream, QrcodeCapture } from 'vue-qrcode-reader'

export default {
  name: 'Home',
  data () {
    return {
      qrContent: ''
    }
  },
  methods: {
    onDecode (decodedString) {
      this.qrContent = decodedString
      this.$store.commit('addUserID', decodedString)
      alert(decodedString)
    }
  },
  components: {
    QrcodeStream,
    QrcodeCapture
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
