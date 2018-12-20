<template>
  <div>
    <h1>Users</h1>
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
      <template slot="Action" slot-scope="data">
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
  import userAPI from '../../api/user'

  export default {
    name: 'Users',
    data() {
      return {
        sortBy: 'age',
        sortDesc: false,
        totalRows: 4,
        currentPage: 1,
        perPage: 10,
        filter: null,
        fields: [
          'index',
          {key: 'last_name', sortable: true},
          {key: 'first_name', sortable: true},
          {key: 'age', sortable: true},
          {key: 'isActive', sortable: false},
          {key: 'Action', sortable: false}

        ],
        items: [
          {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
          {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
          {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
          {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'}
        ]
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
      userAPI
        .getUsers()
        .then(response => {
          this.users = response.data.data
          localStorage.users = JSON.stringify(response.data.data)
        })
        .catch(() => {
          this.users = JSON.parse(localStorage.users)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
