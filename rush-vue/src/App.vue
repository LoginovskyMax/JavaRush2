<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {ref, onMounted} from 'vue'

const mytext = ref('Alice')
const htmlCode = '<span>Some text</span>'

const counter = ref(0)
const id = ref(123)
const users = ref(["Michael", "Scottie", "Dennis", "Phil"])

function increment(event) {
  console.log(event);
  counter.value++
}

function decrement() {
   counter.value--
}

function clickLink(){
  console.log('link to');
}


onMounted(() => {
    // setInterval(() => {
    //       counter.value++
    //   }, 1000)
})

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div :id='id' class="wrapper">
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
        >Google</a>
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    gap: 10px;
    flex-direction: column;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
