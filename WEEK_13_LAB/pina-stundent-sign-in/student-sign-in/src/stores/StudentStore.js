import { defineStore } from 'pinia' // define Pinia store
import { ref, computed } from 'vue' // Vue reactive tools

export const useStudentStore = defineStore('students', () => {
    const studentList = ref([ // student list
        { name: 'John Doe', starID: '123456', present: false },
        { name: 'Jane Smith', starID: '654321', present: false },
        { name: 'Alice Johnson', starID: '789012', present: false }
    ])

    const mostRecentStudent = ref({}) // most recent student

    const studentCount = computed(() => studentList.value.length) // total students

    const sortedStudents = computed(() => { // sorted student list
        return studentList.value.toSorted((a, b) => {
            return a.name.localeCompare(b.name)
        })
    })

    function addNewStudent(student) {
        studentList.value.push(student) // add student
        mostRecentStudent.value = student // update recent student
    }

    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter((student) => {
            return studentToDelete != student // remove matching student
        })
    }

    function arrivedOrLeft(student) {
        mostRecentStudent.value = student // update recent student
    }

    return {
        // reactive data
        studentList,
        mostRecentStudent,

        // functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // computed properties
        studentCount,
        sortedStudents
    }
})