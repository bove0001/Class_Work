<script setup>
import { useStudentStore } from '../stores/StudentStore.js'

const props = defineProps({
    student: Object
})

const studentStore = useStudentStore()
const { arrivedOrLeft, deleteStudent } = studentStore
</script>

<template>
    <tr v-bind:class="{ present: student.present, absent: !student.present }">
        <td>{{ student.name }}</td>
        <td>{{ student.starID }}</td>
        <td>
            <input
                type="checkbox"
                v-model="student.present"
                @change="arrivedOrLeft(student)"
            >

            <span v-if="student.present" class="mx-3">Present</span>
            <span v-else class="mx-3">Absent</span>
        </td>
        <td>
            <button @click="deleteStudent(student)" class="btn btn-danger">
                <i class="bi bi-trash"></i> Delete
            </button>
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