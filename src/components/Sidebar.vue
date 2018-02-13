<template>
  <div v-bind:style="{transform: computedTransform }" class="sidebar-container">
    <ul>
      <li><a href="#book">{{formatsAvailable.book}}</a></li>
      <li><a href="#magazine">{{formatsAvailable.magazine}}</a></li>
      <li><a href="#newspapper">{{formatsAvailable.newspapper}}</a></li>
      <li><a href="#encyclopedia">{{formatsAvailable.encyclopedia}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    formatsAvailable: {
      type: Object,
      required: true
    },
    showSidebar: {
      type: Object
    }
  },
  name: 'Sidebar',
  data() {
    return {  }
  },
  methods: {
  }
}
  
</script>

<style lang="sass" scoped>
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
    justify-content: center
    align-content: center 
    align-items: center

    transition: all 0.5s ease-in-out
    transform: translateX(-100%)

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