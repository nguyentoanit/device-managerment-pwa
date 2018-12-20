import axios from 'axios'
import endpoints from './endpoints'

export default {
  getUsers() {
    return axios.get(endpoints.localhost + 'employees')
  },
  getUser(userID) {
    return axios.get(endpoints.reqres + 'employee/' + userID)
  }
}
