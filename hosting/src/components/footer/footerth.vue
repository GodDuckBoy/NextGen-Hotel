<template>
  <footer class="footer">
    <div class="container has-text-centered">
      <h1 class="title is-2">
        ติดตามเราได้ที่
      </h1>
      <p class="subtitle">
        <br>
        <a href="https://facebook.com">Facebook</a><span class="tab"></span><a href="https://www.instagram.com">IG</a><span class="tab"></span><a href="https://line.me">Line</a>
      </p>
    </div>
    <br>
    <div class="a1 has-text-centered">
      <p class="a3 has-text-left">
      <img src="@/assets/logo-NU-2018.jpg" alt="pic" width="50" height="50">
      ควบคุมกำกับ โดย อ.วินัย วงษ์ไทย
      <br>
      หน้าเว็บโรงแรมและการตลาดออนไลน์ ถูกจัดทำโดย สมาชิกกลุ่มนิสิตมหาวิทยาลัยนเรศวรในรายวิชาการโปรแกรมบนอินเทอร์เน็ต
      </p>
      <p class="a2 has-text-right">
      โทร. +(66 5)583-1423|+(66 5)535-8972
      <br>
      เวลาเปิดทำการ(8:30-17:30 จันทร์ - เสาร์)
      <br>
      อีเมลล์:Sales@nextgenhotel.com
      </p>
    </div>
  </footer>
</template>

<script lang="ts" src="./footer.ts"></script>
<style scoped lang="scss">
@import '../../variables';

.footer {
  background-color: #04AA6D;
  color: white;
}
.a1 {
  background-color: #c695ee;
  color: rgb(212, 28, 28);
}
.a2 {
  background-color: #2e1f2e;
  color: rgb(29, 177, 95);
}
.a3 {
  background-color: #3e3d8f;
  color: rgb(164, 202, 74);
}
.tab {
  display: inline-block;
  margin-left: 40px;
  tab-size: 2;
}
</style>
