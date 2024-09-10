import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import useCartStore from '@/stores/cartStore.js'
import localStorageMock from './test/setup' // Importer le mock localStorage

describe('Cart Store Tests', () => {
  let cartStore = null

  beforeEach(() => {
    setActivePinia(createPinia())
    cartStore = useCartStore()
    localStorageMock.clear() // Réinitialiser le mock localStorage
    cartStore.currentCart = []
  })

  it('should add a product to the cart', () => {
    cartStore.addToCart(1, 2)

    expect(cartStore.currentCart.length).toBe(1)
    expect(cartStore.currentCart[0]).toEqual({ id: 1, quantity: 2 })
  })

  it('should save cart to localStorage', () => {
    cartStore.addToCart(1, 2)

    const savedCart = JSON.parse(localStorageMock.getItem('cart'))
    expect(savedCart).toEqual([{ id: 1, quantity: 2 }])
  })

  // it('should mock API response', async () => {
  //   const mockResponse = { data: { data: [{ id: 1, name: 'Product A' }] } }
  //   api.get.mockResolvedValue(mockResponse)
  //
  //   await cartStore.fetchAllInvoices()
  //
  //   expect(api.get).toHaveBeenCalledWith('invoices')
  //   // Ajoute des assertions pour vérifier que le store a été mis à jour
  // })

  // Ajoute d'autres tests pour les fonctionnalités du store
})
