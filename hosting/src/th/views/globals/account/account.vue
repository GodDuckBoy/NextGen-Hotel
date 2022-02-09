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
        <p>บัญชี</p>
    </nav>
    <hr class="mt-0 mb-4">
    <div class="row">
        <div class="col-xl-4">
            <!-- Profile picture card-->
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">โปรไฟล์</div>
                <div class="card-body text-center">
                    <!-- Profile picture image-->
                    <img class="img-account-profile rounded-circle mb-2" src="https://st3.depositphotos.com/7442846/14911/v/600/depositphotos_149113653-stock-illustration-user-icon-in-a-flat.jpg" alt=""><br>
                    <!-- Profile picture upload button-->
                    <button class="btn-1 btn-primary" type="button">อัพโหลด รูปภาพใหม่</button>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <!-- Account details card-->
            <div class="card mb-4">
                <div class="card-header">รายละเอียด บัญชี</div>
                <div class="card-body">
                    <form>
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Username (ชื่อของคุณจะปรากฏต่อผู้ใช้รายอื่นบนเว็บไซต์อย่างไร)</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="กรุณาป้อน username" value="username">
                        </div>
                        <!-- Form Row-->
                        <div class="row gx-3 mb-3">
                            <!-- Form Group (first name)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">ชื่อ</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="กรุณาป้อนชื่อ" value="นายดำ">
                            </div>
                            <!-- Form Group (last name)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">นามสกุล</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="กรุณาป้อนนามสกุล" value="แสนดี">
                            </div>
                        </div>
                        <!-- Form Row        -->
                        <div class="row gx-3 mb-3">
                            <!-- Form Group (organization name)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputAge">อายุ</label>
                                <input class="form-control" id="inputAge" type="text" placeholder="กรุณาป้อนอายุ" value="21">
                            </div>
                            <!-- Form Group (location)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputAddress">ที่อยู่</label>
                                <input class="form-control" id="inputAddress" type="text" placeholder="กรุณาป้อนที่อยู่" value="พิษณุโลก, ท่าโพธิ์">
                            </div>
                        </div>
                        <!-- Form Group (email address)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="กรุณาป้อน Email address" value="enteryouremail@example.com">
                        </div>
                        <!-- Form Row-->
                        <div class="row gx-3 mb-3">
                            <!-- Form Group (phone number)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">เบอร์โทรติดต่อ</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="091-234-5678">
                            </div>
                            <!-- Form Group (birthday)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">วันเกิด</label>
                                <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/2000">
                            </div>
                        </div>
                        <!-- Save changes button-->
                        <button class="btn-1 btn-primary" type="button">VIP</button>
                        <button class="btn-1 btn-primary" type="button">แก้ไขบัญชี</button>
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
<script lang="ts" src="./account.ts"></script>
<style scoped lang="scss" src="./account.scss">
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
