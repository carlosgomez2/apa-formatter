<template>
  <div class="navbar">
    <section class="navbar-section">
      
    <a class="btn btn-link btn-lg btn-menu" v-on:click="showSidebar"><i class="icon icon-menu"></i></a>

    <div class="sidebar-container" id="sidebar">
      <a class="btn close" v-on:click="hideSidebar"><i class="icon icon-arrow-left"></i></a>
      
      <ul>
        <li><a href="#book" v-on:click="hideSidebar">Book</a></li>
        <li><a href="#magazine" v-on:click="hideSidebar">Magazine</a></li>
        <li><a href="#newspapper" v-on:click="hideSidebar">Newspapper</a></li>
        <li><a href="#encyclopedia" v-on:click="hideSidebar">Encyclopedia</a></li>
        <li><a href="#web" v-on:click="hideSidebar">Web</a></li>
      </ul>

      <b class="sidebar-footer">&copy; Apa Formatter</b>
    </div>

    </section>
    <section class="navbar-center">
      <a href="#" class="btn btn-link">
        <b class="apa-title">Apa Formatter</b>
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
    return {
    }
  },
  methods: {
    showSidebar: function() {
      let sidebar = document.getElementById("sidebar")
      sidebar.classList.add("active")
    },
    hideSidebar: function() {
      let sidebar = document.getElementById("sidebar")
      sidebar.classList.remove("active")
    }
  }
}
</script>

<style lang="sass" scoped>
/* Styles here */
section
  height: 3em !important
  padding: 0
  background: rgba(248, 249, 250, .65)

.navbar
  position: sticky
  top: 0
  z-index: 200
  width: 100%

.navbar-center
  margin: 0 3px

.btn-primary
  margin-right: 10px

.btn-menu
  margin-left: 10px
  &:hover, &:focus
    background: #f1f1fc
    border-color: #4b48d6

.sidebar-container
  background: #f8f9fa
  width: 250px
  height: 100vh
  z-index: 500
  position: absolute
  top: 0
  /* Flex properties */
  display: flex
  flex-direction: column
  flex-wrap: wrap 

  justify-content: space-between
  align-items: flex-start
  align-content: center

  transition: all .5s ease-in-out
  transform: translateX(-100%)

.active
  transition: all 0.5s ease-in-out
  transform: translateX(0%)

.close 
  margin: 12px 12px 9px 20px

.sidebar-footer
  margin: 0 auto
  padding-bottom: 9px
  text-transform: uppercase

.apa-title
  text-transform: capitalize
  font-weight: bold
  font-size: 1rem

ul 
  margin: 2px 0
  width: 100%
  li 
    list-style-type: none
    text-align: center
    margin: 0
    width: 100%
    line-height: 3.5rem
    a 
      text-transform: uppercase
      display: block
      &:hover 
        text-decoration: none
        font-weigth: bold
        border: .05rem solid #5755d9
        color: #5755d9
        font-size: .8rem
        background: #f1f1fc

</style>