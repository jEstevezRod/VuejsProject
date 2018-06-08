<template lang="pug">
  .card
    .card-image
      figure.image.is-1by1
        img(:src="track.image[3]['#text']")
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.image[3]['#text']")
        .media-content
          p.title.is-6
            strong {{ track.name}}
          p.subtitle.is-6 {{ track.artist}}
      .content
        small {{  track.listeners + ' reproducciones'}}
        nav.level
          .level-left
            a.level-item
              span.icon.is-small 
</template>

<script>
export default {
  props: {
    track: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
