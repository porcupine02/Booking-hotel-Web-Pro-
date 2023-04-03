<template>
  <div>
    <Invoice />
  </div>
</template>

<script>
// @ is an alias to /src
import Invoice from "@/components/Invoice.vue";

export default {
  name: "invoice",
  components: {
    Invoice,
  }
};
</script>