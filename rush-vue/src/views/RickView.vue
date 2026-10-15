<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { useRickStore } from '@/stores/rick';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const store = useCounterStore()
const rickStore = useRickStore()

const { count, name } = storeToRefs(store)
const { loading, users } = storeToRefs(rickStore)
const isModalShow = ref(false)

function incrementOnPage() {
    count.value++
}

function changeAll() {
    store.$patch({
        name: 'Rick',
        count: -2
    })
}

function showModal(){
    isModalShow.value = !isModalShow.value
}

onMounted(() => {
    rickStore.loadUsers('character?page=1')
})

</script>

<template>
  <main>
    <p v-color-comp="'red'">Rick view</p>
    <p>Counter = {{ count }}</p>
    <p>Name = {{ name }}</p>
    <p>double ccunter = {{ store.doubleCount }}</p>
    <button @click="store.increment()">+</button>
    <button @click="incrementOnPage">increment on page</button>
    <button @click="changeAll">change all</button>

    <button @click="showModal">{{isModalShow ? 'Скрыть модалку' : 'Показать модалку'}}</button>
    <Teleport to="#wrapper">
        <div v-if="isModalShow" class="modal">
        <p>Modal</p>
        <p>Some text </p>
    </div>
    </Teleport>


    <div v-if="loading">Loading...</div>
    <div v-else>
        <p>Список персонажей</p>
        <div v-for="user in users" :key="user.id">
            <img :src="user.image">
            <p>Name = {{ user.name }}</p>
        </div>
    </div>


  </main>
</template>
