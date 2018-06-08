<template lang="pug">
  section.hero.is-dark.is-medium#foti
    .hero-head  
      header.navbar
        .container
          .navbar-left
            .navbar-item
              strong Vue Music by jEstevezRod 
          .navbar-right.navbar-menu
    .hero-body
      .container.has-text-centered
        h1.title Vue Music
        h2.subtitle Canciones que están Vuenísimas
    .hero-foot
      navbar.tabs.is-boxed.is-fullwidth
        .container
          ul
            li.is-active
              a Canciones
            li
              a Artistas
            li
              a Albumes
            li
              a Top Artistas
            li
              a Top Canciones


</template>
<style lang="scss" scoped>
#foti {
  background: url(../../assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
