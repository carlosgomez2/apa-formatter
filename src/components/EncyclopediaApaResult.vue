<template>
  <transition name="fade">
    <div v-show="dataEncyclopedia.complete">
      <br />
      <h4>
        Apa Format: 
      </h4>
      <p ref="text"><mark>{{dataEncyclopedia.author}}. {{dataEncyclopedia.publishedYear}}. {{dataEncyclopedia.titleOfArticle}}. In {{dataEncyclopedia.nameOfEncyclopedia}} ({{dataEncyclopedia.volume}}, {{dataEncyclopedia.pages}}). {{dataEncyclopedia.encyclopediaPublicationPlace}}: {{dataEncyclopedia.editorial}}.</mark></p>
      <button class="btn space" v-on:click="copyToClipboard">Copy to clipboard</button>
    </div>
  </transition>
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

<style lang="sass" scoped>
$space: 200px

.space 
  margin-bottom: $space
</style>