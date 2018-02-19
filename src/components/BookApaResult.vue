<template>
  <transition name="fade">
    <div v-show="dataBook.complete">
      <br />
      <h4>
        Apa Format:
      </h4>
      <p id="resultBook"><mark>{{dataBook.author}}. ({{dataBook.publishedYear}}). {{dataBook.bookTitle}}. {{dataBook.publishedIn}}: {{dataBook.editorial}}.</mark></p>
      <button class="btn bookTooltip " id="copy" data-clipboard-target="#resultBook" type="button" data-tooltip="Copied!" v-on:click="showTooltip">Copy to clipboard</button>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    dataBook: {
      type: Object,
      require: true
    }
  },
  name: 'BookApaResult',
  data() {
    return { }
  },
  methods: {
    showTooltip: function() {
      let buttonBook = document.querySelector('.bookTooltip')
      buttonBook.classList.add('tooltip', 'tooltip-right')
    }
  }
}
</script>

<style lang="sass" scoped>
  /* Styles here */
</style>