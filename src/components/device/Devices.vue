<template>
  <div>
    <h1>Devices</h1>
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
      <template slot="Action" slot-scope="row">
        <router-link :to="{ name: 'device', params: { deviceID: row.item.id }}">
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

export default {
  name: 'Device',
  data () {
    return {
      sortBy: 'age',
      sortDesc: false,
      totalRows: 4,
      currentPage: 1,
      perPage: 10,
      filter: null,
      fields: [
        {key: 'id', sortable: true},
        {key: 'name', sortable: true},
        {key: 'imei', sortable: true},
        {key: 'status', sortable: true},
        {key: 'assign', sortable: false},
        {key: 'Action', sortable: false}
      ],
      items: [
        {
          id: 1,
          name: 'Device 1',
          imei: 'Imei 1',
          status: '1',
          assign: 'A'
        },
        {
          id: 2,
          name: 'Device 2',
          imei: 'Imei 2',
          status: '2',
          assign: 'A'
        },
        {
          id: 3,
          name: 'Device 3',
          imei: 'Imei 3',
          status: '3',
          assign: 'A'
        },
        {
          id: 4,
          name: 'Device 4',
          imei: 'Imei 4',
          status: '4',
          assign: 'A'
        },
        {
          id: 5,
          name: 'Device 5',
          imei: 'Imei 5',
          status: '5',
          assign: 'A'
        },
        {
          id: 6,
          name: 'Device 6',
          imei: 'Imei 6',
          status: '6',
          assign: 'A'
        }
      ]
    }
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
