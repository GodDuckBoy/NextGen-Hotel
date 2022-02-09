<template>
<div class="home-page">
  <section class="hero is-sailor-pink is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <img src="@/assets/nextgenhotel.jpg" alt="hotel" class="hotel-logo">
          </div>
          <div class="column">
            <h1 class="title is-1">
              <p class="welcome">
              ยินดีต้อนรับสู่
              </p>
            </h1>
            <h3 class="subtitle is-3">
              <span class="has-text-bright-red">โรงแรม </span>
              <span class="has-text-light-blue">N</span>ext
              <span class="has-text-light-blue">G</span>en
            </h3>
            <br>
            <b-button tag="router-link" to="/th/booked/" type="is-link">จองห้องพัก</b-button>
          </div>
        </div>
      </div>
    </div>
  </section>

   <section class="hero is-white is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-centered">
          <p class="tcolor">สระว่ายนํ้า</p>
          <img src="@/assets/pool.jpg" alt="pool" class="pool-logo">
        </h1><br>
        <h1 class="title is-1 has-text-centered">
          <p class="tcolor">ห้องอาหาร</p>
          <img src="@/assets/restaurant.jpg" alt="restaurant" class="restaurant-logo">
        </h1><br>
        <h1 class="title is-1 has-text-centered">
          <p class="tcolor">ห้องโถง</p>
          <img src="@/assets/counter_service.jpg" alt="counter_service" class="counter_service-logo">
        </h1><br>
        <h1 class="title is-1 has-text-centered">
          <p class="tcolor">สวนย่อม</p>
          <img src="@/assets/garden.jpg" alt="garden" class="garden-logo">
        </h1><br>
      </div>
    </div>
  </section>
  <breadcrumb-footer/>
</div>
</template>

<script lang="ts" src="./home.ts"></script>
<style scoped lang="scss" src="./home.scss"></style>
