<template>
  <section id="magazine" class="container grid-lg">
    <form class="form-vertical">
      <div class="column col-12 col-mx-auto">
        <h2>Magazine</h2>
        <label class="form-label">Author:</label>
        <input class="form-input" type="text" v-model="dataMagazine.author" v-on:keyup="formatComplete">
        <label class="form-label">Published On:</label>
        <input class="form-input" type="text" v-model="dataMagazine.date" v-on:keyup="formatComplete">
        <label class="form-label">Article Title:</label>
        <input class="form-input" type="text" v-model="dataMagazine.titleOfArticle" v-on:keyup="formatComplete">
        <label class="form-label">Name of Magazine:</label>
        <input class="form-input" type="text" v-model="dataMagazine.nameOfMagazine" v-on:keyup="formatComplete">
        <label class="form-label">Volume:</label>
        <input class="form-input" type="text" v-model="dataMagazine.volume" v-on:keyup="formatComplete">
        <label class="form-label">Pages:</label>
        <input class="form-input" type="text" v-model="dataMagazine.pages" v-on:keyup="formatComplete">
        
        <!-- Component -->
        <MagazineApaResult v-bind:dataMagazine="dataMagazine"></MagazineApaResult>

      </div>
    </form>
  </section>
</template>

<script>
/* Import components here */
import MagazineApaResult from './MagazineApaResult.vue'

export default {
  props: {
    dataMagazine: {
      type: Object,
      require: true
    }
  },
  components: {
    MagazineApaResult
  },
  name: 'Magazine',
  data() {
    return { }
  },
  methods: {
    formatComplete: function(){
      if (this.dataMagazine.author.length >= 1 && this.dataMagazine.date.length >= 1 && this.dataMagazine.titleOfArticle.length >= 1 && this.dataMagazine.nameOfMagazine.length >= 1 && this.dataMagazine.volume.length >= 1 && this.dataMagazine.pages.length >= 1){
        this.dataMagazine.complete = true
        console.log('Magazine format is complete: ' + this.dataMagazine.complete)
      }
    }
  }
}
</script>

<style scoped>
  /* Styles here */
</style>