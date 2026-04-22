<script setup>
import { useStudentStore } from '../stores/StudentStore.js' // student store
import { storeToRefs } from 'pinia' // keep store values reactive

const studentStore = useStudentStore() // use student store
const { mostRecentStudent } = storeToRefs(studentStore) // recent student ref
</script>

<template>
    <!-- Welcome/goodbye message -->
    <div id="welcome-or-goodbye-message" class="m-2">
        <div v-if="mostRecentStudent.name">
            <div v-if="mostRecentStudent.present" class="alert alert-success">
                Welcome, {{ mostRecentStudent.name }}!
            </div>
            <div v-else class="alert alert-info">
                Goodbye, {{ mostRecentStudent.name }}!
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>