<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue' // child form component

import { useBmiStore } from './stores/bmiStore.js' // BMI store
import { storeToRefs } from 'pinia' // make store values reactive

const bmiStore = useBmiStore() // use BMI store
const { calculatedBmi } = storeToRefs(bmiStore) // BMI result from store
</script>

<template>
  <h1>BMI Calculator</h1> <!-- page title -->

  <BodyMassIndexForm /> <!-- BMI form -->

  <p v-if="calculatedBmi">Your BMI is: {{ calculatedBmi }}</p> <!-- show BMI -->
  <p v-else>Please enter valid weight (>30 kg) and height (>100 cm) to calculate your BMI.</p> <!-- fallback message -->
</template>