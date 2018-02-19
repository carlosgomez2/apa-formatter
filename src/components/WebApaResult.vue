<template>
  <transition name="fade">
    <div v-show="dataWeb.complete">
      <br />
      <h4>
        Apa Format:
      </h4>
      <p id="resultWeb"><mark>{{dataWeb.author}}. ({{dataWeb.publishedYear}}). {{dataWeb.title}}. {{dataWeb.dateRecoveryDocument}}, of  {{dataWeb.publishedBy}} Website: {{dataWeb.url}}.</mark></p>
      <button class="btn webTooltip" id="copy" data-clipboard-target="#resultWeb" type="button" data-tooltip="Copied!" v-on:click="showTooltip">Copy to clipboard</button>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    dataWeb: {
      type: Object,
      require: true
    }
  },
  name: 'WebApaResult',
  data() {
    return { }
  },
  methods: {
    showTooltip: function() {
      let buttonMagazine = document.querySelector(".webTooltip")
      buttonMagazine.classList.add('tooltip', 'tooltip-right')
    }
  }
}
</script>

<style lang="sass" scoped>
  /* Styles here */
</style>