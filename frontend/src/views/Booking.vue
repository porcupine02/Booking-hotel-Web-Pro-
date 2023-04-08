<template>
  <div>
    <Nav />
    <Booking />

  </div>
</template>

<script>
// @ is an alias to /src
import Booking from "@/components/Booking.vue";
import Nav from "@/components/reuse/navbar.vue";

export default {
  name: "Booking",
  components: {
    Booking,
    Nav
  }
};
</script>