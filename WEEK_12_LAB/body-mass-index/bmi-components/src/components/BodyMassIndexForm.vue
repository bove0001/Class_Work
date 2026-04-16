<script setup>
import { ref } from 'vue' // import ref

// weight value
const weight = ref(0)

// height value
const height = ref(0)

// event for sending stats to parent
const emit = defineEmits(['stats-entered'])

// send values to parent
function statsEntered() {
  emit('stats-entered', weight.value, height.value)
}
</script>

<template>
  <h3>Body Mass Index Form</h3> <!-- form title -->

  <label for="weight">Weight (kg):</label> <!-- weight label -->
  <input type="number" id="weight" name="weight" v-model="weight" /> <!-- weight input -->
  <br>

  <label for="height">Height (m):</label> <!-- height label -->
  <input type="number" id="height" name="height" v-model="height" /> <!-- height input -->
  <br>

  <button @click="statsEntered">Calculate BMI</button> <!-- button -->
</template>