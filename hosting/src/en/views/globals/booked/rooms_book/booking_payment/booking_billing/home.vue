<template>
<div class="booking-billing-page">
<body>
<formborder>
<headborder>
<h1 align="center">Price Details</h1>
</headborder>
<br>
<div class="boxborder">
<div class="row">
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
<br><br>
<subborder>
<div class="container">
<div class="row">
<div class="col">Room details</div>
<div class="col"><spacetext>THB 540</spacetext></div>
</div>
<div class="row">
<div class="col">Service details</div>
<div class="col"><spacetext>THB 200</spacetext></div>
</div>
<br>
<div class="row">
<div class="col" >Total price</div>
<div class="col"><spacetext>THB 740</spacetext></div>
</div>
</div>
</subborder><br>
<!-- ปุ่มโยงไปหน้ายืนยัน -->
<router-link :to="{ path: '/en' }">
<button class="subbutton" type="button"><bottext>Bank Payment Confirmation</bottext></button>
<!-- ปุ่มโยงไปหน้ายืนยัน -->
</router-link>
</formborder>
</body>
<breadcrumb-footer/>
</div>
</template>
<script lang="ts" src="./home.ts"></script>
<style scoped lang="scss" src="./home.scss"></style>
