<template>
  <div id="app">
    <!-- Components -->
    <NavBar></NavBar>
    <Book v-bind:dataBook="dataBook"></Book>
    <Magazine v-bind:dataMagazine="dataMagazine"></Magazine>
    <Newspapper v-bind:dataNewspapper="dataNewspapper"></Newspapper>
    <Encyclopedia v-bind:dataEncyclopedia="dataEncyclopedia"></Encyclopedia>
    <Web v-bind:dataWeb="dataWeb"></Web>

  </div>
</template>

<script>
/* Import components here */
import NavBar from './components/MenuNavBar.vue'
import Book from './components/Book.vue'
import Magazine from './components/Magazine.vue'
import Newspapper from './components/Newspapper.vue'
import Encyclopedia from './components/Encyclopedia.vue'
import Web from './components/Web.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Book,
    Magazine,
    Newspapper,
    Encyclopedia,
    Web
  },
  data() {
    return {
      dataBook: {
        complete: false,
        author: '',
        publishedYear: '',
        bookTitle: '',
        publishedIn: '',
        editorial: ''
      },
      dataMagazine: {
        complete: false,
        author: '',
        date: '',
        titleOfArticle: '',
        nameOfMagazine: '',
        volume: '',
        pages: ''
      },
      dataNewspapper: {
        complete: false,
        author: '',
        date: '',
        titleOfArticle: '',
        nameOfNewspapper: '',
        pages: ''
      },
      dataEncyclopedia: {
        complete: false,
        author: '',
        publishedYear: '',
        titleOfArticle: '',
        nameOfEncyclopedia: '',
        volume: '',
        pages: '',
        encyclopediaPublicationPlace: '',
        editorial: ''
      },
      dataWeb: {
        complete: false,
        author: '',
        publishedYear: '',
        title: '',
        dateRecoveryDocument: '',
        publishedBy: '',
        url: ''
      }
    }
  }
}
</script>

<style lang="sass">
  @import 'assets/main.sass'
</style>
