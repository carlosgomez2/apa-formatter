<template>
  <div v-show="dataEncyclopedia.complete">
    <h4>
      Apa Format: 
    </h4>
    <p ref="text">{{dataEncyclopedia.author}}. {{dataEncyclopedia.publishedYear}}. {{dataEncyclopedia.titleOfArticle}}. In {{dataEncyclopedia.nameOfEncyclopedia}} ({{dataEncyclopedia.volume}}, {{dataEncyclopedia.pages}}). {{dataEncyclopedia.encyclopediaPublicationPlace}}: {{dataEncyclopedia.editorial}}.</p>
    <button class="btn" v-on:click="copyToClipboard">Copy to clipboard</button>
  </div>
</template>

<script>
export default {
  props: {
    dataEncyclopedia: {
      type: Object,
      required: true
    }
  },
  name: 'EncyclopediaApaResult',
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