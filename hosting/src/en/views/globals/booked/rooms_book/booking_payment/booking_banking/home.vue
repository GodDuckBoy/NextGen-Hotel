<template>
<div class="booking-banking-page">
<body>
<formborder>
<headborder>
<h1 align="center">Bank Transfer</h1>
</headborder>
<br>
<headtext>Read Before You Pay</headtext><br><br>
<subborder>
<suptext>• The transfer amount must be an exact amount stated<br>
below otherwise the booking will not be processed.<br><br>
• International funds transfer from overseas bank<br>
accounts for any booking will not be facilitated and<br>
processed. Be advised that an international transfer fee<br>
will be deducted from the refund.<br><br>• The originating bank and beneficiary bank must be the<br>
same in order to quicken the payment confirmation<br>
process.<br><br>• Transfer can be done via Mobile Banking, Internet<br> Banking, ATM or bank counter.
</suptext>
</subborder><br>
<headtext>เลือกธนาคาร</headtext><br><br>
<!-- เลือกธนาคารเพื่อส่งรายชื่อธนาคารไไปหน้ายืนยัน -->
<div class="container">
<div class="boxborder">
<div class="row">
<div class="col-2">
<div class="box">
<input type="radio" name="bank" value="krungthai_bank" id="banking1">
</div>
</div>
<div class="col">
<div class="box">
<label class="mt" for="banking1" >Krung Thai Bank</label>
</div>
</div>
<div class="col">
<img class="mj" src="@/assets/KT_Bank.jpg" alt="kbank">
</div>
</div>
</div>
<div class="boxborder">
<div class="row">
<div class="col-2">
<div class="box">
<input type="radio" name="bank" value="k_bank" id="banking2">
</div>
</div>
<div class="col">
<div class="box">
<label class="mt" for="banking2">Kasikornbank</label>
</div>
</div>
<div class="col">
<img class="mj" src="@/assets/K_Bank.png" alt="kbank">
</div>
</div>
</div>
<div class="boxborder">
<div class="row">
<div class="col-2">
<div class="box">
<input type="radio" name="bank" value="krungsri_bank" id="banking3">
</div>
</div>
<div class="col">
<div class="box">
<label class="mt" for="banking3">Krungsri Bank</label>
</div>
</div>
<div class="col">
<img class="mj" src="@/assets/KS_Bank.png" alt="kbank">
</div>
</div>
</div>
<div class="boxborder">
<div class="row">
<div class="col-2">
<div class="box">
<input type="radio" name="bank" value="scb_bank" id="banking4">
</div>
</div>
<div class="col">
<div class="box">
<label class="mt" for="banking4">SCB Bank</label>
</div>
</div>
<div class="col">
<img class="mj" src="@/assets/SCB_Bank.jpg" alt="kbank">
</div>
</div>
</div>
</div>
<!-- เลือกธนาคารเพื่อส่งรายชื่อธนาคารไไปหน้ายืนยัน -->
<!-- ปุ่มโยงไปหน้ายืนยัน -->
<router-link :to="{ path: '/en/booked/rooms_book/booking_payment/booking_billing' }">
<button class="subbutton" type="button"><bottext>Pay with Bank Transfer</bottext></button>
</router-link>
<!-- ปุ่มโยงไปหน้ายืนยัน -->
</formborder>
</body>
<breadcrumb-footer/>
</div>
</template>
<script lang="ts" src="./home.ts"></script>
<style scoped lang="scss" src="./home.scss"></style>
