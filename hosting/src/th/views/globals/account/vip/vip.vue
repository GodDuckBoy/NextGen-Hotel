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
    <template>
       <div class="container-xl px-4 mt-4">
    <!-- Account page navigation-->
    <nav class="nav nav-borders">
        <p>สิทธิพิเศษ</p>
    </nav>
    <hr class="mt-0 mb-4">
    <div class="row">
        <div class="col-xl-8">
            <!-- Account details card-->
            <div class="card mb-4">
                <div class="card-header">สมัคร สิทธิพิเศษ</div>
                <div class="card-body">
                    <form>
                        <!-- Form Radio (VIP Menu)-->
                        <section class="radio-section">
                            <div class="radio-list">
                            <div class="radio-item"><input name="radio" id="radio1" type="radio"><label for="radio1">1 เดือน ( รับส่วนลด 5% )</label></div>
                            <div class="radio-item"><input name="radio" id="radio2" type="radio"><label for="radio2">2 เดือน ( รับส่วนลด 10% )</label></div>
                            <div class="radio-item"><input name="radio" id="radio3" type="radio"><label for="radio3">3 เดือน ( รับส่วนลด 15% )</label></div>
                            <div class="radio-item"><input name="radio" id="radio4" type="radio"><label for="radio4">6 เดือน ( รับส่วนลด 20% )</label></div>
                            <div class="radio-item"><input name="radio" id="radio5" type="radio"><label for="radio5">1 ปี ( รับส่วนลด 30% )</label></div>
                            </div>
                        </section>
                        <!-- Save changes button-->
                        <button class="btn-1 btn-primary" type="submit">ยืนยันการสมัคร</button>
                        <button class="btn-1 btn-primary" type="reset">ยกเลิกการสมัคร</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </template>
    <breadcrumb-footer />
    </div>
</template>
<script lang="ts" src="./vip.ts"></script>
<style scoped lang="scss" src="./vip.scss">
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
