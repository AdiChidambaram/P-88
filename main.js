var canvas = new fabric.Canvas("myCanvas");

var block_height = 30;
var block_width = 30;

var player_x = 10;
var player_y = 10;

var player = "";
var object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
      object = Img;
      object.scaleToWidth(150);
      object.scaleToHeight(150);
      object.set(
        {
        top:player_y,
        left:player_x


    }
      );

      canvas.add(object);

  });
}

function new_image(get_image){
  fabric.Image.fromURL(get_image, function(Img){
    object = Img;
    object.scaleToWidth(block_width);
    object.scaleToHeight(block_height);
    object.set(
      {
      top:player_y,
      left:player_x
}

    );

    canvas.add(object);

});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if(e.shiftKey == true && keyPressed == '80'){
    console.log("p and shift are pressed together");
    block_height = block_height+10;
    block_width = block_width+10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
  }

  if(e.shiftKey == true && keyPressed == '77'){
    console.log("m and shift are pressed together");
    block_height = block_height-10;
    block_width = block_width-10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
  }

  if (keyPressed == '70') {
    new_image("spiderman_face.png");
    console.log("f");
  }

  if (keyPressed == '66') {
    new_image("ironman_body.png");
    console.log("b");
  }

  if (keyPressed == '76') {
    new_image("hulk_legs.png");
    console.log("l");
  }

  if (keyPressed == '82') {
    new_image("thor_right_hand.png");
    console.log("r");
  }

  if (keyPressed == '72') {
    new_image("captain_america_left_hand.png");
    console.log("h");
  }

  if (keyPressed == '38') {
    up();
    console.log("up");
  }

  if (keyPressed == '40') {
    down();
    console.log("down");
  }

  if (keyPressed == '37') {
    left();
    console.log("left");
  }

  if (keyPressed == '39') {
    right();
    console.log("right");
  }

}

function up()
{
  if (player_y>=0) {
    player_y = player_y - block_height;
    console.log("block image height =" + block_height);
    console.log("When up arrow is pressed, X = "+player_x+" , Y = "+player_y);
    canvas.remove(object);
    player_update();
  }
}

function down()
{
  if (player_y<=450) {
    player_y = player_y + block_height;
    console.log("block image height =" + block_height);
    console.log("When up arrow is pressed, X = "+player_x+" , Y = "+player_y);
    canvas.remove(object);
    player_update();
  }
}

function left()
{
  if (player_x>0) {
    player_x = player_x - block_width;
    console.log("block image width =" + block_width);
    console.log("When up arrow is pressed, X = "+player_x+" , Y = "+player_y);
    canvas.remove(object);
    player_update();
  }
}


function right(){
  if (player_x<850) {
    player_x = player_x + block_width;
    console.log("block image height =" + block_width);
    console.log("When up arrow is pressed, X = "+player_x+" , Y = "+player_y);
    canvas.remove(object);
    player_update();
  }
}