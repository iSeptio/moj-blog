import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import Grid from '~/components/Grid.vue'
import Feature from '~/components/Feature.vue'
import Feature2 from '~/components/Feature2.vue'
import Slide from '~/components/Slide.vue'
import SitemapItem from '~/components/SitemapItem.vue'

Vue.use(BootstrapVue)
Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
Vue.component('feature2', Feature2)
Vue.component('slide', Slide)
Vue.component('sitemap-item', SitemapItem)
