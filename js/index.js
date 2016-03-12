window.onload=function(){
	
	//ON_SCROLL ANIMATIONS
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
	
	
	//BTN ANIMATION	
	document.querySelector(".log_btn").onmouseover = function(){
		this.style.boxShadow = "0 0 5px lightgray";
	}
	document.querySelector(".log_btn").onmouseout = function(){
		this.style.boxShadow = "0 0 0px lightgray";
	}
	
	document.querySelector(".reg_btn").onmouseover = function(){
		this.style.boxShadow = "0 0 5px lightgray";
	}
	document.querySelector(".reg_btn").onmouseout = function(){
		this.style.boxShadow = "0 0 0px lightgray";
	}
	
	
	
	console.log("script_loaded");
}
