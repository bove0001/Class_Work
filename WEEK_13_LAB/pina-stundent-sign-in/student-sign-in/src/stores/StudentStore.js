import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStudentStore = defineStore('students', () => {
    const studentList = ref([
        { name: 'John Doe', starID: '123456', present: false },
        { name: 'Jane Smith', starID: '654321', present: false },
        { name: 'Alice Johnson', starID: '789012', present: false }
    ])

    const mostRecentStudent = ref({})

    const studentCount = computed(() => studentList.value.length)

    const sortedStudents= computed(() => {
        return studentList.value.toSorted( (a, b) => {
            return a.name.localeCompare(b.name)
        })
    })


    function addNewStudent(student) {
        studentList.value.push(student)
        mostRecentStudent.value = student
    }

    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete != student
        })
    }

    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }



    return {
        // reactive data
        studentList,
        mostRecentStudent,
        studentCount,

        //functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        //computede properties
        studentCount,
        sortedStudents

    }
})