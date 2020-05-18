var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");


setGradient();

/*body.style.background = "linear-gradient(to right, " + color1.value + ","+ color2.value + ")";
*/
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

/*picking random colores*/

function randomColor () {
	var x = Math.round(Math.random()*255).toString(16);
	if (x.length < 2) {
		x = "0"+x;	
	}
	return x;
}

function addRandomColor () {
	color1.value ="#"+randomColor()+ randomColor() +randomColor();
	color2.value ="#"+randomColor()+ randomColor() +randomColor();
	setGradient();
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", addRandomColor);
