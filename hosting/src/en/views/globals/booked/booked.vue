<template>
    <div class="booked-page">
    <body>
    <p style="font-size: 35px;" align="center">Booked Zone</p>
    <form align="center">
    <p><br>
    <label>Name - Surename : </label>
    <input type="text" name="name" placeholder="Name - Surename">
    </p>
    <p><br>
    <label>Tel. : </label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required  placeholder="xxx-xxx-xxxx">
    </p>
    <p><br>
    <label>Date : </label>
    <input type="date" >
    <label> - </label>
    <input type="date">
    </p>
    <p><br>
    <label>floor : </label>
    <select name="floor">
    <option align="center"> -- Select -- </option>
    <option align="center" value="floor1">floor 1</option>
    <option align="center" value="floor2">floor 2</option>
    <option align="center" value="floor3">floor 3</option>
    <option align="center" value="floor4">floor 4</option>
    </select>&nbsp;
    <label>room : </label>
    <select name="floor">
    <option align="center"> -- Select -- </option>
    <option align="center" value="room1">room 1</option>
    <option align="center" value="room2">room 2</option>
    <option align="center" value="room3">room 3</option>
    <option align="center" value="room4">room 4</option>
    <option align="center" value="room5">room 5</option>
    <option align="center" value="room6">room 6</option>
    <option align="center" value="room7">room 7</option>
    <option align="center" value="room8">room 8</option>
    <option align="center" value="room9">room 9</option>
    <option align="center" value="room10">room 10</option>
    </select>
    </p>
    <br>
    <section class="book">
    <div class="row">
          <div class="col-md-8"> <br>
            <div class="box">
              <img src="@/assets/single.jpg" alt="single">
                <br>
                <br>
                <div class="info-detail">
                <div class="clearfix">
                  <div class="pull-right">
                    <strong>Start from 2,500 THB/Night</strong>
                  </div>
                </div>
              </div>
              <br>
                  <p  class="hello">
                    <b-button tag="router-link" :to="{ path: '/en/rooms/single' }" type="is-link" class="lol">Single</b-button>
                  </p> <br> <br>
            </div>
            <div class="box">
              <img src="@/assets/double.jpg" alt="double">
                <br>
                <br>
                <div class="info-detail">
                <div class="clearfix">
                  <div class="pull-right">
                    <strong>Start from 2,500 THB/Night</strong>
                  </div>
                </div>
                </div>
                <br>
                  <p class="hello">
                    <b-button tag="router-link" :to="{ path: '/en/rooms/double' }" type="is-link" class="lol">Double</b-button>
                      </p> <br> <br>
            </div>

            <div class="box">
              <img src="@/assets/quad.jpg" alt="quad">
                <br>
                <br>
                <div class="info-detail">
                <div class="clearfix">
                  <div class="pull-right">
                    <strong>Start from 2,500 THB/Night</strong>
                  </div>
                </div>
                </div>
                <br>
                  <p class="hello">
                    <b-button tag="router-link" :to="{ path: '/en/rooms/quad' }" type="is-link" class="lol">Quad</b-button>
                      </p> <br> <br>
            </div>

            <div class="box">
              <img src="@/assets/deluxe.jpg" alt="vip">
                <br>
                <br>
                <div class="info-detail">
                <div class="clearfix">
                  <div class="pull-right">
                    <strong>Start from 2,500 THB/Night</strong>
                  </div>
                </div>
                </div>
                <br>
                  <p class="hello">
                    <b-button tag="router-link" :to="{ path: '/en/rooms/deluxe' }" type="is-link" class="lol">Deluxe</b-button></p> <br> <br>
            </div>

            <div class="box">
              <img src="@/assets/vip.jpg" alt="vip">
                <br>
                <br>
                <div class="info-detail">
                <div class="clearfix">
                  <div class="pull-right">
                    <strong>Start from 2,500 THB/Night</strong>
                  </div>
                </div>
                </div>
                <br>
                  <p class="hello">
                    <b-button tag="router-link" :to="{ path: '/en/rooms/vip' }" type="is-link" class="lol">Vip</b-button></p> <br> <br>
            </div>
        </div> <br> <br> <br>
          <div class="container1">
            <div class="col-md-4">
            <div class="summaryPanel sticky" style="max-height: 937px; top: 363px;">
              <div id="priceCol">
                <span class="totalPriceTxt">Total</span>
              </div>
              <div id="summaryCol">
                <span class="totalPrice" id="summaryPrice">0.00</span>
                <span class="currency"> THB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <p><br>
    <router-link :to="{ path: '/en/booked/rooms_book' }">
    <input type="submit" value="Booking"> &nbsp;
    </router-link>
    <router-link :to="{ path: '/en' }">
    <input type="reset" value="Cancel">
    </router-link>
    </p><br>
    </form>
    </body>
    </div>
</template>
<script lang="ts" src="./booked.ts"></script>
<style scoped lang="scss" src="./booked.scss"></style>
