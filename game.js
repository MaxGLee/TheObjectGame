var health = 100;

function slap() {
    health -= 1;
    update();
};



function update() {
    var healthStat = document.getElementById("healthStat")
    healthStat.innerText = health;
}


