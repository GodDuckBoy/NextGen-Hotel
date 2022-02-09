import { Component, Vue } from 'vue-property-decorator'

import FooterComponent from '@/components/footer/footer.vue'
import { SinglePage } from '@/constants'
import { getFirstLevelPage } from '@/services'
import { PageComponent } from '@/types'

@Component({
  name: 'Rooms | Next-Gen Hotel',
  components: {
    'breadcrumb-footer': FooterComponent
  }
})
export default class App extends Vue {
  get singleMenu (): Array<PageComponent> {
    return getFirstLevelPage(SinglePage)
  }
}
