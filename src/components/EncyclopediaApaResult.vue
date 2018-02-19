<template>
  <transition name="fade">
    <div v-show="dataEncyclopedia.complete">
      <br />
      <h4>
        Apa Format: 
      </h4>
      <p id="resultEncyclopedia"><mark>{{dataEncyclopedia.author}}. {{dataEncyclopedia.publishedYear}}. {{dataEncyclopedia.titleOfArticle}}. In {{dataEncyclopedia.nameOfEncyclopedia}} ({{dataEncyclopedia.volume}}, {{dataEncyclopedia.pages}}). {{dataEncyclopedia.encyclopediaPublicationPlace}}: {{dataEncyclopedia.editorial}}.</mark></p>
      <button class="btn encyclopediaTooltip " id="copy" data-clipboard-target="#resultEncyclopedia" type="button" data-tooltip="Copied!" v-on:click="showTooltip">Copy to clipboard</button>
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
    showTooltip: function() {
      let buttonMagazine = document.querySelector(".encyclopediaTooltip")
      buttonMagazine.classList.add('tooltip', 'tooltip-right')
    }
  }
}
</script>

<style lang="sass" scoped>
$space: 200px

.space 
  margin-bottom: $space
</style>