<script setup lang="ts">
import {ref, computed} from 'vue'

const {
  msg,
  name = 'Default name'
} = defineProps<{
  msg: string,
  name?: string
}>()

const emit = defineEmits(['change-text'])

const bigMessage = computed(() => msg.toUpperCase() )

function onClick(){
  console.log('log');
  const secretData = '1234'
  emit('change-text', secretData)
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ bigMessage }}</h1>
    <h3>
      Hello World component
      {{ name }}
    </h3>
    <button @click="onClick">Событие для родителя</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
