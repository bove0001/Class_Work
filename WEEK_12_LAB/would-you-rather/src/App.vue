<script setup>
// import component
import WouldYouRather from './components/WouldYouRather.vue'

// import ref
import { ref } from 'vue'

// question text
const wyrQuestion = ref('live in a house shaped like a circle or a triangle?')

// first choice
const wyrAnswer1 = ref('Circle')

// second choice
const wyrAnswer2 = ref('Triangle')

// user answer
const userSelection = ref('')
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
</template>
