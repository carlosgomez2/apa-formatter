<template>
  <div class="navbar">
    <section class="navbar-section">
      <a class="btn btn-link btn-lg"><i class="icon icon-menu"></i></a>
    </section>
    <section class="navbar-center">
      <a href="#" class="btn btn-link">
        <b>Apa Formatter</b>
      </a>
    </section>
    <section class="navbar-section btn-nav">
      <a class="btn btn-primary" href="https://github.com" target="_blank">Github</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MenuNavBar',
  data() {
    return { }
  },
  methods: {
    computedTransform: function(event) {
      this.transform = 'translateX(0%)'
    }
  }
}
</script>

<style lang="sass" scoped>
  /* Styles here */
  section
    height: 3em
    background: rgba(248, 249, 250, .65)

  .navbar
    position: sticky
    height: 3.8rem
    top: 0
    z-index: 200
    width: 100%

  .btn-nav
    padding-right: 20px

  .btn-link
    padding-left: 20px

</style>