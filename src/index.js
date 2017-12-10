import Vue from 'vue'
import Inter from 'vue-inter'
import App from './App'

Vue.config.productionTip = false

Vue.use(Inter)

const inter = new Inter({
  locale: 'en',
  locales: {
    en: {
      welcome: {
        simple: 'Hello {name}',
        weather: 'Hi {name}, how is the weather today?'
      }
    },
    zh: {
      welcome: {
        simple: '你好{name}',
        weather: '你好{name},天气如何?'
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  inter,
  render: h => h(App)
})
