/*

The Game Project

Week 10

Side Scrolling

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isPlummeting;
var isFalling;
var collectable;
var canyon;
var trees_x;
var treePos_y;
var cloud;
var mountain;
var cameraPosx;





function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isFalling = false;
	isLeft = false;
	isPlummeting = false;
	isRight = false;
	
	collectable ={
		x_pos: 300, 
		y_pos: 400, 
		size: 40,
		isFound: false
	};
	canyon = {
		x_pos:80,
		y_pos:floorPos_y
	};

	trees_x = [30, 780, 1530, 2280];
	treePos_y = 232;

	cloud = {
		x_pos: [140, 650, 1160, 1670],
		y_pos: 100,
		size: 70,
	};

	mountain = {
		x_pos: [600, 1600, 2600, 3600],
		y_pos: 432, 

	};

	cameraPosx = 0;
}

function draw()
{
	cameraPosx = gameChar_x/2;

	///////////DRAWING CODE//////////

	background(255, 245, 238); //fill the sky blue


	noStroke();
	fill(152, 239, 171);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	push();
	translate(-cameraPosx, 0);

	for(var m = 0; m < 10; m++){
		//mountain
		fill(175, 175, 176);
		triangle(mountain.x_pos[m],mountain.y_pos-332,mountain.x_pos[m]-250,mountain.y_pos,mountain.x_pos[m]+250,mountain.y_pos);
		//snow on top of the mountain
		fill(255);
		triangle(mountain.x_pos[m],mountain.y_pos-332,mountain.x_pos[m]-75,mountain.y_pos-232,mountain.x_pos[m]+75,mountain.y_pos-232); 
	}

	//for loop to draw multiple clouds
	for(var j = 0; j < cloud.x_pos.length; j++){
		//cloud
		fill(255);
		//cloud 1
		ellipse(cloud.x_pos[j]+60,cloud.y_pos,cloud.size+30);
		ellipse(cloud.x_pos[j]+130,cloud.y_pos,cloud.size+10);
		ellipse(cloud.x_pos[j],cloud.y_pos,cloud.size);

		ellipse(cloud.x_pos[j] - 40,cloud.y_pos+150,cloud.size+30);
		ellipse(cloud.x_pos[j]+30,cloud.y_pos+150,cloud.size+10);
		ellipse(cloud.x_pos[j] - 100,cloud.y_pos+150,cloud.size);
	}

	//for loop to draw multiple trees
	for(var i = 0; i < trees_x.length; i++){
		//tree bark
		fill(150, 88, 63);
		rect(trees_x[i],treePos_y,50,200);

		//tree leaves
		fill(122, 163, 91);
		ellipse(trees_x[i],treePos_y+28,100);
		ellipse(trees_x[i]+25,treePos_y-17,110);
		ellipse(trees_x[i]+60,treePos_y+28,100);

	}



	//draw the canyon
	//canyon
	//stream of water
	fill(255, 245, 238)
	rect(canyon.x_pos,canyon.y_pos, 150, width - floorPos_y);
	//mountains
	fill(204, 154, 129);
	rect(canyon.x_pos,canyon.y_pos, 50, width - floorPos_y);
	rect(canyon.x_pos+140,canyon.y_pos, 50, width - floorPos_y);




	//condition for the character to be drawn
	if(dist(collectable.x_pos, collectable.y_pos, gameChar_x, gameChar_y) < 20)
	{
		collectable.isFound = true;
	}
	//draw the collectable
	if (collectable.isFound == false){
		strokeWeight(4);
		stroke(255,215,0);
		fill(229, 108, 148);
		ellipse(collectable.x_pos,collectable.y_pos,collectable.size);
	}
	
	


	//the game character
	noStroke();
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill (0);
		ellipse(gameChar_x +2, gameChar_y - 53, 35);
	
		fill(173, 120, 102);
		beginShape()
		vertex(gameChar_x+3, gameChar_y-16);
		vertex(gameChar_x, gameChar_y-13);
		vertex(gameChar_x+10, gameChar_y);
		vertex(gameChar_x+13, gameChar_y -3);
		endShape()
	
		beginShape()
		vertex(gameChar_x-7, gameChar_y-16);
		vertex(gameChar_x-4, gameChar_y-13);
		vertex(gameChar_x-13, gameChar_y);
		vertex(gameChar_x-17, gameChar_y -3);
		endShape()
	
	
		fill(255,105,180);
		rect(gameChar_x - 7, gameChar_y - 36, 10, 16);
	
		fill(173, 120, 102);
		ellipse(gameChar_x -1, gameChar_y - 45, 20);
		rect(gameChar_x +2, gameChar_y- 36, 4, 16);
		
		fill(119,136,153);
		rect(gameChar_x -7, gameChar_y - 20, 11, 10);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill (0);
		ellipse(gameChar_x -2, gameChar_y - 53, 35);
	
		fill(173, 120, 102);
		beginShape()
		vertex(gameChar_x+3, gameChar_y-16);
		vertex(gameChar_x, gameChar_y-13);
		vertex(gameChar_x+10, gameChar_y);
		vertex(gameChar_x+13, gameChar_y -3);
		endShape()
	
		beginShape()
		vertex(gameChar_x-7, gameChar_y-16);
		vertex(gameChar_x-4, gameChar_y-13);
		vertex(gameChar_x-13, gameChar_y);
		vertex(gameChar_x-17, gameChar_y -3);
		endShape()
	
		fill(255,105,180);
		rect(gameChar_x - 7, gameChar_y - 36, 10, 16);
	
		fill(173, 120, 102);
		ellipse(gameChar_x, gameChar_y - 45, 20);
		rect(gameChar_x - 9, gameChar_y- 36, 4, 16);
	
		fill(119,136,153);
		rect(gameChar_x -7, gameChar_y - 20, 10, 10);

	}
	else if(isLeft)
	{
		// add your walking left code
		fill (0);
		ellipse(gameChar_x +2, gameChar_y - 53, 35);
	
		fill(255,105,180);
		rect(gameChar_x - 7, gameChar_y - 36, 10, 16);
	
		fill(173, 120, 102);
		ellipse(gameChar_x -1, gameChar_y - 45, 20);
		rect(gameChar_x +2, gameChar_y- 36, 4, 16);
		rect(gameChar_x -1, gameChar_y - 16, 4, 15);
		rect(gameChar_x -7, gameChar_y - 16, 4, 15);
		
	
		fill(119,136,153);
		rect(gameChar_x -7, gameChar_y - 20, 11, 10);


	}
	else if(isRight)
	{
		// add your walking right code
		fill (0);
		ellipse(gameChar_x -2, gameChar_y - 53, 35);
	
		fill(255,105,180);
		rect(gameChar_x - 7, gameChar_y - 36, 10, 16);
	
		fill(173, 120, 102);
		ellipse(gameChar_x, gameChar_y - 45, 20);
		rect(gameChar_x - 9, gameChar_y- 36, 4, 16);
		rect(gameChar_x-1, gameChar_y - 16, 4, 15);
		rect(gameChar_x -7, gameChar_y - 16, 4, 15);
	
		fill(119,136,153);
		rect(gameChar_x -7, gameChar_y - 20, 10, 10);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		fill (0);
		ellipse(gameChar_x, gameChar_y - 55, 35);
	
		fill(173, 120, 102);
		beginShape()
		vertex(gameChar_x+7, gameChar_y-36);
		vertex(gameChar_x+4, gameChar_y-33);
		vertex(gameChar_x+13, gameChar_y-20);
		vertex(gameChar_x+17, gameChar_y -23);
		endShape()
	
		beginShape()
		vertex(gameChar_x-7, gameChar_y-36);
		vertex(gameChar_x-4, gameChar_y-33);
		vertex(gameChar_x-13, gameChar_y-20);
		vertex(gameChar_x-17, gameChar_y -23);
		endShape()
	
		fill(255,105,180);
		rect(gameChar_x - 7, gameChar_y - 36, 15, 16);
	
		fill(173, 120, 102);
		ellipse(gameChar_x, gameChar_y - 45, 20);
		rect(gameChar_x +2, gameChar_y - 16, 6, 15);
		rect(gameChar_x -7, gameChar_y - 16, 6, 15);
	
		fill(119,136,153);
		rect(gameChar_x -7, gameChar_y - 20, 15, 10);

	}
	else
	{
		// add your standing front facing code
		fill (0);
		ellipse(gameChar_x, gameChar_y - 55, 35);
	
		fill(255,105,180);
		rect(gameChar_x - 7, gameChar_y - 36, 15, 16);
	
		fill(173, 120, 102);
		ellipse(gameChar_x, gameChar_y - 45, 20);
		rect(gameChar_x - 9, gameChar_y- 36, 4, 16);
		rect(gameChar_x +6, gameChar_y- 36, 4, 16);
		rect(gameChar_x +2, gameChar_y - 16, 6, 15);
		rect(gameChar_x -7, gameChar_y - 16, 6, 15);
	
		fill(119,136,153);
		rect(gameChar_x -7, gameChar_y - 20, 15, 10);

	}
	pop();

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	//move left
	if(isLeft == true){
		gameChar_x -=5;
	}
	//move right
	if(isRight == true){
		gameChar_x +=5;
	}
	//character falls back after jump
	if(gameChar_y <= floorPos_y-100){
		isFalling = true;
	}
	if(isFalling && gameChar_y < floorPos_y){
		gameChar_y +=3;
		console.log("Falling", gameChar_y, floorPos_y)
	} else if(gameChar_y == floorPos_y) {
		isFalling = false;
	}
	

    //conditional statement to set isPlummetting to true
	if(gameChar_x < canyon.x_pos +140 && gameChar_x > canyon.x_pos+50 && gameChar_y > floorPos_y -1){
		isPlummeting = true;
		console.log("Is plummetting", gameChar_x);
	}
	else {
		isPlummeting = false;
	}
	//characters falls down the canyon
	if(isPlummeting == true){
		gameChar_y +=7;
		gameChar_x = canyon.x_pos+90;
		
	}
	
	

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
	//make isLeft true
	if (keyCode == 37 || keyCode == 65){
		isLeft = true;
		console.log("left")
		console.log(gameChar_y);
	}
	//make isright true
	else if (keyCode == 39 || keyCode == 68){
		isRight = true;
		console.log("right")
	}
	// jump
	if ((keyCode == 38 || keyCode == 87) && gameChar_y == floorPos_y){
		gameChar_y -= 105;
		console.log("jump");
		return;
	}


	
	

	
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
	if (keyCode == 37 || keyCode == 65){
		isLeft = false;
		console.log("left")
	}
	else if (keyCode == 39 || keyCode == 68){
		isRight = false;
		console.log("right")
	}

}
