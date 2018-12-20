import axios from 'axios'
import endpoints from './endpoints'

export default {
  getEmployees() {
    return axios.get(endpoints.localhost + 'employees')
  },
  getEmployee(userID) {
    return axios.get(endpoints.reqres + 'employee/' + userID)
  }
}
