<template>
  <div>
    <div class="form-group">
      <label for="equipment-id">Employee ID</label>
      <input type="text" class="form-control" id="equipment-id" disabled v-model="$route.params.equipmentID">
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Name" v-model="equipment.name"
             :disabled="isUpdatedMode">
    </div>
    <div class="form-group">
      <label for="assigner">Assigner</label>
      <input type="text" class="form-control" id="assigner" placeholder="Assigner" v-model="equipment.assigner"
             :disabled="isUpdatedMode">
    </div>
    <div class="form-group">
      <label for="status">Status</label>
      <input type="text" class="form-control" id="status" placeholder="Status" v-model="equipment.status"
             :disabled="isUpdatedMode">
    </div>
    <div class="form-group">
      <label>QR Code</label>
      <qr-code id="section-to-print" :text="qrContent"></qr-code>
      <i @click="print" class="fas fa-print"></i>
    </div>
    <div class="form-group">
      <label>Properties</label>
      <b-table
        :items="properties"
        :fields="fields"
      >
      </b-table>

    </div>
  </div>
</template>

<script>
  import VueQRCodeComponent from 'vue-qrcode-component'
  import equipmentAPI from '../../api/equipment'

  export default {
    name: 'Device',
    data() {
      return {
        isUpdatedMode: this.$route.params.mode,
        equipment: {},
        properties: [],
        fields: [
          {key: 'property', sortable: false},
          {key: 'value', sortable: false}
        ],
        qrContent: ''
      }
    },
    methods: {
      print() {
        window.print();
      }
    },
    components: {
      'qr-code': VueQRCodeComponent
    },
    created() {
      equipmentAPI.getEquipment(this.$route.params.equipmentID)
        .then(response => {
          this.equipment = response.data.data
          this.qrContent = response.data.data.id
          this.properties = JSON.parse(response.data.data.properties)
        })
        .catch(() => {
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fa-print {
    font-size: 25px;
    margin: 10px 0;
  }
  @media print {
    body * {
      visibility: hidden;
    }
    #section-to-print, #section-to-print * {
      visibility: visible;
    }
    #section-to-print {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
</style>
