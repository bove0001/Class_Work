<script setup>
import { useBmiStore } from '../stores/bmiStore.js'
import { storeToRefs } from 'pinia'

const bmiStore = useBmiStore()
const { height, weight } = storeToRefs(bmiStore)

function clearStats() {
  weight.value = 0
  height.value = 0
}
</script>

<template>
  <h3>Body Mass Index Form</h3>

  <label for="weight">Weight (kg):</label>
  <input type="number" id="weight" name="weight" v-model="weight" />
  <br>

  <label for="height">Height (cm):</label>
  <input type="number" id="height" name="height" v-model="height" />
  <br>

  <!-- <button>Calculate BMI</button> -->
  <button @click="clearStats">Clear</button>
</template>