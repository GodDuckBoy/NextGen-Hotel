import { Component, Vue } from 'vue-property-decorator'

import FooterComponent from '@/components/footer/footer.vue'

@Component({
  metaInfo () {
    return {
      title: 'เกี่ยวกับเรา | Next-Gen Hotel'
    }
  },
  components: {
    'breadcrumb-footer': FooterComponent
  }
})
export default class SourcesPage extends Vue {}
