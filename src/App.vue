<template lang="pug">

  #app
    vm-header
    router-view
    vm-footer
</template>

<script>
import trackService from "@/services/track";

import VmFooter from "@/components/layout/Footer.vue";
import VmHeader from "@/components/layout/Header.vue";

export default {
  name: "app",
  components: { VmFooter, VmHeader }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

#cajita {
  padding-top: 10px;
}
#cajita .is-active {
  border: 2px #1381ff solid;
}
</style>
