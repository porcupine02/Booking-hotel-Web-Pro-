<template>
  <div>
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/SearchRoom.vue";

export default {
  name: "search",
  components: {
    Search,
  }
};
</script>