<script setup lang="ts">
import {ref, computed} from 'vue'
const mytext = ref('Alice')
const htmlCode = '<span>Some text</span>'

const counter = ref(0)
const price = ref(167)
const textName = ref('')
const showText = ref(true)
const users = ref(["Michael", "Scottie", "Dennis", "Phil"])

const totalPrice = computed(() => {
  return counter.value * price.value
})

function increment(event: Event) {
  console.log(event);
  counter.value++
  console.log(textName.value);
}

function decrement() {
   counter.value--
}

function clickLink(){
  console.log('link to');
}
</script>

<template>
  <div>
          <p >{{mytext.toUpperCase()}}</p>

      <p>{{ 5 > 4 ? ' yes' : 'no'}}</p>
      <p
       v-html='htmlCode'></p>
      <div v-if='5 > 4'>
        <p>counter: {{counter}}</p>
      </div>
      <div v-else>
        Заглушка
      </div>
      <div v-for='(user, index) in users' :key='user'>
         <p>name: {{index + 1}}-{{user}}</p>
      </div>
      <button @click='increment'>+</button>
      <button @keyup.space='decrement()'>-</button>
      <a 
        href='https://google.com'
        @click.prevent='clickLink'
        >Google
      </a>

      <p 
        v-if="totalPrice"
        :style="{
          color: 'red',
          fontSize: `${counter}px` || 10
        }"
        >totalPrice is - {{ totalPrice }}</p>

        <input v-if="showText" v-model.trim="textName" />
        <input id="showInput" type="checkbox" v-model="showText"/>
        <label for="showInput">  Показать текст </label>
  </div>
</template>
