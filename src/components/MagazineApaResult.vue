<template>
  <transition name="fade">
    <div v-show="dataMagazine.complete">
      <br />
      <h4>
        Apa Format:
      </h4>
      <p id="resultMagazine"><mark>{{dataMagazine.author}}. ({{dataMagazine.date}}). {{dataMagazine.titleOfArticle}}. {{dataMagazine.nameOfMagazine}}, {{dataMagazine.volume}}, {{dataMagazine.pages}}.</mark></p>
      <button class="btn magazineTooltip " id="copy" data-clipboard-target="#resultMagazine" type="button" data-tooltip="Copied!" v-on:click="showTooltip">Copy to clipboard</button>
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
    showTooltip: function() {
      let buttonMagazine = document.querySelector(".magazineTooltip")
      buttonMagazine.classList.add('tooltip', 'tooltip-right')
    }
  }
}
</script>

<style lang="sass" scoped>
  /* Styles here */
</style>