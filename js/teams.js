const teams = {

A:[
{
name:"Player A1",
age:21,
matches:15,
img:"https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
speed:80,
shoot:70,
fitness:90
},
{
name:"Player A1",
age:21,
matches:15,
img:"https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
speed:80,
shoot:70,
fitness:90
},
{
name:"Player A1",
age:21,
matches:15,
img:"https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
speed:80,
shoot:70,
fitness:90
},
{
name:"Player A1",
age:21,
matches:15,
img:"https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
speed:80,
shoot:70,
fitness:90
},
{
name:"Player A1",
age:21,
matches:15,
img:"https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
speed:80,
shoot:70,
fitness:90
},
],

B:[
{
name:"Player B1",
age:24,
matches:18,
img:"https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
speed:85,
shoot:80,
fitness:88
}
],

C:[
{
name:"Player C1",
age:20,
matches:10,
img:"https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
speed:70,
shoot:65,
fitness:80
}
],

D:[
{
name:"Player D1",
age:26,
matches:22,
img:"https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
speed:90,
shoot:88,
fitness:92
}
]

};

document.addEventListener("DOMContentLoaded",()=>{

const nav = document.querySelector(".nav-links");
document.querySelector(".hamburger").onclick=()=>{
nav.classList.toggle("active");
};

showTeam("A");

});

function showTeam(team){

const container = document.getElementById("players");
const title = document.getElementById("teamTitle");

title.innerText="Team "+team;

container.innerHTML="";

teams[team].forEach(player=>{

container.innerHTML+=`

<div class="player" onclick="togglePlayer(this)">

<img src="${player.img}">

<div class="player-basic">

<h3>${player.name}</h3>

<p>Age: ${player.age}</p>

<p>Matches: ${player.matches}</p>

</div>

<div class="player-progress">

<div class="progress-box">
<span>Speed</span>
<div class="progress">
<div style="width:${player.speed}%"></div>
</div>
</div>

<div class="progress-box">
<span>Shooting</span>
<div class="progress">
<div style="width:${player.shoot}%"></div>
</div>
</div>

<div class="progress-box">
<span>Fitness</span>
<div class="progress">
<div style="width:${player.fitness}%"></div>
</div>
</div>

</div>

</div>

`;

});

}

function togglePlayer(card){

card.classList.toggle("expanded");

}
