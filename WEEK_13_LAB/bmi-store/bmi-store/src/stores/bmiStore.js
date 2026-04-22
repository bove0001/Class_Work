import { defineStore } from "pinia"; // define Pinia store
import { computed, ref } from "vue"; // Vue reactive tools

export const useBmiStore = defineStore("bmiStore", () => {
    const weight = ref(0); // store weight
    const height = ref(0); // store height

    const calculatedBmi = computed(() => { // computed BMI
        if (height.value <= 100 || weight.value <= 30) {
            return null; // invalid input
        }

        const heightInMeters = height.value / 100; // convert cm to m
        return weight.value / (heightInMeters * heightInMeters); // BMI formula
    });

    return { 
        weight, 
        height,
        calculatedBmi
    };
});