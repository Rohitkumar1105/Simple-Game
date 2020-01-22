var pic = document.getElementById("image");
function random()
{
	//Getting a random value 
	randomx = Math.floor(Math.random()*500);
	randomy = Math.floor(Math.random()*900);

	//applying the random value to the style property of picture
	pic.style.top = randomx + "px";
	pic.style.left = randomy + "px";

}

var a = setInterval(random, 1000);


function change(){
	pic.src = "dragon.gif";
}
				
function kill()
{
	pic.src="blood.jpg";
	var b = setTimeout(change,50);

	//Score Calculation
	var score = document.getElementById('temp').value;
	score = Number(score) + 1;
	document.getElementById('temp').value = score;
	document.getElementById('score').innerHTML = score;

	if (score == 10){
		document.write("GAME OVER..!!! Reload the page to replay the game");
		document.getElementById("score").textContent = Number(0);
		document.getElementById('temp').value = Number(0);
	}
}


