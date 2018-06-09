<template lang="pug">
  main
    vm-notification(v-show="showNotify")
      p(slot="bodynotify") No se encontraron resultados
    section.section(v-show="!isLoading")
      nav.nav
        .container
          .field.has-addons
            .control.is-expanded
              input.input.is-medium(
                type="text",
                placeholder="Buscar cancion",
                v-model="queryToSearch")
            .control
              a.button.is-info.is-medium(@click="search") Buscar
            .control  
              a.button.is-danger.is-medium(@click="borrar") &times;
          p.help.is-info.has-text-left
            small#resultstracks {{ searchMessage }}
      .container.results#cajita
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            vm-track(
              :track="t",
              @selected="setselectedTrack",
              :class="{'is-active': t.mbid == selectedTrack}")
    vm-loader(v-show="isLoading")

</template>

<script>
import trackService from "@/services/track";

import VmTrack from "@/components/Track.vue";
import VmLoader from "@/components/shared/Loader.vue";
import VmNotification from "@/components/shared/Notification.vue";

export default {
  name: "app",
  components: { VmTrack, VmLoader, VmNotification },
  data() {
    return {
      queryToSearch: "",
      tracks: [],
      isLoading: false,
      selectedTrack: "",
      showNotify: false
    };
  },
  methods: {
    search() {
      if (!this.queryToSearch) {
        return;
      }
      this.isLoading = true;
      trackService.search(this.queryToSearch).then(res => {
        this.showNotify = res.results.trackmatches.track.length === 0;
        this.tracks = res.results.trackmatches.track;
        this.isLoading = false;
      });
    },
    borrar() {
      this.queryToSearch = "";
    },
    setselectedTrack(id) {
      this.selectedTrack = id;
    }
  },
  computed: {
    searchMessage() {
      return `Encontrados ${this.tracks.length} canciones`;
    }
  },
  watch: {
    showNotify() {
      if (this.showNotify) {
        setTimeout(() => {
          this.showNotify = false;
        }, 3000);
      }
    }
  }
};
</script>

<style lang="scss">
#cajita {
  padding-top: 10px;
}
#cajita .is-active {
  border: 2px #1381ff solid;
}
</style>
