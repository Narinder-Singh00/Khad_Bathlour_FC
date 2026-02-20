import { useState } from "react";
import "./teams.css";

const teamsData = {
  A: [
    { name: "Player 1", age: 24, birth: "1999-02-15", matches: 50, img: "https://via.placeholder.com/150", stats:{speed:80,durability:70,fitness:90} },
    { name: "Player 2", age: 26, birth: "1997-05-20", matches: 60, img: "https://via.placeholder.com/150", stats:{speed:70,durability:60,fitness:80} },
    { name: "Player 3", age: 23, birth: "2000-08-10", matches: 40, img: "https://via.placeholder.com/150", stats:{speed:90,durability:50,fitness:85} },
  ],
  B: [
    { name: "Player 4", age: 25, birth: "1998-01-12", matches: 45, img: "https://via.placeholder.com/150", stats:{speed:75,durability:80,fitness:70} },
    { name: "Player 5", age: 27, birth: "1996-03-17", matches: 55, img: "https://via.placeholder.com/150", stats:{speed:60,durability:90,fitness:65} },
    { name: "Player 6", age: 22, birth: "2001-11-03", matches: 35, img: "https://via.placeholder.com/150", stats:{speed:85,durability:70,fitness:90} },
  ],
  C: [
    { name: "Player 7", age: 24, birth: "1999-09-12", matches: 40, img: "https://via.placeholder.com/150", stats:{speed:70,durability:80,fitness:75} },
    { name: "Player 8", age: 26, birth: "1997-06-18", matches: 50, img: "https://via.placeholder.com/150", stats:{speed:65,durability:85,fitness:80} },
    { name: "Player 9", age: 23, birth: "2000-04-10", matches: 45, img: "https://via.placeholder.com/150", stats:{speed:80,durability:70,fitness:85} },
  ],
  D: [
    { name: "Player 10", age: 25, birth: "1998-12-20", matches: 60, img: "https://via.placeholder.com/150", stats:{speed:90,durability:60,fitness:80} },
    { name: "Player 11", age: 27, birth: "1996-08-30", matches: 55, img: "https://via.placeholder.com/150", stats:{speed:70,durability:75,fitness:65} },
    { name: "Player 12", age: 22, birth: "2001-02-14", matches: 35, img: "https://via.placeholder.com/150", stats:{speed:85,durability:80,fitness:90} },
  ],
};

export default function Teams() {
  const [activeTeam, setActiveTeam] = useState("A");
  const [openCardIndex, setOpenCardIndex] = useState(null);

  return (
    <div className="teams-page">
      <h1>Teams</h1>

      <div className="teams-buttons">
        {["A","B","C","D"].map(t => (
          <button 
            key={t} 
            className={activeTeam===t?"active":""} 
            onClick={()=>{setActiveTeam(t); setOpenCardIndex(null);}}
          >
            Team {t}
          </button>
        ))}
      </div>

      <div className="cards-container">
        {teamsData[activeTeam].map((player, idx) => (
          <div 
            key={idx} 
            className="player-card" 
            onClick={()=>setOpenCardIndex(openCardIndex===idx?null:idx)}
          >
            <div className="card-img">
              <img src={player.img} alt={player.name} />
            </div>
            <div className="card-info">
              <h3>{player.name}</h3>
              <p>Age: {player.age}</p>
              <p>Birth: {player.birth}</p>
              <p>Matches: {player.matches}</p>
            </div>

            {openCardIndex===idx && (
              <div className="card-stats">
                <div>
                  <span>Speed</span>
                  <div className="progress"><div style={{width:`${player.stats.speed}%`}}></div></div>
                </div>
                <div>
                  <span>Durability</span>
                  <div className="progress"><div style={{width:`${player.stats.durability}%`}}></div></div>
                </div>
                <div>
                  <span>Fitness</span>
                  <div className="progress"><div style={{width:`${player.stats.fitness}%`}}></div></div>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}