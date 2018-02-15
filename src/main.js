// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Spectre from 'spectre.css'
import SpectreIcons from 'spectre.css/dist/spectre-icons.css'
import Clipboard from 'clipboard/dist/clipboard.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

console.log('Is clipboard.js supported?: ' + Clipboard.isSupported())