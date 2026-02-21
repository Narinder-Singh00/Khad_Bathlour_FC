import "./contact.css";
import { useState } from "react";

export default function Contact(){

  const [login,setLogin] = useState({
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value});
  };

  const handleLogin=(e)=>{
    e.preventDefault();
    alert("Login submitted");
  };

  const handleContact=(e)=>{
    e.preventDefault();
    alert("Message sent");
  };

  return(

    <div className="contact-page">

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">


        {/* LEFT SIDE CONTACT FORM */}
        <div className="contact-left">

          <h2>Send Message</h2>

          <form onSubmit={handleContact}>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              placeholder="Your Message"
              required
            />

            <button type="submit">
              Send Message
            </button>

          </form>


          {/* CLUB INFO */}

          <div className="club-info">

            <h3>Club Info</h3>

            <p>📍 Location: Khad Bathlour, Punjab</p>
            <p>📞 Phone: +91 9876543210</p>
            <p>📧 Email: khadbathlourfc@gmail.com</p>

          </div>

        </div>



        {/* RIGHT SIDE PLAYER LOGIN + LINKS */}

        <div className="contact-right">

          <h2>Player Login</h2>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={login.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={login.password}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Login
            </button>

          </form>



          {/* QUICK LINKS */}

          <div className="quick-links">

            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/teams">Teams</a>
            <a href="/tournaments">Tournaments</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>

          </div>

        </div>

      </div>

    </div>

  );

}