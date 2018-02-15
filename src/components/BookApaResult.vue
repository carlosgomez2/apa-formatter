<template>
  <transition name="fade">
    <div v-show="dataBook.complete">
      <br />
      <h4>
        Apa Format:
      </h4>
      <p id="result"><mark>{{dataBook.author}}. ({{dataBook.publishedYear}}). {{dataBook.bookTitle}}. {{dataBook.publishedIn}}: {{dataBook.editorial}}.</mark></p>
      <button class="btn" data-clipboard-target="#result">Copy to clipboard</button>
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
    copyToClipboard: function(){
      let text = document.querySelector('#apa-result')
      text[0].select()
      document.execCommand('copy')
    }
  }
}
</script>

<style lang="sass" scoped>
  /* Styles here */
</style>