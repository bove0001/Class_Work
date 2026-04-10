<script setup>
import { ref } from 'vue' // import ref
import BodyMassIndexForm from './components/BodyMassIndexForm.vue' // import child component

// store bmi
const bmi = ref(0)

// calculate bmi
function calculateBmi(theWeight, theHeight) {
  bmi.value = theWeight / (theHeight * theHeight)
  // alert(`Your BMI is: ${bmi.value.toFixed(2)}`)
}
</script>

<template>
  <h1>This is App.vue</h1> <!-- page title -->

  <BodyMassIndexForm @stats-entered="calculateBmi" /> <!-- listen for child event -->

  <p v-if="bmi">Your BMI is: {{ bmi }}</p> <!-- show bmi -->
  <p v-else>Please enter your weight and height to calculate your BMI.</p> <!-- fallback text -->
</template>