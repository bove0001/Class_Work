<script setup>
// import component
import WouldYouRather from './components/WouldYouRather.vue'

// import ref and onMounted
import { ref, onMounted } from 'vue'

// question text
const wyrQuestion = ref('')

// first choice
const wyrAnswer1 = ref('')

// second choice
const wyrAnswer2 = ref('')

// user answer
const userSelection = ref('')

// get question from Express API
async function getWyrQuestion() {
  const response = await fetch('/wyr')
  const wyr = await response.json()

  wyrQuestion.value = wyr.question
  wyrAnswer1.value = wyr.answer1
  wyrAnswer2.value = wyr.answer2
}

// run when page loads
onMounted(() => {
  getWyrQuestion()
})
</script>

<template>
  <!-- page title -->
  <h1>Would You Rather</h1>

  <!-- child component -->
  <WouldYouRather 
    v-bind:question="wyrQuestion" 
    v-bind:answer1="wyrAnswer1"
    v-bind:answer2="wyrAnswer2"
  >
  </WouldYouRather>

  <button v-on:click="getWyrQuestion">
    New Question
  </button>
</template>