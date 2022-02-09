<template>
    <div class="account-page">
    <b-navbar class="is-light-blue" :fixed-top="true" wrapper-class="container" :mobile-burger="true">
        <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="@/assets/hotel.png" alt="hotel" class="hotel-logo">
        </b-navbar-item>
        </template>
        <template #start>
        </template>
        <template #end>
            <b-navbar-item tag="router-link" :to="{ path: '/en/account' }">
                <img src="@/assets/profile.png" alt="profile" class="profile-logo">
            </b-navbar-item>
            <b-navbar-dropdown>
            <b-navbar-item v-for="navbar in profileenNavbarMenu" :key="navbar.name + navbar.path" tag="router-link" :to="{ path: navbar.path }">
            {{ navbar.name }}
            </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
    <b-button tag="router-link" :to="{ path: '/en/booked/rooms_book/booking_payment/booking_credit' }">Credit</b-button>
    <b-button tag="router-link" :to="{ path: '/en/booked/rooms_book/booking_payment/booking_banking' }">Banking</b-button>
    <breadcrumb-footer />
    </div>
</template>
<script lang="ts" src="./home.ts"></script>
<style scoped>
.hotel-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 33px;
}
.profile-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 33px;
}
</style>
