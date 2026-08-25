<script setup>
import { ref } from 'vue'
import StudentForm from './components/StudentForm.vue'
import StudentDisplay from './components/StudentDisplay.vue'

const student = ref(null)

function receiveStudent(data) {
  student.value = data
}
</script>

<template>
  <div>
    <h1>Student Information System</h1>

    <StudentForm @student-submitted="receiveStudent" />

    <StudentDisplay :student="student" />
  </div>
</template>