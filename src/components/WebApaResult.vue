<template>
  <transition name="fade">
    <div v-show="dataWeb.complete">
      <br />
      <h4>
        Apa Format:
      </h4>
      <p id="result"><mark>{{dataWeb.author}}. ({{dataWeb.publishedYear}}). {{dataWeb.title}}. {{dataWeb.dateRecoveryDocument}}, of  {{dataWeb.publishedBy}} Website: {{dataWeb.url}}.</mark></p>
      <button class="btn" data-clipboard-target="#result">Copy to clipboard</button>
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