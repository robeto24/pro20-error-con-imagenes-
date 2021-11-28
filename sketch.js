const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var fondo
var Fondo
var  ASTRONAUTA;
var Cepillarce;
var ejercitarce;
var bañarse;
var movimiento;
var comer;


function preload(){

Fondo = loadAnimation("iss.png");  
ejercitarce = loadAnimation("gym12.png","gym11.png");
Cepillarce = loadAnimation("brush.png");
comer = loadAnimation("eat1.png","eat2.png");
bañarse = loadAnimation("bath1.png","bath2.png");
movimiento = loadAnimation("move1.png","move.png");
dormir = loadAnimation("sleep.png");




}


function setup() {
  createCanvas(800,400);

  fondo.createSprite(400, 200, 800, 400);
  ASTRONAUTA.createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  var  ASTRONAUTA_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   



}

function draw() {
  background(255,255,255);  
  

  fondo.addAnimation(Fondo);
  ASTRONAUTA.addAnimation(sleep);
  ASTRONAUTA.scale = 0.1
 
  if(keyDown("w")) {
    
   ASTRONAUTA.addAnimation(Cepillarce);
       
    
 }
  if(keyDown("s")) {
    
      
         
      
  }
 
  if(keyDown("d")) {
    
        
           
        
   }
 
   if(keyDown("a")) {
    
          
             
          
     }
     if(keyDown("m")) {
    
          
             
          
    }
 
         
         
 

  drawSprites();
}