<template>
  <div>
    <h1>Users</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Fullname</th>
          <th scope="col">Avatar</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.first_name }} {{ user.last_name }}</td>
          <td>
            <img :src="user.avatar">
          </td>
          <td>
            <router-link :to="{ name: 'user', params: { userID: user.id }}">
              <i class="fas fa-edit"></i>
            </router-link>
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
