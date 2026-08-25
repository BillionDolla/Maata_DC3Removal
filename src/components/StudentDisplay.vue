<script setup>
defineProps({
  student: Object
})
</script>

<template>
  <div v-if="student">
    <h2>Student Information</h2>

    <p>Name: {{ student.name }}</p>
    <p>Student ID: {{ student.id }}</p>
    <p>Course: {{ student.course }}</p>
    <p>Year Level: {{ student.yearLevel }}</p>
    <p>Email: {{ student.email }}</p>
  </div>
</template>