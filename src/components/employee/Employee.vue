<template>
  <div>
    <form>
      <div class="form-group">
        <label for="user-id">User ID</label>
        <input type="text" class="form-control" id="user-id" disabled v-model="$route.params.userID">
      </div>
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input type="text" class="form-control" id="first-name" placeholder="First Name" v-model="user.first_name">
      </div>
      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input type="text" class="form-control" id="last-name" placeholder="Last Name" v-model="user.last_name">
      </div>
      <div class="form-group">
        <img :src="user.avatar" alt="No Avatar" width="100px"/>
        <br>
        <label for="avatar">Avatar</label>
        <input type="file" class="form-control" id="avatar">
      </div>
      <div class="form-group">
        <label for="devices">Devices</label>

        <multi-select :options="options"
                      :selected-options="items"
                      placeholder="select item"
                      @select="onSelect">
        </multi-select>

      </div>
      <input type="button" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
  import userAPI from '../../api/employee'
  import {MultiSelect} from 'vue-search-select'

  export default {
    name: "User",
    data() {
      return {
        user: {},
        items: [],
        options: [
          {value: '1', text: 'aa' + ' - ' + '1'},
          {value: '2', text: 'ab' + ' - ' + '2'},
          {value: '3', text: 'bc' + ' - ' + '3'},
          {value: '4', text: 'cd' + ' - ' + '4'},
          {value: '5', text: 'de' + ' - ' + '5'}
        ]
      }
    },
    methods: {
      onSelect(items) {
        this.items = items
      },
    },
    mounted() {
      userAPI
        .getUser(this.$route.params.userID)
        .then(response => {
          this.user = response.data.data
          localStorage.users = JSON.stringify(response.data.data)
        })
        .catch(() => {
          this.users = JSON.parse(localStorage.users)
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
