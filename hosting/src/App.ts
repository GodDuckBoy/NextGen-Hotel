import { Component, Vue } from 'vue-property-decorator'

import FooterComponent from '@/components/footer/footer.vue'
import { enPages, langaugesPages, ownersenPages, ownersthPages, thPages } from '@/constants'
import { getFirstLevelPage } from '@/services'
import { PageComponent } from '@/types'

@Component({
  metaInfo () {
    return {
      title: 'Welcome to Next-Gen Hotel'
    }
  },
  components: {
    'breadcrumb-footer': FooterComponent
  }
})
export default class App extends Vue {
  get thNavbarMenu (): Array<PageComponent> {
    return getFirstLevelPage(thPages)
  }

  get enNavbarMenu (): Array<PageComponent> {
    return getFirstLevelPage(enPages)
  }

  get ownersthNavbarMenu (): Array<PageComponent> {
    return getFirstLevelPage(ownersthPages)
  }

  get ownersenNavbarMenu (): Array<PageComponent> {
    return getFirstLevelPage(ownersenPages)
  }

  get langaugesNavbarMenu (): Array<PageComponent> {
    return getFirstLevelPage(langaugesPages)
  }
}
