<template lang="pug">
  section.hero.is-dark.is-medium#foti
    .hero-head  
      header.navbar
        .container
          .navbar-left
            .navbar-item
              img.is-48x48(src="../../assets/logo.png")
              strong Vue Music by jEstevezRod 
          .navbar-right.navbar-menu
    .hero-body
      .container.has-text-centered
        h1.title.has-text-grey-dark Vue Music
        h2.subtitle.has-text-dark Canciones que están Vuenísimas
    .hero-foot
      nav.tabs.is-boxed.is-fullwidth
        .container
          ul
            li.is-active
              router-link(to="/") Canciones
            li
              router-link(to="about") Artistas
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
