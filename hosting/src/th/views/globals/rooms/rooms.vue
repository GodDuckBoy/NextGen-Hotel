<template>
    <div class="rooms-page">
    <section class="container">
    <div class="home-page"> <br> <br>
      <div class="container">
        <div class="box">
          <img src="@/assets/single.jpg" alt="single">
          <br>
          <br>
            <p  class="hello">
              <router-link to="/th/rooms/single">
                <b-button tag="a" type="is-link" class="btn">ห้องเดี่ยว</b-button>
              </router-link>
            </p> <br>
            <p class="center1"> ห้องที่กำหนดให้กับหนึ่งคน ขนาดห้องหรือพื้นที่ของห้องเดี่ยวโดยทั่วไปอยู่ระหว่าง 37 ม² ถึง 45 ม² </p>
        </div>

        <div class="box">
        <img src="@/assets/double.jpg" alt="double">
                <br>
                  <br>
                    <p  class="hello">
                      <router-link to="/th/rooms/double">
                        <b-button tag="a" type="is-link" class="btn">ห้องคู่</b-button>
                      </router-link>
                    </p> <br>
                  <p class="center1"> ห้องที่กำหนดให้กับสองคน ขนาดห้องหรือพื้นที่ของห้องคู่โดยทั่วไปอยู่ระหว่าง 40 ม² ถึง 45 ม²  </p>
        </div>

        <div class="box">
          <img src="@/assets/quad.jpg" alt="quad">
        <br>
          <br>
            <p  class="hello">
              <router-link to="/th/rooms/quad">
                <b-button tag="a" type="is-link" class="btn">ห้องสี่คน</b-button>
              </router-link>
            </p> <br>
            <p class="center1">ห้องที่กำหนดให้กับสี่คน ขนาดห้องหรือพื้นที่ของห้องสี่คนโดยทั่วไปอยู่ระหว่าง 70 ม² ถึง 85 ม² </p>
        </div>

        <div class="box">
          <img src="@/assets/deluxe.jpg" alt="deluxe">
        <br>
          <br>
            <p  class="hello">
              <router-link to="/th/rooms/deluxe">
                <b-button tag="a" type="is-link" class="btn">ห้องดีลักซ์</b-button>
              </router-link>
            </p> <br>
            <p class="center1"> ห้องที่กำหนดให้กับหนึ่งถึงสองคน ขนาดห้องหรือพื้นที่ของห้องดีลักซ์โดยทั่วไปอยู่ระหว่าง 45 ม² ถึง 70 ม² </p>
        </div>

        <div class="box">
          <img src="@/assets/vip.jpg" alt="vip">
        <br>
          <br>
            <p  class="hello">
              <router-link to="/th/rooms/vip">
                <b-button tag="a" type="is-link" class="btn">ห้อง VIP</b-button>
              </router-link>
            </p> <br>
            <p class="center1"> ห้องที่กำหนดให้กับสี่ถึงห้าคน ขนาดห้องหรือพื้นที่ของห้อง VIPโดยทั่วไปอยู่ระหว่าง 70 ม² ถึง 75 ม² </p>
        </div>
      </div>
    </div>
    </section>
    <breadcrumb-footer />
    </div>
</template>
<script lang="ts" src="./rooms.ts"></script>
<style scoped lang="scss" src="./rooms.scss"></style>
