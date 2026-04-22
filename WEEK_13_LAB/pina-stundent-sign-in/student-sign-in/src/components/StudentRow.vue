<script setup>
import { useStudentStore } from '../stores/StudentStore.js' // student store

const props = defineProps({
    student: Object // student prop
})

const studentStore = useStudentStore() // use student store
const { arrivedOrLeft, deleteStudent } = studentStore // store functions
</script>

<template>
    <tr v-bind:class="{ present: student.present, absent: !student.present }"> <!-- row style -->
        <td>{{ student.name }}</td> <!-- student name -->
        <td>{{ student.starID }}</td> <!-- student StarID -->
        <td>
            <input
                type="checkbox"
                v-model="student.present"
                @change="arrivedOrLeft(student)"
            > <!-- attendance checkbox -->

            <span v-if="student.present" class="mx-3">Present</span> <!-- present text -->
            <span v-else class="mx-3">Absent</span> <!-- absent text -->
        </td>
        <td>
            <button @click="deleteStudent(student)" class="btn btn-danger">
                <i class="bi bi-trash"></i> Delete
            </button> <!-- delete button -->
        </td>
    </tr>
</template>

<style scoped>
.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}
</style>