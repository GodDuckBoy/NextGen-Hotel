import { Component, Vue } from 'vue-property-decorator'

import FooterComponent from '@/components/footer/footer.vue'

@Component({
  name: 'Home | Next-Gen Hotel',
  components: {
    'breadcrumb-footer': FooterComponent
  }
})
export default class HomePage extends Vue {
}
