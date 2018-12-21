import axios from 'axios'
import endpoints from './endpoints'

export default {
  getEmployees() {
    return axios.get(endpoints.localhost + 'employees')
  },
  getEmployee(employeeID) {
    return axios.get(endpoints.localhost + 'employee/' + employeeID)
  }
}
