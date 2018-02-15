<template>
  <section id="newspapper" class="container grid-lg">
    <form class="form-vertical">
      <div class="column col-12 col-mx-auto">
        <h2>Newspapper</h2>
        <label class="form-label">Author:</label>
        <input class="form-input" type="text" v-model="dataNewspapper.author" v-on:keyup="formatComplete">
        <label class="form-label">Published On:</label>
        <input class="form-input" type="text" v-model="dataNewspapper.date" v-on:keyup="formatComplete">
        <label class="form-label">Article Title:</label>
        <input class="form-input" type="text" v-model="dataNewspapper.titleOfArticle" v-on:keyup="formatComplete">
        <label class="form-label">Name of Newspapper:</label>
        <input class="form-input" type="text" v-model="dataNewspapper.nameOfNewspapper" v-on:keyup="formatComplete">
        <label class="form-label">Pages:</label>
        <input class="form-input" type="text" v-model="dataNewspapper.pages" v-on:keyup="formatComplete">
        
        <!-- Component -->
        <NewspapperApaResult v-bind:dataNewspapper="dataNewspapper"></NewspapperApaResult>

      </div>
    </form>
  </section>
</template>

<script>
import NewspapperApaResult from './NewspapperApaResult.vue'

export default {
  props: {
    dataNewspapper: {
      type: Object,
      require: true
    }
  },
  name: 'Newspapper',
  components: {
    NewspapperApaResult
  },
  data() {
    return { }
  },
  methods: {
    formatComplete: function(){
      if (this.dataNewspapper.author.length >= 1 && this.dataNewspapper.date.length >= 1 && this.dataNewspapper.titleOfArticle.length >= 1 && this.dataNewspapper.nameOfNewspapper.length >= 1 && this.dataNewspapper.pages.length >= 1){
        this.dataNewspapper.complete = true
        console.log('Newspapper format is complete: ' + this.dataNewspapper.complete)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
</style>