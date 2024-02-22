import useUserStore from '@/stores/userStore.js'
import useBusinessStore from '@/stores/businessStore.js'
import useProductStore from '@/stores/productStore.js'
import useCartStore from '@/stores/cartStore.js'

export default {
  install: (app) => {
    app.config.globalProperties.$User = useUserStore();
    app.config.globalProperties.$Business = useBusinessStore();
    app.config.globalProperties.$Product = useProductStore();
    app.config.globalProperties.$Cart = useCartStore();
  }
}