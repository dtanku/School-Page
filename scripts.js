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
function pranimi() {
	var pranimi = document.getElementById("pranimi");
	if (pranimi.checked == false){
	alert ("Ça bo mo burr?")
}