<template>
  <section id="web" class="container grid-lg">
    <form class="form-vertical">
      <div class="column col-12 col-mx-auto">
        <h2>Web</h2>
        <label class="form-label">Author:</label>
        <input class="form-input" type="text" v-model="dataWeb.author" v-on:keyup="formatComplete">
        <label class="form-label">Published Year:</label>
        <input class="form-input" type="text" v-model="dataWeb.publishedYear" v-on:keyup="formatComplete">
        <label class="form-label">Title:</label>
        <input class="form-input" type="text" v-model="dataWeb.title" v-on:keyup="formatComplete">
        <label class="form-label">Date of Document Recovery:</label>
        <input class="form-input" type="text" v-model="dataWeb.dateRecoveryDocument" v-on:keyup="formatComplete">
        <label class="form-label">Published By:</label>
        <input class="form-input" type="text" v-model="dataWeb.publishedBy" v-on:keyup="formatComplete">
        <label class="form-label">Url:</label>
        <input class="form-input" type="text" v-model="dataWeb.url" v-on:keyup="formatComplete">
        
        <!-- Component -->
        <WebApaResult v-bind:dataWeb="dataWeb"></WebApaResult>

      </div>
    </form>
  </section>
</template>

<script>
  import WebApaResult from './WebApaResult.vue'

export default {
  props:{
    dataWeb: {
      type: Object,
      require: true
    }
  },
  name: 'Web',
  components: {
    WebApaResult
  },
  data() {
    return { }
  },
  methods: {
    formatComplete: function() {
      if (this.dataWeb.author.length >= 1 && this.dataWeb.publishedYear.length >= 1 && this.dataWeb.dateRecoveryDocument.length >= 1 && this.dataWeb.title.length >= 1 && this.dataWeb.publishedBy.length >= 1 && this.dataWeb.url.length >= 1){
        this.dataWeb.complete = true
        console.log('Web format is complete: ' + this.dataWeb.complete)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  /* Styles here */
</style>