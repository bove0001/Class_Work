<script setup>
import { ref, watch } from 'vue'

// Receive question data from App.vue
const props = defineProps({
  question: String,
  answer1: String,
  answer2: String
})

// Track the selected answer
const selectedAnswer = ref('')

// Reset selection when question changes
watch(
  () => props.question,
  () => {
    selectedAnswer.value = ''
  }
)
</script>

<template>
  <div>
    <h2>{{ question }}</h2>

    <!-- First answer option -->
    <div>
      <input 
        type="radio"
        id="answer1"
        name="wyr-answer"
        v-model="selectedAnswer"
        v-bind:value="answer1"
      >
      <label for="answer1">{{ answer1 }}</label>
    </div>

    <!-- Second answer option -->
    <div>
      <input 
        type="radio"
        id="answer2"
        name="wyr-answer"
        v-model="selectedAnswer"
        v-bind:value="answer2"
      >
      <label for="answer2">{{ answer2 }}</label>
    </div>

    <!-- Show user choice -->
    <p v-if="selectedAnswer">
      You selected {{ selectedAnswer }}
    </p>
  </div>
</template>