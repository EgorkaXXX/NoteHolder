window.onload=function(){
	
	//ON_SCROLL ANIMATIONS
	window.onscroll = function(){
		var scroll = pageYOffset;
		
		//name appearence
		if(scroll>=100){
			document.querySelector(".name").style.color="black";
		}
		if(scroll<100){
			document.querySelector(".name").style.color="white";
		}
		
		//shadow appearence
		if(scroll>=15){
			document.querySelector(".menu").style.boxShadow="0 0 5px lightgray";
		}
		if(scroll<15){
			document.querySelector(".menu").style.boxShadow="0 0 0px lightgray";
		}
	}
	
	//FORM APPEARENCE\HIDE
	
	//login form
	document.querySelector(".log_menu_btn").onclick = function(){
		document.querySelector(".log_form").style.top="150px";
		document.querySelector(".reg_form").style.top="-500px";
		
	}
	
	document.querySelector(".log_cancel_btn").onclick = function(){
		document.querySelector(".log_form").style.top="-500px";
		
	}
	
	//register form
	document.querySelector(".reg_menu_btn").onclick = function(){
		document.querySelector(".reg_form").style.top="150px";
		document.querySelector(".log_form").style.top="-500px";
		
	}
	
	document.querySelector(".reg_cancel_btn").onclick = function(){
		document.querySelector(".reg_form").style.top="-500px";
		
	}
	
	
	console.log("script_loaded");
}
