import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import * as Pages from '../empty/views'
import * as PagesEN from '../en/views'
import * as PagesTH from '../th/views'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'NA',
    component: Pages.NA
  },
  {
    path: '/en/about',
    name: 'About',
    component: PagesEN.AboutEN
  },
  {
    path: '/en/account',
    name: 'Account',
    component: PagesEN.AccountEN
  },
  {
    path: '/en/account/edit-profile',
    name: 'Edit Profile',
    component: PagesEN.EditProfileEN
  },
  {
    path: '/en/account/vip',
    name: 'VIP',
    component: PagesEN.VIPEN
  },
  {
    path: '/en',
    name: 'Home',
    component: PagesEN.HomeEN
  },
  {
    path: '/en/owners',
    name: 'Owners',
    component: PagesEN.OwnersEN
  },
  {
    path: '/en/promotions',
    name: 'Promotions',
    component: PagesEN.PromotionsEN
  },
  {
    path: '/en/rooms',
    name: 'Rooms',
    component: PagesEN.RoomsEN
  },
  {
    path: '/th/about',
    name: 'เกี่ยวกับเรา',
    component: PagesTH.AboutTH
  },
  {
    path: '/th/account/login',
    name: 'เข้าสู่ระบบ',
    component: PagesTH.LoginTH
  },
  {
    path: '/th/account/edit-profile',
    name: 'แก้ไขข้อมูลส่วนตัว',
    component: PagesTH.EditProfileTH
  },
  {
    path: '/th/account/vip',
    name: 'สิทธิพิเศษ',
    component: PagesTH.VIPTHReal
  },
  {
    path: '/th',
    name: 'หน้าหลัก',
    component: PagesTH.HomeTH
  },
  {
    path: '/th/owners',
    name: 'เจ้าของกิจการ',
    component: PagesTH.OwnersTH
  },
  {
    path: '/th/promotions',
    name: 'โปรโมชั่น',
    component: PagesTH.PromotionsTH
  },
  {
    path: '/th/rooms',
    name: 'ห้องพัก',
    component: PagesTH.RoomsTH
  },
  {
    path: '/th/account/login/register',
    name: 'สมัคร',
    component: PagesTH.RegisterTH
  },
  {
    path: '/th/account/',
    name: 'สมัคร',
    component: PagesTH.AccountTH
  },
  {
    path: '/th/booked/',
    name: 'สมัคร',
    component: PagesTH.BookedTH
  },
  {
    path: '/en/account/login',
    name: 'Login',
    component: PagesEN.LoginEN
  },
  {
    path: '/en/account/login/register',
    name: 'Register',
    component: PagesEN.RegisterEN
  },
  {
    path: '/en/booked/',
    name: 'Booked',
    component: PagesEN.BookedEN
  },
  {
    path: '/en/rooms/single',
    name: 'Single',
    component: PagesEN.Single
  },
  {
    path: '/en/rooms/double',
    name: 'Double',
    component: PagesEN.Double
  },
  {
    path: '/en/rooms/quad',
    name: 'Quad',
    component: PagesEN.Quad
  },
  {
    path: '/en/rooms/deluxe',
    name: 'Deluxe',
    component: PagesEN.Deluxe
  },
  {
    path: '/en/rooms/vip',
    name: 'VIP',
    component: PagesEN.VIP
  },
  {
    path: '/th/rooms/single',
    name: 'Single',
    component: PagesTH.SingleTH
  },
  {
    path: '/th/rooms/double',
    name: 'Double',
    component: PagesTH.DoubleTH
  },
  {
    path: '/th/rooms/quad',
    name: 'Quad',
    component: PagesTH.QuadTH
  },
  {
    path: '/th/rooms/deluxe',
    name: 'Deluxe',
    component: PagesTH.DeluxeTH
  },
  {
    path: '/th/rooms/vip',
    name: 'VIP',
    component: PagesTH.VIPTH
  },
  {
    path: '/en/booked/rooms_book',
    name: 'Rooms Book',
    component: PagesEN.RoomBookedEN
  },
  {
    path: '/en/booked/rooms_book/booking_payment',
    name: 'Booking Payment',
    component: PagesEN.BookingPayment
  },
  {
    path: '/en/booked/rooms_book/booking_payment/booking_banking',
    name: 'Booking Banking',
    component: PagesEN.BookingBanking
  },
  {
    path: '/en/booked/rooms_book/booking_payment/booking_billing',
    name: 'Booking Billing',
    component: PagesEN.BookingBilling
  },
  {
    path: '/en/booked/rooms_book/booking_payment/booking_credit',
    name: 'Booking Credit',
    component: PagesEN.BookingCredit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    if (to.hash != null && to.hash !== '') {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
