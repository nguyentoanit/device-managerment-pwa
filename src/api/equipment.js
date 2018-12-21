import axios from 'axios'
import endpoints from './endpoints'

export default {
  getEquipments() {
    return axios.get(endpoints.localhost + 'equipments')
  },
  getEquipment(id) {
    return axios.get(endpoints.localhost + 'equipment/' + id)
  }
}
