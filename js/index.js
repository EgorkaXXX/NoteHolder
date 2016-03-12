window.onload=function(){
	
	
	window.onscroll = function(){
		var scroll = pageYOffset;
		
		//NAME APPEARENCE
		if(scroll>=105){
			document.querySelector(".name").style.color="black";
		}
		if(scroll<105){
			document.querySelector(".name").style.color="white";
		}
		
		//SHADOW APPEARENCE
		if(scroll>=10){
			document.querySelector(".menu").style.boxShadow="0 0 5px lightgray";
		}
		if(scroll<10){
			document.querySelector(".menu").style.boxShadow="0 0 0px lightgray";
		}
	}
	
	console.log("script_loaded");
}
