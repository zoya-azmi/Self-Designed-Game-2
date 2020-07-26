var canvas, background;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var gamePieceImg1, gamePieceImg2, gamePieceImg3, gamePieceImg4, ladderImg1, ladderImg2, 
ladderImg3, snakeImg1, snakeImg2, snakeImg3, snakeImg4;

function preload(){
  gamePieceImg1 = loadImage("../images/blue_game_piece.jpg");
  gamePieceImg2 = loadImage("../images/red_game_piece.jpg");
  gamePieceImg3 = loadImage("../images/green_game_piece.jpg");
  gamePieceImg4 = loadImage("../images/yellow_game_piece.jpg");

  ladderImg1 = loadImage("../images/ladder1.jpg");
  ladderImg2 = loadImage("../images/ladder2.jpg");
  ladderImg3 = loadImage("../images/ladder3.jpg");

  snakeImg1 = loadImage("../images/snake1.png");
  snakeImg2 = loadImage("../images/snake2.png");
  snakeImg3 = loadImage("../images/snake3.png");
  snakeImg4 = loadImage("../images/snake4.png");
}

function setup(){
  canvas = createCanvas(700,700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
