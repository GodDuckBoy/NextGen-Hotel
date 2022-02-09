import { Component, Vue } from 'vue-property-decorator'

import FooterComponent from '@/components/footer/footer.vue'
import { profileenPages } from '@/constants'
import { getFirstLevelPage } from '@/services'
import { PageComponent } from '@/types'

@Component({
  metaInfo () {
    return {
      title: 'Account | Next-Gen Hotel'
    }
  },
  components: {
    'breadcrumb-footer': FooterComponent
  }
})
export default class App extends Vue {
  get profileenNavbarMenu (): Array<PageComponent> {
    return getFirstLevelPage(profileenPages)
  }
}
