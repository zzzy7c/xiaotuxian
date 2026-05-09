import ImageView from '@/components/ImageView/index.vue'
import Sku from '@/components/XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    app.component('ImageView', ImageView)
    app.component('Sku', Sku)
  }
}
