import { vi } from 'vitest'

vi.mock('@/services/api.js', () => ({
  get: vi.fn(),
  post: vi.fn(),
  put: vi.fn(),
  delete: vi.fn(),
}))

const localStorageMock = (function () {
  let store = {}
  return {
    getItem(key) {
      return store[key] || null
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    removeItem(key) {
      delete store[key]
    },
    clear() {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true
})

export default localStorageMock
