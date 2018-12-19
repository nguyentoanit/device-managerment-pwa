<template>
  <div>
    <h1>Devices</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Assign</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in devices" :key="device.id">
          <th scope="row">{{ device.id }}</th>
          <td>{{ device.name }}</td>
          <td>{{ device.status }}</td>
          <td>{{ device.assign }}</td>
          <td>
            <router-link :to="{ name: 'device', params: { deviceID: device.id }}">
              <i class="fas fa-edit"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  name: 'Device',
  data () {
    return {
      devices: [
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
    func1 () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
