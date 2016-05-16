window.onload=function(){
	
	//ON_SCROLL ANIMATIONS
	window.onscroll = function(){
		var scroll = pageYOffset;
		var name = document.querySelector(".name");
		var menu = document.querySelector(".menu");
		
		//name&shadow appearence
		if(scroll>=15){
			name.style.color="black";
			menu.style.boxShadow="0 0 10px lightgray";
		}
		if(scroll<15){
			name.style.color="white";
			menu.style.boxShadow="0 0 0px lightgray";
		}
		
	}
	
	//FORM APPEARENCE\HIDE
	var log_menu_btn = document.querySelector(".log_menu_btn");
	var reg_menu_btn = document.querySelector(".reg_menu_btn");
	var log_form = document.querySelector(".log_form");
	var reg_form = document.querySelector(".reg_form");
	var log_cancel_btn = document.querySelector(".log_cancel_btn");
	var reg_cancel_btn = document.querySelector(".reg_cancel_btn");
	var back = document.querySelector(".back");
	
	
	//login form
	log_menu_btn.onclick = function(){
		log_form.style.top="150px";
		reg_form.style.top="-500px";
		
		back.style.opacity="1";
		back.style.zIndex="4";
	}
	
	log_cancel_btn.onclick = function(){
		log_form.style.top="-500px";
		
		back.style.opacity="0";
		setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
		
	}
	
	//register form
	reg_menu_btn.onclick = function(){
		reg_form.style.top="150px";
		log_form.style.top="-500px";
		
		back.style.opacity="1";
		back.style.zIndex="4";
		
	}
	
	reg_cancel_btn.onclick = function(){
		reg_form.style.top="-500px";
		
		back.style.opacity="0";
		setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
	}
	
	//back click
	back.onclick = function(){
		reg_form.style.top="-500px";
		log_form.style.top="-500px";
		
		back.style.opacity="0";
		setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
	}
	
	
	
	console.log("script_loaded");
}
