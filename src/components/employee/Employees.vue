<template>
  <div>
    <h1>Employees</h1>
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Search" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search"/>
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-table :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :current-page="currentPage"
             :per-page="perPage"
             :items="items"
             :filter="filter"
             :fields="fields"
             @filtered="onFiltered">
      <template slot="index" slot-scope="data">
        {{data.index + 1}}
      </template>
      <template slot="action" slot-scope="data">
        <router-link :to="{ name: 'user', params: { userID: data.index + 1 }}">
          <i class="fas fa-edit"></i>
        </router-link>
      </template>
    </b-table>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import employeeAPI from '../../api/employee'

  export default {
    name: 'Employees',
    data() {
      return {
        sortBy: 'age',
        sortDesc: false,
        totalRows: 0,
        currentPage: 1,
        perPage: 10,
        filter: null,
        fields: [
          'index',
          {key: 'name', sortable: true},
          {key: 'status', sortable: true},
          {key: 'action', sortable: false}
        ],
        items: []
      }
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    },
    created() {
      employeeAPI
        .getEmployees()
        .then(response => {
          this.items = response.data.data
          this.totalRows = this.items.length
          localStorage.employees = JSON.stringify(response.data.data)
        })
        .catch(() => {
          this.employees = JSON.parse(localStorage.employees)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
