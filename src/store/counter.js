import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(JSON.parse(localStorage.getItem('counts')) || 0)
  const doubleCounter = computed(() => counter.value * 2)
  const incCounter = () => {
    counter.value++
    localStorage.setItem('counts', JSON.stringify(counter.value))
  }
  return { counter, doubleCounter, incCounter }
})

// export const useCounterStore = defineStore('counter', {
//   state: () => {
//     return {
//       counter: JSON.parse(localStorage.getItem('counts') || 0),
//     }
//   },
//   getters: {
//     doubleCounter(state) {
//       return state.counter * 2
//     },
//   },
//   actions: {
//     incCounter() {
//       this.counter++
//       localStorage.setItem('counts', JSON.stringify(this.counter))
//     },
//   },
// })
