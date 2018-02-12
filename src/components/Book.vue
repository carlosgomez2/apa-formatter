<template>
  <section id="book" class="container grid-lg">
    <form class="form-vertical">
      <div class="column col-12 col-mx-auto">
        <h2>Book</h2>
        <label class="form-label">Author:</label>
        <input class="form-input" type="text" v-model="dataBook.author" v-on:keyup="formatComplete">
        <label class="form-label">Published Year:</label>
        <input class="form-input" type="text" v-model="dataBook.publishedYear" v-on:keyup="formatComplete">
        <label class="form-label">Book Title:</label>
        <input class="form-input" type="text" v-model="dataBook.bookTitle" v-on:keyup="formatComplete">
        <label class="form-label">Publication Place:</label>
        <input class="form-input" type="text" v-model="dataBook.publishedIn" v-on:keyup="formatComplete">
        <label class="form-label">Editorial:</label>
        <input class="form-input" type="text" v-model="dataBook.editorial" v-on:keyup="formatComplete">
        
        <!-- Component -->
        <BookApaResult v-bind:dataBook="dataBook"></BookApaResult>

      </div>
    </form>
  </section>
</template>

<script>
/* Import components here */
import BookApaResult from './BookApaResult.vue'

export default {
  props: ['dataBook'],
  name: 'Book',
  components: {
    BookApaResult
  },
  data() {
    return { }
  },
  methods: {
    formatComplete: function() {
      if (this.dataBook.author.length >= 1 && this.dataBook.publishedYear.length >= 1 && this.dataBook.bookTitle.length >= 1 && this.dataBook.publishedIn.length >= 1 && this.dataBook.editorial.length >= 1){
        this.dataBook.complete = true
        console.log('Book format is complete: ' + this.dataBook.complete)
      }
    }
  }
}
</script>

<style scoped>
  /* Styles here */
</style>