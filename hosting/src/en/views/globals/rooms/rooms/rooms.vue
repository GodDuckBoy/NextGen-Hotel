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
              <router-link to="/en/rooms/single">
                <b-button tag="a" type="is-link" class="btn">Single</b-button>
              </router-link>
            </p> <br>
            <p class="center1"> A room assigned to one person.
            The room size or area of Single Rooms are generally between 37 m² to 45 m². </p>
        </div>

        <div class="box">
        <img src="@/assets/double.jpg" alt="double">
                <br>
                  <br>
                    <p  class="hello">
                      <router-link to="/en/rooms/double">
                        <b-button tag="a" type="is-link" class="btn">Double</b-button>
                      </router-link>
                    </p> <br>
                  <p class="center1"> A room assigned to two people.
          The room size or area of Double Rooms are generally between 40 m² to 45 m². </p>
        </div>

        <div class="box">
          <img src="@/assets/quad.jpg" alt="quad">
        <br>
          <br>
            <p  class="hello">
              <router-link to="/en/rooms/quad">
                <b-button tag="a" type="is-link" class="btn">Quad</b-button>
              </router-link>
            </p> <br>
            <p class="center1">A room assigned to four people.
            The room size or area of Quad Rooms are generally between 70 m² to 85 m². </p>
        </div>

        <div class="box">
          <img src="@/assets/deluxe.jpg" alt="deluxe">
        <br>
          <br>
            <p  class="hello">
              <router-link to="/en/rooms/deluxe">
                <b-button tag="a" type="is-link" class="btn">Deluxe</b-button>
              </router-link>
            </p> <br>
            <p class="center1"> A room assigned for one or two people. The room size or area of Single Rooms are generally between 37 m² to 45 m². </p>
        </div>

        <div class="box">
          <img src="@/assets/vip.jpg" alt="vip">
        <br>
          <br>
            <p  class="hello">
              <router-link to="/en/rooms/vip">
                <b-button tag="a" type="is-link" class="btn">VIP</b-button>
              </router-link>
            </p> <br>
            <p class="center1"> A room assigned for two to four people. The room size or area of Single Rooms are generally between 40 m² to 85 m². </p>
        </div>
      </div>
    </div>
    </section>
    <breadcrumb-footer />
    </div>
</template>
<script lang="ts" src="./rooms.ts"></script>
<style scoped lang="scss" src="./rooms.scss"></style>
