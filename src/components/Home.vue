<template>
  <div>
    <div class="qr-stream">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
    </div>
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
        <b-btn @click="goToDetail(equipment.assigner_id)">Go to detail</b-btn>
      </div>
      <div v-else>
        {{errorMessage}}
      </div>
    </b-modal>
    <!--<div v-if="loadingVisiable" class="spinner">
      <i class="fa fa-spinner fa-spin" style="font-size:24px"></i>
    </div>-->
    <!--<b-btn @click="onDecode(123)">Show</b-btn>-->
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
        // loadingVisiable: 0,
        errorMessage: ''
      }
    },
    methods: {
      onDecode(decodedString) {
        // this.loadingVisiable = 1
        equipmentAPI.getEquipment(decodedString).then(response => {
          this.status = response.data.status
          this.equipment = response.data.data
          this.errorMessage = 'Equipment Not Found!'
          // this.loadingVisiable = 0

        }).catch(() => {
          this.status = 0
          this.errorMessage = "Server Error!"
          // this.loadingVisiable = 0

        }).then(function () {
        })

        this.$refs.informationModal.show()

      },
      goToDetail(assignerID) {
        this.$router.push({name: 'employee', params: {employeeID: assignerID, mode: 1}})
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
  /*.spinner {
    position: absolute;
    top:0;
    left: 0;
    text-align: center;
    padding-top: 50%;
    width: 100%;
    height: 100%;
    background: black;
    opacity: .4;
    color: white;
  }*/
  .qr-stream {
    margin: 10px;
    border: 1px solid black;
  }
</style>
