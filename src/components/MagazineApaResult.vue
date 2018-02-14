<template>
  <transition name="fade">
    <div v-show="dataMagazine.complete">
      <br />
      <h4>
        Apa Format:
      </h4>
      <p ref="text"><mark>{{dataMagazine.author}}. ({{dataMagazine.date}}). {{dataMagazine.titleOfArticle}}. {{dataMagazine.nameOfMagazine}}, {{dataMagazine.volume}}, {{dataMagazine.pages}}.</mark></p>
      <button class="btn" v-on:click="copyToClipboard">Copy to clipboard</button>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    dataMagazine: {
      type: Object,
      require: true
    }
  },
  name: 'MagazineApaResult',
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