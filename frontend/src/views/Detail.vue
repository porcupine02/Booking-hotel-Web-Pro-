<template>
  <div>
    <Detail />
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import Detail from "@/components/Detail.vue";
import Nav from "@/components/reuse/navbar.vue";

export default {
  name: "detail",
  components: {
    Detail,
    Nav
  }
};
</script>