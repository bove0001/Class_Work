<script setup>
import { useStudentStore } from '../stores/StudentStore.js'
import { storeToRefs } from 'pinia'
import StudentRow from './StudentRow.vue'  


const studentStore = useStudentStore()
const { sortedStudents, studentList, studentCount } = storeToRefs(studentStore)

const { arrivedOrLeft, deleteStudent } = studentStore

</script>

<template>
    <div id="student-list-table" class="card m-2 p-2">
        <h4 class="card-title">Student List</h4>
        <h5 class="card-subtitle mb-2 text-muted">Total students: {{ studentCount }}</h5>

        <div id="student-table">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    <StudentRow 
                        v-for="student in sortedStudents"
                        :key="student.starID"
                        v-bind:student="student" 
                    />  
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
#student-table {
    max-height: 400px;
    overflow: scroll;
}

th, tr {
    width: 25%;
}


</style>