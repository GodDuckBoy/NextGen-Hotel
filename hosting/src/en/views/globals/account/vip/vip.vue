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
    <template>
        <div class="vip-page">
            <body>
                <br><br><p style="font-size: 20px;" align="center">Register for VIP</p><br>
                <form align="center">
                    <p>
                        <label>Special privileges for registered customers Receive discounts on bookings of up to 30%</label>
                    </p>
                    <p>
                        <label>Including the right to reserve a room before anyone else. Special room availability will be reserved in advance for customers who apply.</label>
                    </p><br>
                    <p>
                        <label>Packet to register</label><br>
                        <input type="radio" name="vip" value="vip" align="center">1 month ( get a discount 5% )<br><br>
                        <input type="radio" name="vip" value="vip" align="center">2 month ( get a discount 10% )<br><br>
                        <input type="radio" name="vip" value="vip" align="center">3 month ( get a discount 15% )<br><br>
                        <input type="radio" name="vip" value="vip" align="center">6 month ( get a discount 20% )<br><br>
                        <input type="radio" name="vip" value="vip" align="center">1 year ( get a discount 30% )<br><br>
                    </p><br><br>
                    <p>
                    <router-link :to="{ path: '/en/account' }">
                    <input type="submit" value="Confirm for register">
                    </router-link>
                    &nbsp;&nbsp;
                    <router-link :to="{ path: '/en/account' }">
                    <input type="reset" value="Cancle for register">
                    </router-link>
                    </p>
                </form>
            </body>
        </div>
    </template>
    <breadcrumb-footer />
    </div>
</template>
<script lang="ts" src="./vip.ts"></script>
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
