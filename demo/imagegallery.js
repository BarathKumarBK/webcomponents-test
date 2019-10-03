/*It is the Documentation Html*/
var docHtml='';
$(document).ready(function(){
	var directoryPath="../assets/";
	
	for(var index=1;index<=8;index++){	
   		var img_count=8;
   		var slideIndex = 4;
   		docHtml='<div class="container">';
   		for(var container=1;container<=img_count;container++){
		containerimg=directoryPath+"image"+container+".jpg";
   			docHtml=docHtml
   		+'<div class="flowerSlides" onmouseout="show()" onmouseover="hide()"><img src="'+containerimg+'" style="width:100%"></div>'
   		;}
   		docHtml=docHtml
   		+'<br>'
   		+'<div class="row" id="galleryDiv">';
   		for(var column=1;column<=img_count;column++){
   			columnimg=directoryPath+"image"+column+".jpg";
   			docHtml=docHtml
   		+'<div class="column"><img class="demo cursor img-height" src="'+columnimg+'" style="width:100%" onclick="onSlide('+column+')" alt="image'+column+'"></div>'
   		;}
   		docHtml=docHtml
   		+'</div>'
   		+'</div>';
   		$('#test').html(docHtml);
   		showSlides(slideIndex);

	}

});

function onSlide(n) {
	$('#test').html(docHtml);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var flowerSlides = document.getElementsByClassName("flowerSlides");
  var demo = document.getElementsByClassName("demo");
  
  if (n > flowerSlides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = flowerSlides.length}
  for (i = 0; i < flowerSlides.length; i++) {
      flowerSlides[i].style.display = "none";
  }
  for (i = 0; i < demo.length; i++) {
      demo[i].className = demo[i].className.replace(" active", "");
  }
  flowerSlides[slideIndex-1].style.display = "block";
  demo[slideIndex-1].className += " active";
}

function hide(){
	document.getElementById('galleryDiv').style.display="none";
}
function show(){
	document.getElementById('galleryDiv').style.display="block";
}
