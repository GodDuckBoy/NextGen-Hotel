<template>
    <div class="register-page">
    <b-navbar class="is-light-blue" :fixed-top="true" wrapper-class="container" :mobile-burger="true">
        <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="@/assets/hotel.png" alt="hotel" class="hotel-logo">
        </b-navbar-item>
        </template>
        <template #start>
        </template>
        <template #end>
            <b-navbar-item tag="router-link" :to="{ path: '/th/account' }">
                <img src="@/assets/profile.png" alt="profile" class="profile-logo">
            </b-navbar-item>
            <b-navbar-dropdown>
            <b-navbar-item v-for="navbar in profilethNavbarMenu" :key="navbar.name + navbar.path" tag="router-link" :to="{ path: navbar.path }">
            {{ navbar.name }}
            </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
    <body>
        <body>
        <form align="center">
        <h1>Register</h1><br>
        <label>User name : </label>
        <input type="text" name="user">
        <br><br>
        <label>Password : </label>
        <input type="text" name="pass">
        <br><br>
        <label>Name : </label>
        <input type="text" name="name">
        <br><br>
        <label>E-mail : </label>
        <input type="email" name="mail">
        <br><br>
        <label>Phone number : </label>
        <input type="tel" name="tel" id="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="xxx-xxx-xxxx">
        <br><br>
        <router-link :to="{ path: '/th/account/login' }">
        <button type="submit" name="register1" value="Register"> ยืนยัน </button>
        </router-link>
        &nbsp;
        <router-link :to="{ path: '/th/account/login' }">
        <button type="reset" name="reset" value="Cancel"> ยกเลิก </button>
        </router-link>
        </form>
        </body>
    </body>
        <breadcrumb-footer />
    </div>
</template>
<script lang="ts" src="./account_register.ts"></script>
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
