window.onload=function(){
	
	//ON_SCROLL ANIMATIONS
	window.onscroll = function(){
		var scroll = pageYOffset;
		
		//name&shadow appearence
		if(scroll>=15){
			document.querySelector(".name").style.color="black";
			document.querySelector(".menu").style.boxShadow="0 0 10px lightgray";
		}
		if(scroll<15){
			document.querySelector(".name").style.color="white";
			document.querySelector(".menu").style.boxShadow="0 0 0px lightgray";
		}
		
	}
	
	//FORM APPEARENCE\HIDE
	
	//login form
	document.querySelector(".log_menu_btn").onclick = function(){
		document.querySelector(".log_form").style.top="150px";
		document.querySelector(".reg_form").style.top="-500px";
		
		document.querySelector(".back").style.display="block";	document.querySelector(".back").style.background="rgba(1,1,1,0.5)";
	}
	
	document.querySelector(".log_cancel_btn").onclick = function(){
		document.querySelector(".log_form").style.top="-500px";
		
		document.querySelector(".back").style.display="none";	document.querySelector(".back").style.background="rgba(1,1,1,0)";
		
	}
	
	//register form
	document.querySelector(".reg_menu_btn").onclick = function(){
		document.querySelector(".reg_form").style.top="150px";
		document.querySelector(".log_form").style.top="-500px";
		
		document.querySelector(".back").style.display="block";	document.querySelector(".back").style.background="rgba(1,1,1,0.5)";
		
	}
	
	document.querySelector(".reg_cancel_btn").onclick = function(){
		document.querySelector(".reg_form").style.top="-500px";
		
		document.querySelector(".back").style.display="none";	document.querySelector(".back").style.background="rgba(1,1,1,0)";
	}
	
	//back click
	document.querySelector(".back").onclick = function(){
		document.querySelector(".reg_form").style.top="-500px";
		document.querySelector(".log_form").style.top="-500px";
		
		document.querySelector(".back").style.display="none";	document.querySelector(".back").style.background="rgba(1,1,1,0)";
	}
	
	
	
	console.log("script_loaded");
}
