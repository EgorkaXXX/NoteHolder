window.onload=function(){
//scss vars
var dark_indigo =   "#303F9F";
var indigo = 	 	"#3F51B5";
var light_indigo =  "#C5CAE9";
var white =    	 	"#FFFFFF";
var orange =     	"#FF5722";
var dark =    		"#212121";
var gray =  		"#727272";
var light =     	"#B6B6B6";
	
//elements vars
var name = document.querySelector(".name");
var menu = document.querySelector(".menu");
var log_menu_btn = document.querySelector(".log_menu_btn");
var reg_menu_btn = document.querySelector(".reg_menu_btn");
var log_form = document.querySelector(".log_form");
var reg_form = document.querySelector(".reg_form");
var log_btn = document.querySelector(".log_btn");
var reg_btn = document.querySelector(".reg_btn");	
var log_cancel_btn =document.querySelector(".log_cancel_btn");
var reg_cancel_btn =document.querySelector(".reg_cancel_btn");
var back = document.querySelector(".back");
var login_alert = document.querySelector(".login_alert");
	
	//ON_SCROLL ANIMATIONS
	window.onscroll = function(){
		var scroll = pageYOffset;
		
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
	
	//login form
	log_menu_btn.onclick = function(){
		log_form.style.top="150px";
		reg_form.style.top="-500px";
		
		back.style.opacity="1";
		back.style.zIndex="4";
	}
	
	log_cancel_btn.onclick = function(){
		log_form.style.top="-500px";
		
		back.style.opacity="0";	setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
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
		
		back.style.opacity="0";	setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
	}
	
	//back click
	back.onclick = function(){
		reg_form.style.top="-500px";
		log_form.style.top="-500px";
		
		back.style.opacity="0";	setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
	}
	
	//ALERTS
	
	//login alert
	show_login_alert = function(){
		login_alert.style.bottom="0";	setTimeout('document.querySelector(".login_alert").style.bottom="-80px"', 2000);
	}
	
	console.log("script_loaded");
}
