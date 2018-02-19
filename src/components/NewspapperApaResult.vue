<template>
  <transition name="fade">
    <div v-show="dataNewspapper.complete">
      <br />
      <h4>
        Apa Format: 
      </h4>
      <p id="resultNewspapper"><mark>{{dataNewspapper.author}}. ({{dataNewspapper.date}}). {{dataNewspapper.titleOfArticle}}. {{dataNewspapper.nameOfNewspapper}}, {{dataNewspapper.pages}}.</mark></p>
      <button class="btn newspapperTooltip " id="copy" data-clipboard-target="#resultNewspapper" type="button" data-tooltip="Copied!" v-on:click="showTooltip">Copy to clipboard</button>
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
    showTooltip: function() {
      let buttonNewspapper = document.querySelector(".newspapperTooltip")
      buttonNewspapper.classList.add('tooltip', 'tooltip-right')
    }
  }
}
</script>

<style scoped>
  /* Styles here */
</style>