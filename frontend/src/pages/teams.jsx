import { useState } from "react";
import "./teams.css";

const teams = {

  A: [
    { name: "John Smith", age: 24, matches: 50, img: "https://picsum.photos/400/500?random=1" },
    { name: "Alex Brown", age: 26, matches: 60, img: "https://picsum.photos/400/500?random=2" },
    { name: "David Lee", age: 23, matches: 40, img: "https://picsum.photos/400/500?random=3" },
    { name: "Chris Evans", age: 25, matches: 55, img: "https://picsum.photos/400/500?random=4" },
    { name: "John Smith", age: 24, matches: 50, img: "https://picsum.photos/400/500?random=1" },
    { name: "Alex Brown", age: 26, matches: 60, img: "https://picsum.photos/400/500?random=2" },
    { name: "David Lee", age: 23, matches: 40, img: "https://picsum.photos/400/500?random=3" },
    { name: "Chris Evans", age: 25, matches: 55, img: "https://picsum.photos/400/500?random=4" },
    { name: "John Smith", age: 24, matches: 50, img: "https://picsum.photos/400/500?random=1" },
    { name: "Alex Brown", age: 26, matches: 60, img: "https://picsum.photos/400/500?random=2" },
    { name: "David Lee", age: 23, matches: 40, img: "https://picsum.photos/400/500?random=3" },
    { name: "Chris Evans", age: 25, matches: 55, img: "https://picsum.photos/400/500?random=4" },
  ],

  B: [
    { name: "Player B1", age: 22, matches: 35, img: "https://picsum.photos/400/500?random=5" },
    { name: "Player B2", age: 27, matches: 70, img: "https://picsum.photos/400/500?random=6" },
    { name: "Player B3", age: 24, matches: 45, img: "https://picsum.photos/400/500?random=7" },
    { name: "Player B4", age: 28, matches: 80, img: "https://picsum.photos/400/500?random=8" },
  ],

  C: [
    { name: "Player C1", age: 21, matches: 30, img: "https://picsum.photos/400/500?random=9" },
    { name: "Player C2", age: 26, matches: 60, img: "https://picsum.photos/400/500?random=10" },
    { name: "Player C3", age: 25, matches: 55, img: "https://picsum.photos/400/500?random=11" },
    { name: "Player C4", age: 29, matches: 90, img: "https://picsum.photos/400/500?random=12" },
  ],

  D: [
    { name: "Player D1", age: 23, matches: 40, img: "https://picsum.photos/400/500?random=13" },
    { name: "Player D2", age: 24, matches: 50, img: "https://picsum.photos/400/500?random=14" },
    { name: "Player D3", age: 27, matches: 75, img: "https://picsum.photos/400/500?random=15" },
    { name: "Player D4", age: 28, matches: 85, img: "https://picsum.photos/400/500?random=16" },
  ]

};

export default function Teams() {

  const [activeTeam, setActiveTeam] = useState("A");

  return (

    <div className="teams-page">

      <h1>Our Teams</h1>

      {/* Team buttons */}
      <div className="team-buttons">

        {["A","B","C","D"].map(team => (

          <button
            key={team}
            className={activeTeam === team ? "active" : ""}
            onClick={() => setActiveTeam(team)}
          >
            Team {team}
          </button>

        ))}

      </div>

      {/* Cards */}
      <div className="cards-container">

        {teams[activeTeam].map((player, i) => (

          <div className="player-card" key={i}>

            <div className="img-box">
              <img src={player.img}/>
            </div>

            <div className="info">

              <h3>{player.name}</h3>

              <p>Age: {player.age}</p>

              <p>Matches: {player.matches}</p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}