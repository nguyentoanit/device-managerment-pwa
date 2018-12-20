<template>
  <div>
    QR Code:
    <qr-code :text="qrContent"></qr-code>
  </div>
</template>

<script>
  import VueQRCodeComponent from 'vue-qrcode-component'

  export default {
    name: 'Device',
    data() {
      return {
        qrContent: 'Hello QR Code'
      }
    },
    methods: {
      func1() {
      }
    },
    components: {
      'qr-code': VueQRCodeComponent
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
