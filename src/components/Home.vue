<template>
  <div>
    <qrcode-stream @decode="onDecode"></qrcode-stream>
    <br>
    <label>Choose a QR file:</label>
    <qrcode-capture @decode="onDecode"/>

    <b-modal ref="informationModal" title="Equipment Informations" centered ok-only>
      <div v-if="status">
        <p>
          Equipment ID: {{equipment.id}}
        </p>
        <p>
          Equipment Name: {{equipment.name}}
        </p>
        <p>
          Employee Name: {{equipment.assigner}}
        </p>
        <p>
          Status: {{equipment.status}}
        </p>
      </div>
      <div v-else>
        {{errorMessage}}
      </div>
    </b-modal>
  </div>
</template>

<script>
  import {QrcodeStream, QrcodeCapture} from 'vue-qrcode-reader'
  import equipmentAPI from '../api/equipment'

  export default {
    name: 'Home',
    data() {
      return {
        equipment: {},
        status: 0,
        errorMessage: ''
      }
    },
    methods: {
      onDecode(decodedString) {
        // this.qrContent = decodedString
        // this.$store.commit('addUserID', decodedString)

        equipmentAPI.getEquipment(decodedString).then(response => {
          this.status = response.data.status
          this.equipment = response.data.data
          this.errorMessage = 'Equipment Not Found!'
        }).catch(() => {
          this.status = 0
          this.errorMessage = "Server Error!"
          // console.log(error)
        })
        this.$refs.informationModal.show()
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
