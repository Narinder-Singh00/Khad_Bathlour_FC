import { useState } from "react";
import axios from "axios";

export default function tournaments() {

  const [form, setForm] = useState({
    name: "",
    team: "",
    email: "",
    phone: ""
  });

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tournaments/register", form);
    alert("Registered");
  };

  return (
    <div className="page">
      <h1>Tournament Registration</h1>

      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="team" placeholder="Team" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <button>Register</button>
      </form>

    </div>
  );
}