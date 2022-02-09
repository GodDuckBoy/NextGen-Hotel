import { Component, Vue } from 'vue-property-decorator'

import FooterComponent from '@/components/footer/footer.vue'
import { profilethPages } from '@/constants'
import { getFirstLevelPage } from '@/services'
import { PageComponent } from '@/types'

@Component({
  metaInfo () {
    return {
      title: 'สมัคร | Next-Gen Hotel'
    }
  },
  components: {
    'breadcrumb-footer': FooterComponent
  }
})
export default class App extends Vue {
  get profilethNavbarMenu (): Array<PageComponent> {
    return getFirstLevelPage(profilethPages)
  }
}
