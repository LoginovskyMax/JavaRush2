import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRickStore = defineStore('rick', () => {
  const users = ref([])
  const loading = ref(false)
  const URL = 'https://rickandmortyapi.com/api/'

  
  async function loadUsers(path: string) {
    loading.value = true

    try {
      const res = await fetch(`${URL}${path}`)

      if (!res.ok) throw new Error('Ошибка запроса')

        const data = await res.json()

        users.value = data.results
    } finally {
         loading.value = false 
    }
  }
  return { 
    users, 
    loading, 
    loadUsers 
}

})