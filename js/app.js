/*

Bees: There are three types of bees in this game:

• Queen Bee. The Queen Bee has a lifespan of 100 Hit Points. When the Queen Bee is hit, 8
Hit Points are deducted from her lifespan. If/When the Queen Bee has run out of Hit Points,
All remaining alive Bees automatically run out of hit points. There is only 1 Queen Bee.

• Worker Bee. Worker Bees have a lifespan of 75 Hit Points. When a Worker Bee is hit, 10 Hit
Points are deducted from his lifespan. There are 5 Worker Bees.

• Drone Bee. Drone Bees have a lifespan of 50 Hit Points. When a Drone Bee is hit, 12 Hit
Points are deducted from his lifespan. There are 8 Drone Bees.

*/

//Initialize = isert bees to beehive

window.onload = initialize();

let msg = document.querySelector(".msg");

function addBee(type, life, hit, parent) {
  let bee = document.createElement("img");
  bee.src = 'img/bee.png';
  bee.life = life;
  bee.type = type;
  bee.hit = hit;
  document.querySelector(parent).appendChild(bee);
}

function initialize() {
  
  //check if you have any items already created
  let b = document.querySelectorAll(".beehive img")
  
       console.log("Bees inside of beehive "+ b.length );
       for(var i = 0; i < b.length; i++){
       let removeBee = document.querySelector(".beehive img");
       console.log("testando for ")
    removeBee.remove(); 
    
	}

  //add a queen
  addBee("queen", 100, 8, ".queen");

  //add 5 worker
  for (var i = 0; i < 5; i++) {
    addBee("worker", 75, 10, ".worker");
  }

  //add 8 drone
  for (var i = 0; i < 8; i++) {
    addBee("drone", 50, 12, ".drone");
  }

}


//action button hit
document.getElementById("hit").onclick = function () {
  
  //select bees and random it
  var bees = document.querySelectorAll(".beehive img"),
    beeSelected = bees[Math.floor(Math.random() * bees.length)];

  //delete message
  msg.innerHTML = "";

  //so take the bee selected and hit
  beeSelected.life = beeSelected.life - beeSelected.hit;

  console.log(beeSelected.type);
  console.log(beeSelected.life);

  //take node selected for remove bee
  let parent = beeSelected.parentElement;

  //bee without life so remove bee
  if (beeSelected.life <= 0) {

    console.log("Will be deleted bee " + beeSelected.type);

    parent.removeChild(beeSelected);

    console.log("bees alive " + (bees.length - 1));

  }

  if(document.querySelector(".drone img") == null && document.querySelector(".worker img") == null ){ 

    msg.innerHTML = "<h1>You killed all bees! You won!</h1>";
    //parent.removeChild(beeSelected);
         initialize();
   } 
   if(document.querySelector(".queen img") == null){ 
   
    msg.innerHTML = "<h1>You killed the queen! You won!</h1>";
    //parent.removeChild(beeSelected);
         initialize();
   } 

}

/*
Code Evolution
https://jsfiddle.net/x7v18ugo/5/
https://jsfiddle.net/1cma7t9o/2/
https://jsfiddle.net/b8v49s26/1/
https://jsfiddle.net/b8v49s26/2/
https://jsfiddle.net/168zk9dg/
https://jsfiddle.net/168zk9dg/1/
https://jsfiddle.net/qwfa2x6c/
*/
