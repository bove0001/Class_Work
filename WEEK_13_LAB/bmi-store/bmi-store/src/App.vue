<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

import { useBmiStore } from './stores/bmiStore.js'
import { storeToRefs } from 'pinia'

const bmiStore = useBmiStore()
const { calculatedBmi } = storeToRefs(bmiStore)
</script>

<template>
  <h1>This is App.vue</h1>

  <BodyMassIndexForm />

  <p v-if="calculatedBmi">Your BMI is: {{ calculatedBmi }}</p>
  <p v-else>Please enter your weight and height to calculate your BMI.</p>
</template>