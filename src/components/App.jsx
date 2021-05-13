import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({ fName: "", lName: "", email: "" });

  const handleNameChange = (event) => {
    const { value, name } = event.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}{" "}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={handleNameChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleNameChange}
          name="lName"
          placeholder="Last Name"
        />
        <input onChange={handleNameChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
