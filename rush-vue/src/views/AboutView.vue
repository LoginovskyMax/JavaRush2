<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';

function onChangetext(data: string) {
  console.log('Прочитали в родителе', data);
}
</script>

<template>
  <div class="about">
      <HelloWorld
     msg="Props from App"
     @change-text="onChangetext"
    ></HelloWorld>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
