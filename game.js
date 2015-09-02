var health = 100;
var name = "Joe";
var hits = 0;

function slap() {
    health -= 1;
    hits += 1;
    update();
};

function punch() {
    health -= 5;
    hits += 1;
    update();
};  

function kick() {
    health -= 10;
    hits += 1;
    update();
};

function update() {
    var healthStat = document.getElementById("healthStat")
    var playerName = document.getElementById("playerName")
    var playerHits = document.getElementById("playerHits")
    healthStat.innerText = health;
    playerName.innerText = name;
    playerHits.innerText = hits;
};