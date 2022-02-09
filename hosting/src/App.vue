<template>
  <div id="app" class="container">
    <b-navbar class="is-sailor-pink" :fixed-top="true" wrapper-class="container" :mobile-burger="true">
      <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/hotel.png" alt="hotel" class="hotel-logo">
      </b-navbar-item>
      </template>
      <template #start>
      <b-navbar-dropdown class="is-white" label="Next-Gen Hotel">
        <b-navbar-item v-for="navbar in langaugesNavbarMenu" :key="navbar.name + navbar.path" tag="router-link" :to="{ path: navbar.path }">
           {{ navbar.name }}
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown class="is-white" label="TH">
        <b-navbar-item v-for="navbar in thNavbarMenu" :key="navbar.name + navbar.path" tag="router-link" :to="{ path: navbar.path }">
           {{ navbar.name }}
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown class="is-white" label="EN">
        <b-navbar-item v-for="navbar in enNavbarMenu" :key="navbar.name + navbar.path" tag="router-link" :to="{ path: navbar.path }">
          {{ navbar.name }}
        </b-navbar-item>
      </b-navbar-dropdown>
      </template>

      <template #end>
        <img src="@/assets/manager.png" alt="manager" class="manager-logo">
        <b-navbar-item v-for="navbar in ownersthNavbarMenu" :key="navbar.name + navbar.path" tag="router-link" :to="{ path: navbar.path }">
          {{ navbar.name }}
        </b-navbar-item>
        <b-navbar-item v-for="navbar in ownersenNavbarMenu" :key="navbar.name + navbar.path" tag="router-link" :to="{ path: navbar.path }">
          {{ navbar.name }}
        </b-navbar-item>
      </template>
    </b-navbar>

    <!-- * Actual page displays here -->
    <router-view/>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style scoped>
.hotel-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 33px;
}
.manager-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50px;
}
</style>
