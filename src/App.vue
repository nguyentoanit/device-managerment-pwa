<template>
  <div id="app">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <!-- Brand -->
      <router-link class="navbar-brand" :to="{'name': 'home'}">Home</router-link>
      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(route, index) in routes" :key="index">
            <router-link v-if="route.visible" data-toggle="collapse" data-target="#collapsibleNavbar" class="nav-link" :to="{ name: route.name}">{{route.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
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
