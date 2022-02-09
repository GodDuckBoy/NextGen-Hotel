<template>
    <div class="booked-page">
    <body>
    <p style="font-size: 35px;" align="center">สำหรับที่จอง</p>
    <form align="center">
    <p><br>
    <label>ชื่อ - นามสกุล : </label>
    <input type="text" name="name" placeholder="ชื่อ - นามสกุล">
    </p>
    <p><br>
    <label>เบอร์โทร : </label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required  placeholder="xxx-xxx-xxxx">
    </p>
    <p><br>
    <label>วันที่ : </label>
    <input type="date" >
    <label> - </label>
    <input type="date">
    </p>
    <p><br>
    <label>ชั้น : </label>
    <select name="floor">
    <option align="center"> -- เลือก -- </option>
    <option align="center" value="floor1">ชั้น 1</option>
    <option align="center" value="floor2">ชั้น 2</option>
    <option align="center" value="floor3">ชั้น 3</option>
    <option align="center" value="floor4">ชั้น 4</option>
    </select>&nbsp;
    <label>ห้อง : </label>
    <select name="floor">
    <option align="center"> -- เลือก -- </option>
    <option align="center" value="room1">ห้อง 1</option>
    <option align="center" value="room2">ห้อง 2</option>
    <option align="center" value="room3">ห้อง 3</option>
    <option align="center" value="room4">ห้อง 4</option>
    <option align="center" value="room5">ห้อง 5</option>
    <option align="center" value="room6">ห้อง 6</option>
    <option align="center" value="room7">ห้อง 7</option>
    <option align="center" value="room8">ห้อง 8</option>
    <option align="center" value="room9">ห้อง 9</option>
    <option align="center" value="room10">ห้อง 10</option>
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
                    <strong>เริ่มจาก 2,500 บาท/คืน</strong>
                  </div>
                </div>
              </div>
              <br>
                  <p  class="hello">
                    <b-button tag="router-link" :to="{ path: '/th/rooms/single' }" type="is-link" class="lol">ห้องเดียว</b-button>
                  </p> <br> <br>
            </div>
            <div class="box">
              <img src="@/assets/double.jpg" alt="double">
                <br>
                <br>
                <div class="info-detail">
                <div class="clearfix">
                  <div class="pull-right">
                    <strong>เริ่มจาก 2,500 บาท/คืน</strong>
                  </div>
                </div>
                </div>
                <br>
                  <p class="hello">
                    <b-button tag="router-link" :to="{ path: '/th/rooms/double' }" type="is-link" class="lol">ห้องคู่</b-button>
                      </p> <br> <br>
            </div>

            <div class="box">
              <img src="@/assets/quad.jpg" alt="quad">
                <br>
                <br>
                <div class="info-detail">
                <div class="clearfix">
                  <div class="pull-right">
                    <strong>เริ่มจาก 2,500 บาท/คืน</strong>
                  </div>
                </div>
                </div>
                <br>
                  <p class="hello">
                    <b-button tag="router-link" :to="{ path: '/th/rooms/quad' }" type="is-link" class="lol">ห้องสี่คน</b-button>
                      </p> <br> <br>
            </div>

            <div class="box">
              <img src="@/assets/deluxe.jpg" alt="vip">
                <br>
                <br>
                <div class="info-detail">
                <div class="clearfix">
                  <div class="pull-right">
                    <strong>เริ่มจาก 2,500 บาท/คืน</strong>
                  </div>
                </div>
                </div>
                <br>
                  <p class="hello">
                    <b-button tag="router-link" :to="{ path: '/th/rooms/deluxe' }" type="is-link" class="lol">ห้องดีลักซ์</b-button></p> <br> <br>
            </div>

            <div class="box">
              <img src="@/assets/vip.jpg" alt="vip">
                <br>
                <br>
                <div class="info-detail">
                <div class="clearfix">
                  <div class="pull-right">
                    <strong>เริ่มจาก 2,500 บาท/คืน</strong>
                  </div>
                </div>
                </div>
                <br>
                  <p class="hello">
                    <b-button tag="router-link" :to="{ path: '/th/rooms/vip' }" type="is-link" class="lol">ห้อง Vip</b-button></p> <br> <br>
            </div>
        </div> <br> <br>
          <div class="container1">
            <div class="col-md-4">
            <div class="summaryPanel sticky" style="max-height: 937px; top: 363px;">
              <div id="priceCol">
                <span class="totalPriceTxt">ราคาทั้งหมด</span>
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
    <input type="submit" value="จอง"> &nbsp;
    </router-link>
    <router-link :to="{ path: '/th' }">
    <input type="reset" value="ยกเลิก">
    </router-link>
    </p><br>
    </form>
    </body>
    </div>
</template>
<script lang="ts" src="./booked.ts"></script>
<style scoped lang="scss" src="./booked.scss"></style>
