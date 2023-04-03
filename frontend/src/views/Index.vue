<template>
  <div>
    <Nav />
    <Home />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import Nav from "@/components/reuse/navbar.vue";
import Footer from "@/components/reuse/footer.vue";

export default {
  name: "Index",
  components: {
    Home,
    Nav,
    Footer
  },
};
</script>
