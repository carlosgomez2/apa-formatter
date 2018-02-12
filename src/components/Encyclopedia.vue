<template>
  <section id="encyclopedia" class="container grid-lg">
    <form class="form-vertical">
      <div class="column col-12 col-mx-auto">
        <h2>Encyclopedia</h2>
        <label class="form-label">Author:</label>
        <input class="form-input" type="text" v-model="dataEncyclopedia.author" v-on:keyup="formatComplete">
        <label class="form-label">Published On:</label>
        <input class="form-input" type="text" v-model="dataEncyclopedia.publishedYear" v-on:keyup="formatComplete">
        <label class="form-label">Article Title:</label>
        <input class="form-input" type="text" v-model="dataEncyclopedia.titleOfArticle" v-on:keyup="formatComplete">
        <label class="form-label">Name of encyclopedia:</label>
        <input class="form-input" type="text" v-model="dataEncyclopedia.nameOfEncyclopedia" v-on:keyup="formatComplete">
        <label class="form-label">Volume:</label>
        <input class="form-input" type="text" v-model="dataEncyclopedia.volume" v-on:keyup="formatComplete">
        <label class="form-label">Pages:</label>
        <input class="form-input" type="text" v-model="dataEncyclopedia.pages" v-on:keyup="formatComplete">
        <label class="form-label">Place of publication:</label>
        <input class="form-input" type="text" v-model="dataEncyclopedia.encyclopediaPublicationPlace" v-on:keyup="formatComplete">
        <label class="form-label">Editorial:</label>
        <input class="form-input" type="text" v-model="dataEncyclopedia.editorial" v-on:keyup="formatComplete">
        
        <!-- Component -->
        <EncyclopediaApaResult v-bind:dataEncyclopedia="dataEncyclopedia"></EncyclopediaApaResult>

      </div>
    </form>
  </section>
</template>

<script>
import EncyclopediaApaResult from './EncyclopediaApaResult.vue'

export default {
  props: {
    dataEncyclopedia: {
      type: Object,
      required: true
    }
  },
  name: 'Encyclopedia',
  components: {
    EncyclopediaApaResult
  },
  data() {
    return { }
  },
  methods: {
    formatComplete: function(){
      if (this.dataEncyclopedia.author.length >= 1 && this.dataEncyclopedia.publishedYear.length >= 1 && this.dataEncyclopedia.titleOfArticle.length >= 1 && this.dataEncyclopedia.nameOfEncyclopedia.length >= 1 && this.dataEncyclopedia.volume.length >= 1 && this.dataEncyclopedia.pages.length >= 1 && this.dataEncyclopedia.encyclopediaPublicationPlace.length >= 1 && this.dataEncyclopedia.editorial.length >= 1){
        this.dataEncyclopedia.complete = true
      }
    }
  }
}
</script>

<style scoped>
  
</style>