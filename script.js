// CONTADOR
let t = 900;
setInterval(()=>{
  let m = Math.floor(t/60);
  let s = t%60;
  document.getElementById("countdown").innerText =
    `${m}:${s<10?"0":""}${s}`;
  t--; if(t<0)t=900;
},1000);

// DADOS REAIS
const people = [
  {name:"Lucas",age:27,gender:"men"},
  {name:"Marcos",age:31,gender:"men"},
  {name:"Rafael",age:24,gender:"men"},
  {name:"Camila",age:26,gender:"women"},
  {name:"Juliana",age:29,gender:"women"},
  {name:"Fernanda",age:34,gender:"women"}
];

const cities = ["São Paulo - SP","Guarulhos - SP","Osasco - SP","Barueri - SP"];
const products = ["Netflix","Uber","99Food","Amazon","McDonald's","Xbox Game Pass"];

const box = document.getElementById("liveBuy");
const photo = document.getElementById("livePhoto");
const text = document.getElementById("liveText");

function showBuy(){
  const p = people[Math.floor(Math.random()*people.length)];
  const city = cities[Math.floor(Math.random()*cities.length)];
  const prod = products[Math.floor(Math.random()*products.length)];
  const img = Math.floor(Math.random()*80);

  photo.src = `https://randomuser.me/api/portraits/${p.gender}/${img}.jpg`;
  text.innerHTML = `<strong>${p.name}</strong>, ${p.age} anos<br>${city}<br>acabou de comprar <b>${prod}</b>`;
}

setInterval(showBuy,5000);
showBuy();
