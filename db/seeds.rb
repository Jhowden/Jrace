player1 = Player.create(name: "J-Howden")
player2 = Player.create(name: "Zach Diesel")
race = Race.create
player1.races << race
player2.races << race
