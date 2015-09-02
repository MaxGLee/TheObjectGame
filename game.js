//var Name = "Joe";
//var health = 100;
//var hit = 0;

var player =
    {
        name: "Joe",
        initialHealth: 100,
        health: 100,
        initialHitCount: 0,
        hitCount: 0,
        reset: function () {
            this.name = "Joe";
            this.health = this.initialHealth;
            this.hitCount = this.initialHitCount;
            update();
        },
        slap: function () {
            this.health -= 1;
            this.hitCount += 1;
            update();
        },
        punch: function () {
            this.health -= 5;
            this.hitCount += 1;
            update();
        },
        kick: function () {
            this.health -= 10;
            this.hitCount += 1;
            update();
        }
};

function update() {
    var healthStat = document.getElementById("healthStat")
    var playerName = document.getElementById("playerName")
    var playerHits = document.getElementById("playerHits")
    healthStat.innerText = player.health;
    playerName.innerText = player.name;
    playerHits.innerText = player.hitCount;
};

update();