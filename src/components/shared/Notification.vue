<template lang="pug">
  .container
    .columns
      .column.is-4.is-offset-4
        .notification.is-danger.has-text-centered
          slot(name="bodynotify")
</template>

<style lang="scss" scoped>
.notification {
  margin: 11px;
}
</style>
