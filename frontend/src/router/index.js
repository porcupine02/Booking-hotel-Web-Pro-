import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Admin from "../views/Admin.vue";
import Booking from "../views/Booking.vue";
import Detail from "../views/Detail.vue";
import Invoice from "../views/Invoice.vue";
import Profile from "../views/Profile.vue";
import Search from "../views/Search.vue";
import Update from "../views/Update.vue";

const routes = [
  {
    name: "Index",
    path: "/",
    component: Index,
  },
  {
    name: "Admin",
    path: "/admin",
    component: Admin
  },
  {
    name: "Booking",
    path: "/Booking",
    component: Booking
  },
  {
    name: "Detail",
    path: "/detail/:id",
    component: Detail
  },
  {
    name: "Invoice",
    path: "/invoice",
    component: Invoice
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile
  },
  {
    name: "Search",
    path: "/search",
    component: Search
  },
  {
    name: "Update",
    path: "/update",
    component: Update
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
