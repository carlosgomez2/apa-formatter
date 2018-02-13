<template>
  <transition name="fade">
    <div v-show="dataNewspapper.complete">
      <h4>
        Apa Format: 
      </h4>
      <p ref="text">{{dataNewspapper.author}}. ({{dataNewspapper.date}}). {{dataNewspapper.titleOfArticle}}. {{dataNewspapper.nameOfNewspapper}}, {{dataNewspapper.pages}}.</p>
      <button class="btn" v-on:click="copyToClipboard">Copy to clipboard</button>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    dataNewspapper: {
      type: Object,
      require: true
    }
  },
  name: 'NewspapperApaResult',
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

<style scoped>
  /* Styles here */
</style>