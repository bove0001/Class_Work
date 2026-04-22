<script setup>
import { ref } from 'vue' // Vue refs

import { useStudentStore } from '../stores/StudentStore.js' // student store
const studentStore = useStudentStore() // use student store

const newStudentName = ref('') // new student name
const newStarID = ref('') // new Star ID
const formErrors = ref([]) // form errors

const addStudent = () => {
        formErrors.value = [] // clear old errors

        if (!newStudentName.value) {
            formErrors.value.push('Name is required') // check name
        }

        if (!newStarID.value) {
            formErrors.value.push('Star ID is required') // check Star ID
        }

        if (formErrors.value.length === 0) {
            const student = {
                name: newStudentName.value,
                starID: newStarID.value,
                present: false
            }

            studentStore.addNewStudent(student) // add student to store
            
            newStudentName.value = '' // clear name
            newStarID.value = '' // clear Star ID
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
                <input v-model.trim="newStudentName" id="name" class="form-control"> <!-- name input -->
            </div>

            <div class="form-group mb-3">
                <label for="starID">Star ID</label>
                <input v-model.trim="newStarID" id="starID" class="form-control"> <!-- Star ID input -->
            </div>

            <button v-on:click="addStudent" class="btn btn-primary">Add</button> <!-- add button -->
        </div>

</template>

<style scoped>
</style>