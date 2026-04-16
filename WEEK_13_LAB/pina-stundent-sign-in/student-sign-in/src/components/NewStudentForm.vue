<script setup>
import { ref } from 'vue';

import { useStudentStore } from '../stores/StudentStore.js'
const studentStore = useStudentStore()


const newStudentName = ref('');
const newStarID = ref('');
const formErrors = ref([]);

const addStudent = () => {
        // Clear old errors
        formErrors.value = []

        // Check name
        if (!newStudentName.value) {
            formErrors.value.push('Name is required')
        }

        // Check Star ID
        if (!newStarID.value) {
            formErrors.value.push('Star ID is required')
        }

        // Add student if valid
        if (formErrors.value.length === 0) {
            const student = {
                name: newStudentName.value,
                starID: newStarID.value,
                present: false
            }

            // TODO: Add student to database
            studentStore.addNewStudent(student)
            
            // Clear inputs
            newStudentName.value = ''
            newStarID.value = ''
        }
    }

</script>

<template>

        <!-- Validation errors -->
        <div id="new-student-form-errors" class="m-2">
            <div v-if="formErrors.length > 0" class="alert alert-danger">
                <ul class="mb-0">
                    <li v-for="error in formErrors">{{ error }}</li>
                </ul>
            </div>
        </div>

        <!-- Add student form -->
        <div id="new-student-form" class="card add-student m-2 p-2">
            <h4 class="card-title">Add new student</h4>

            <div class="form-group mb-3">
                <label for="name">Name</label>
                <!-- Student name input -->
                <input v-model.trim="newStudentName" id="name" class="form-control">
            </div>

            <div class="form-group mb-3">
                <label for="starID">Star ID</label>
                <!-- Star ID input -->
                <input v-model.trim="newStarID" id="starID" class="form-control">
            </div>

            <!-- Add button -->
            <button v-on:click="addStudent" class="btn btn-primary">Add</button>
        </div>

</template>


<style scoped>

</style>