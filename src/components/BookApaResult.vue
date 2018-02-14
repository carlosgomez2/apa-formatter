<template>
  <transition name="fade">
    <div v-show="dataBook.complete">
      <br />
      <h4>
        Apa Format:
      </h4>
      <p ref="text"><mark>{{dataBook.author}}. ({{dataBook.publishedYear}}). {{dataBook.bookTitle}}. {{dataBook.publishedIn}}: {{dataBook.editorial}}.</mark></p>
      <button class="btn" v-on:click="copyToClipboard">Copy to clipboard</button>
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
      this.$refs.text.select()
      document.execCommand('copy')
    }
  }
}
</script>

<style lang="sass" scoped>
  /* Styles here */
</style>