<script setup>
import { useBmiStore } from '../stores/bmiStore.js' // BMI store
import { storeToRefs } from 'pinia' // keep store values reactive

const bmiStore = useBmiStore() // use BMI store
const { height, weight } = storeToRefs(bmiStore) // refs from store

function clearStats() {
  weight.value = 0 // clear weight
  height.value = 0 // clear height
}
</script>

<template>
  <div class="bmi-form">
    <h3>Body Mass Index Form</h3>

    <div class="form-row">
      <label for="weight">Weight (kg):</label>
      <input type="number" id="weight" name="weight" v-model="weight" /> <!-- weight input -->
    </div>

    <div class="form-row">
      <label for="height">Height (cm):</label>
      <input type="number" id="height" name="height" v-model="height" /> <!-- height input -->
    </div>

    <button @click="clearStats">Clear</button> <!-- clear button -->
  </div>
</template>

<style scoped>
.bmi-form {
  width: 25%;
  margin: 0 auto;
}

.form-row {
  margin-bottom: 12px;
}

label {
  display: block;
  margin-bottom: 4px;
}

input {
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
}

button {
  margin-top: 8px;
}
</style>