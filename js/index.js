window.onload=function(){
	
	//Appearence animations with delay
	
	setTimeout(function(){
		
	document.getElementsByClassName("title")[0].style.color="black";
	document.getElementsByClassName("right")[0].style.top="0";

	}, 1000);
	
	setTimeout(function(){
		
	document.getElementsByClassName("tagline")[0].style.color="black";
	
		
	}, 2000);
	
	
	
	//login animation
	
	document.getElementsByClassName("login_btn")[0].onclick=
		function(){
	
	
		
	document.getElementsByClassName("title")[0].style.color="transparent";
		
	setTimeout(function(){
		
	document.getElementsByClassName("tagline")[0].style.color="transparent";
		
	}, 1000);
		
	document.getElementsByClassName("right")[0].style.top="-1000px";
	
	};
	
	console.log("script_loaded");
}