<script setup>
import { ref } from 'vue' // Vue reactive tools

// props from parent
defineProps({
  question: String, // question text
  answer1: String,  // first answer
  answer2: String   // second answer
})
</script>

<template>
  <h3>Make a choice:</h3> <!-- section title -->

  {{ question }} <!-- show question -->

  <input type='radio'> <!-- first radio -->
  <label>{{ answer1 }}</label> <!-- first label -->

  <input type='radio'> <!-- second radio -->
  <label>{{ answer2 }}</label> <!-- second label -->
</template>

<style scoped>
/* styles only for this component */
</style>