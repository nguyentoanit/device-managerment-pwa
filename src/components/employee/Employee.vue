<template>
  <div>
    <form>
      <div class="form-group">
        <label for="employee-id">Employee ID</label>
        <input type="text" class="form-control" id="employee-id" disabled v-model="$route.params.employeeID">
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Name" v-model="employee.name" :disabled="isUpdatedMode">
      </div>
      <div class="form-group">
        <label for="devices">Devices</label>

        <multi-select :options="options"
                      :selected-options="items"
                      :isDisabled="isUpdatedMode"
                      placeholder="select item"
                      @select="onSelect">
        </multi-select>

      </div>
      <input :disabled="isUpdatedMode" type="button" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
  import employeeAPI from '../../api/employee'
  import equipmentAPI from '../../api/equipment'

  import {MultiSelect} from 'vue-search-select'
  import _ from 'lodash'

  export default {
    name: "Employee",
    data() {
      return {
        isUpdatedMode: this.$route.params.mode,
        employee: {},
        items: [],
        options: []
      }
    },
    methods: {
      onSelect(items) {
        this.items = items
      },
    },
    mounted() {
      employeeAPI.getEmployee(this.$route.params.employeeID)
        .then(response => {
          this.employee = response.data.data
          this.items = _.map(response.data.data.assigned_equipments, function (item) {
            return {value: item.id, text: item.id + ' - ' + item.name}

          })
          localStorage.employees = JSON.stringify(response.data.data)
        })
        .catch(() => {
          this.employees = JSON.parse(localStorage.employees)
        })

      equipmentAPI.getEquipments()
        .then(response => {
          this.options = _.map(response.data.data, function (item) {
            return {value: item.id, text: item.id + ' - ' + item.name}
          })
        })
        .catch(() => {
          this.equipments = JSON.parse(localStorage.equipments)
        })
    },
    components: {
      MultiSelect
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
