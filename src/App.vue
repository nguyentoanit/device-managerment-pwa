<template>
  <div id="app">
    <b-navbar type="light" variant="light" toggleable>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <div v-for="(route, index) in routes" :key="index">
            <router-link v-if="route.visible" class="nav-link" :to="{ name: route.name}">{{route.title}}
            </router-link>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        routes: this.$router.options.routes
      }
    }
  }
</script>

<style>
</style>
