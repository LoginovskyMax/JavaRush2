<script setup lang="ts">
import WelcomeItem from '@/components/WelcomeItem.vue';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const userName = ref(route.params.name)
const isShowModal = ref(false)

watch(() => route.params.name, (val) => {
   console.log(val, 'Переменная изменилась');
   userName.value = val
})

function onClick(){
   router.push('/user/Alice')
}

function toggleModal(){
    isShowModal.value = !isShowModal.value

    if(isShowModal.value){
      router.replace({
        path: route.path,
        query:{
            modal: 'open'
        }
    } )

    return
    }

    router.replace({
        path: route.path,
        query:{}
    } )
}

function checkQuery(){
    if(route.query.modal){
        isShowModal.value = true
    }
}

onMounted(() => {
    console.log( route.params);
    checkQuery()
})

onBeforeUnmount(() => {
   console.log('Компонент уничтожен');
})

</script>

<template>
  <div class="about">
      <p>User View</p>
      <p>Имя пользователя = {{ userName }}</p>
      <button @click="onClick">another user</button>
      <WelcomeItem>
        <p>some text</p>
        <template #heading>
            <p>Heading text</p>
        </template>
        <template #icon>
            <i>Some icon</i>
        </template>
      </WelcomeItem>
      <button @click="toggleModal">{{ isShowModal ? 'Close modal' : 'Open modal' }}</button>
      <div 
         v-if="isShowModal"
         class="modal"
         >
        modal 
      </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.modal{
    width: 200px;
    height: 200px;
    background-color: blanchedalmond;
}
</style>
