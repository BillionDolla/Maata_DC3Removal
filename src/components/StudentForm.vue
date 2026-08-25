<script setup>
import { ref } from 'vue'

const studentName = ref('')
const studentID = ref('')
const course = ref('')
const yearLevel = ref('')
const email = ref('')

const emit = defineEmits(['student-submitted'])

function submitStudent() {
  const student = {
    name: studentName.value,
    id: studentID.value,
    course: course.value,
    yearLevel: yearLevel.value,
    email: email.value
  }

  emit('student-submitted', student)
}
</script>

<template>
  <form @submit.prevent="submitStudent">
    <h2>Student Information Form</h2>

    <label>Student Name:</label>
    <input type="text" v-model="studentName" required>

    <br><br>

    <label>Student ID:</label>
    <input type="text" v-model="studentID" required>

    <br><br>

    <label>Course:</label>
    <select v-model="course" required>
      <option value="">Select Course</option>
      <option value="BSIT">BSIT</option>
      <option value="BSCS">BSCS</option>
      <option value="BSIS">BSIS</option>
    </select>

    <br><br>

    <label>Year Level:</label>

    <input type="radio" value="1st Year" v-model="yearLevel">
    1st Year

    <input type="radio" value="2nd Year" v-model="yearLevel">
    2nd Year

    <input type="radio" value="3rd Year" v-model="yearLevel">
    3rd Year

    <input type="radio" value="4th Year" v-model="yearLevel">
    4th Year

    <br><br>

    <label>Email:</label>
    <input type="email" v-model="email" required>

    <br><br>

    <button type="submit">Submit Student</button>
  </form>
</template>
