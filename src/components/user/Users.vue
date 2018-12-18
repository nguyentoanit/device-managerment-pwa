<template>
  <div class="hello">
    <h1>Users</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>
            <img :src="user.avatar">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import userAPI from '../../api/user'
export default {
  name: 'Users',
  data () {
    return {
      users: []
    }
  },
  created () {
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
