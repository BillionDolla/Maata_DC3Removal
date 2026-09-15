import { useState } from "react";

function FormActivity() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mi, setMi] = useState("");
  const [Address, setAddress2] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [shortdes, setShortdes] = useState("");
  const [accept, setAccept] = useState(false);

  function register(e) {
    e.preventDefault();
    alert("Registration successful!");
  }

  return (
    <>
      <h1>Welcome Form</h1>

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your Name"
        />
        <br /><br />

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Enter your Age"
        />
        <br /><br />

        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Enter your Address"
        />
        <br /><br />

        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          type="text"
          placeholder="Enter your Course"
        />
        <br /><br />

        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          placeholder="Enter your Year"
        />

        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Address: {address}</h3>
        <h3>Course: {course}</h3>
        <h3>Year: {year}</h3>
      </form>

      <h1>Registration Form</h1>

      <form onSubmit={register}>
        <input
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          type="text"
          placeholder="Enter your First Name"
          required
        />
        <br /><br />

        <input
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          type="text"
          placeholder="Enter your Last Name"
          required
        />
        <br /><br />

        <input
          value={mi}
          onChange={(e) => setMi(e.target.value)}
          type="text"
          placeholder="Enter your Middle Name"
        />
        <br /><br />

        <input
          value={Address}
          onChange={(e) => setAddress2(e.target.value)}
          type="text"
          placeholder="Enter your Address"
          required
        />
        <br /><br />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your Email"
          required
        />
        <br /><br />

        <input
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          type="date"
          required
        />
        <br /><br />

        <input
          value={shortdes}
          onChange={(e) => setShortdes(e.target.value)}
          type="text"
          placeholder="Enter your Short description"
        />
        <br /><br />

        <label>
          <input
            checked={accept}
            onChange={(e) => setAccept(e.target.checked)}
            type="checkbox"
            required
          />
          I agree
        </label>

        <br /><br />

        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default FormActivity;
