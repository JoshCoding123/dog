//Create variables here
var dog, happyDog, database, foodS, foodStock, dogSprite, dogHappy
function preload()
{
	//load images here
  dog=loadImage("images/Dog.png")
  happyDog=loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  dogSprite=createSprite(200,200,34,65)
  dogSprite.addImage(dog)
  dogSprite.scale=0.5
 database=firebase.database()
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
background(46,139,87)
  drawSprites();
  textSize(75)
  fill("green")
  stroke("black")
  text("foodS:"+ foodS,100,450)
  //add styles here
  if(keyDown(UP_ARROW)){
    writeStock(foodS)

  dogSprite.addImage(happyDog)
}

}


function readStock(data){

  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
console.log(x)
database.ref('/').update({
 Food:x
})


}









function writeStock(x){

  database.ref('/').update({
  Food:x
  })

}
