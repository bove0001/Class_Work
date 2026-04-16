import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useBmiStore = defineStore("bmiStore", () => {
    const weight = ref(0);
    const height = ref(0);

    const calculatedBmi = computed(() => {
        if (height.value <= 100 || weight.value <= 30) {
            return null;
        }

        const heightInMeters = height.value / 100;
        return weight.value / (heightInMeters * heightInMeters);
    });

    return { 
        weight, 
        height,
        calculatedBmi
    };
});