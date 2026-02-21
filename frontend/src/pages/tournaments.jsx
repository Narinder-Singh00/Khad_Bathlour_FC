import "./tournaments.css";
import { useState } from "react";

export default function Tournament() {

  const matches = [
    {
      team1: "Madrid",
      team2: "Portugal",
      score: "2 - 1",
      time: "7:30 PM",
      venue: "National Stadium",
      date: "15 March 2026"
    },
    {
      team1: "Barcelona",
      team2: "Brazil",
      score: "1 - 1",
      time: "6:00 PM",
      venue: "City Arena",
      date: "18 March 2026"
    }
  ];

  const calendar = [
    { date: "15 Mar", match: "Madrid vs Portugal" },
    { date: "18 Mar", match: "Barcelona vs Brazil" },
    { date: "21 Mar", match: "Team A vs Team B" },
    { date: "25 Mar", match: "Team C vs Team D" }
  ];

  const [form, setForm] = useState({
    team: "",
    manager: "",
    phone: "",
    payment: "UPI"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Team Registered Successfully");
  };

  return (
    <div className="tournament-page">

      {/* TOP MATCH BAR */}
      <div className="match-bar">
        {matches.map((match, index) => (
          <div className="match-card" key={index}>
            
            <div className="teams">
              <span>{match.team1}</span>
              <span className="score">{match.score}</span>
              <span>{match.team2}</span>
            </div>

            <div className="match-info">
              <span>🕒 {match.time}</span>
              <span>📍 {match.venue}</span>
              <span>📅 {match.date}</span>
            </div>

          </div>
        ))}
      </div>


      {/* MAIN SECTION */}
      <div className="tournament-container">

        {/* LEFT REGISTRATION */}
        <div className="registration">

          <h2>Team Registration</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Team Name"
              required
              onChange={(e)=>setForm({...form,team:e.target.value})}
            />

            <input
              type="text"
              placeholder="Manager Name"
              required
              onChange={(e)=>setForm({...form,manager:e.target.value})}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              onChange={(e)=>setForm({...form,phone:e.target.value})}
            />

            <select
              onChange={(e)=>setForm({...form,payment:e.target.value})}
            >
              <option>UPI</option>
              <option>Card</option>
              <option>Cash</option>
            </select>

            <button type="submit">Register Team</button>

          </form>

        </div>


        {/* RIGHT CALENDAR */}
        <div className="calendar">

          <h2>Match Calendar</h2>

          {calendar.map((item, index) => (
            <div className="calendar-card" key={index}>
              <span className="calendar-date">{item.date}</span>
              <span className="calendar-match">{item.match}</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}