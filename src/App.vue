<template>
  <div>
    <h1>Welcome Form</h1>

    <form>
      <input
        v-model="name"
        type="text"
        placeholder="Enter your Name"
      />
      <br /><br />

      <input
        v-model="age"
        type="number"
        placeholder="Enter your Age"
      />
      <br /><br />

      <input
        v-model="address"
        type="text"
        placeholder="Enter your Address"
      />
      <br /><br />

      <input
        v-model="course"
        type="text"
        placeholder="Enter your Course"
      />
      <br /><br />

      <input
        v-model="year"
        type="text"
        placeholder="Enter your Year"
      />

      <h3>Name: {{ name }}</h3>
      <h3>Age: {{ age }}</h3>
      <h3>Address: {{ address }}</h3>
      <h3>Course: {{ course }}</h3>
      <h3>Year: {{ year }}</h3>
    </form>

    <h1>Registration Form</h1>

    <form @submit.prevent="register">
      <input
        v-model="fname"
        type="text"
        placeholder="Enter your First Name"
        required
      />
      <br /><br />

      <input
        v-model="lname"
        type="text"
        placeholder="Enter your Last Name"
        required
      />
      <br /><br />

      <input
        v-model="mi"
        type="text"
        placeholder="Enter your Middle Name"
      />
      <br /><br />

      <input
        v-model="address2"
        type="text"
        placeholder="Enter your Address"
        required
      />
      <br /><br />

      <input
        v-model="email"
        type="email"
        placeholder="Enter your Email"
        required
      />
      <br /><br />

      <input
        v-model="birthdate"
        type="date"
        required
      />
      <br /><br />

      <input
        v-model="shortdes"
        type="text"
        placeholder="Enter your Short description"
      />
      <br /><br />

      <label>
        <input
          v-model="accept"
          type="checkbox"
          required
        />
        I agree
      </label>

      <br /><br />

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("");
    const age = ref("");
    const address = ref("");
    const course = ref("");
    const year = ref("");

    const fname = ref("");
    const lname = ref("");
    const mi = ref("");
    const address2 = ref("");
    const email = ref("");
    const birthdate = ref("");
    const shortdes = ref("");
    const accept = ref(false);

    function register() {
      alert("Registration successful!");
    }

    return {
      name,
      age,
      address,
      course,
      year,
      fname,
      lname,
      mi,
      address2,
      email,
      birthdate,
      shortdes,
      accept,
      register
    };
  }
};
</script>
