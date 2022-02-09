<template>
    <div class="login-page">
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
    <body>
        <form align="center">
        <h1>Login</h1><br>
        <label>Username : </label>
        <input type="text" name="user">
        <br><br>
        <label>Password : </label>
        <input type="text" name="pass">
        <br><br>
        <router-link :to="{ path: '/en/account' }">
        <button type="submit" name="login" value="Login" > login </button>
        </router-link>
        &nbsp;
        <router-link :to="{ path: '/en/account/login/register' }">
        <button type="submit" name="register" value="Register" > register </button>
        </router-link>
        </form>
    </body>
        <breadcrumb-footer />
    </div>
</template>
<script lang="ts" src="./account_login.ts"></script>
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
h1{
  font-size: 50px;
}
img {
  width: 1200px;
  height: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.hello {
  text-align: center;
}
.button {
  background-color:rgb(255, 168, 6);
  text-align: center;
}
.center1 {
  text-align: center;
}
</style>
