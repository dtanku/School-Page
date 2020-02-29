function playjjba() { 
	var jjba = document.getElementById("himniv2"); 
	jjba.play(); 
} 
function pausejjba() {
	var jjba = document.getElementById("himniv2");  
	jjba.pause(); 
} 
function resetjjba() {
	var jjba = document.getElementById("himniv2");
	jjba.reset();
}
function playriff() { 
  var riff = document.getElementById("riff"); 
  riff.play(); 
}
function leku() {
	alert ("Lek Plepi dhe Linda Morina nxorrën këngën e re!")
}
function lekcheck(){
	var timecheck;
	timecheck = setInterval(lekalert, 500);
}
function lekalert() {
	var date = new Date;
	var s = date.getSeconds();
	var m = date.getMinutes();
	var h = date.getHours();
	if(h == 18 && m == 29 && s == 50) {
		alert("Është ora 18 e 30 pa 10 sekonda!");
	} else {}
}