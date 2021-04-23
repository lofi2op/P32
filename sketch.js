const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    // backgroundImg = loadImage("light.jpeg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 50, 150, 170);

    block1 = new Box(420,265,30,40);
    block1.shapeColor = ("red")
    block2 = new Box(450,265,30,40);
    block3 = new Box(480,265,30,40);
    block4 = new Box(510,265,30,40);
    block5 = new Box(540,265,30,40);
    block6 = new Box(570,265,30,40);
    block7 = new Box(600,265,30,40);

    block8 = new Box(450,235,30,40);
    block9 = new Box(480,235,30,40);
    block10 = new Box(510,235,30,40);
    block11 = new Box(540,235,30,40);
    block12 = new Box(570,235,30,40);

    block13 = new Box(480,195,30,40);
    block14 = new Box(510,195,30,40);
    block15 = new Box(540,195,30,40);

    block16 = new Box(510,155,30,40);

    log1 = new Ground(510,300,200,10)

    block17 = new Box(750,155,30,40);
    block18 = new Box(780,155,30,40);
    block19 = new Box(810,155,30,40);
    block20 = new Box(840,155,30,40);
    block21 = new Box(870,155,30,40);

    block22 = new Box(780,125,30,40);
    block23 = new Box(810,125,30,40);
    block24 = new Box(840,125,30,40);

    block25 = new Box(810,95,30,40);

    log2 = new Ground(810,200,160,10);


    bird = new Bird(150, 50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:150, y:250});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg)

    getBgImage(); 

    text(mouseX + "," +mouseY, 30,30);

    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    log1.display();
    log2.display();



    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();



    bird.display();
 
    //log6.display();
    slingshot.display();   
   
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attatch(bird.body)
    }
}

async function getBgImage(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour >= 06 && hour <= 18){
        bg = "light.jepg"
    }
    else{
        bg = "dark.jpg"
    }

    backgroundImg = loadImage(bg)

}