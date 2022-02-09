<template>
    <div class="booking-credit-page">
    <body>
    <p style="font-size: 40px;" align="center">ชำระเงิน</p>
    <p style="font-size: 15px;" align="center">กรุณากรอกข้อมูลบัตรเครดิต</p>
    <form align="center">
    <p><br>
    <label>ระบุประเภทบัตร</label><br>
    <input type="radio" name="gender" value="mastercard"> Mastercard&nbsp;
    <input type="radio" name="gender" value="visa"> Visa
    </p>
    <p><br>
    <label>หมายเลขบัตรเครดิต : </label>
    <input type="text" name="card_number">
    </p>
    <p><br>
    <label>วันที่หมดอายุ (เดือน/ปี) : </label>
    <input type="month">
    </p>
    <p><br>
    <label>ชื่อที่ระบุบนบัตรเครดิต : </label>
    <input type="text" name="name_card">
    </p>
    <p><br>
    <label>หมายเลข 3 ตัวท้ายหลังบัตร : </label>
    <input type="text" name="3id">
    </p>
    <p><br>
    <label>เบอร์ติดต่อ : </label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required  placeholder="xxx-xxx-xxxx">
    </p>
    <p><br>
    <router-link :to="{ path: '/en/booked/rooms_book/booking_payment/booking_billing' }">
    <input type="submit" value="ยืนยัน">
    </router-link>
    &nbsp;
    <router-link :to="{ path: '/en/booked/rooms_book/booking_payment' }">
    <input type="reset" value="ยกเลิก">
    </router-link>
    </p><br>
    </form>
    </body>
        <breadcrumb-footer />
    </div>
</template>
<script lang="ts" src="./home.ts"></script>
