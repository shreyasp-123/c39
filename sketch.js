var database
var gameState = 0;
var playerCount;
var allPlayers;
var form, game, player;
var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img, trackImg

function preload(){
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")
    trackImg = loadImage("images/track.jpg")
}

function setup(){
    createCanvas(displayWidth - 20,displayHeight - 30);

    database = firebase.database()
    console.log(database)
    game = new Game()
    game.getState()
    game.start()
}

function draw(){

    if(playerCount === 4){
        game.update(1)
    }
    if(gameState === 1){
        game.play();
    }
    if(gameState === 2){
        console.log("Game Ended")
    }
    
}
