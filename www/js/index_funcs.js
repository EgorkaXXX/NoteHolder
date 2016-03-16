//FUNCTIONS
MenuAnim = function(){
	var scroll = pageYOffset;
	if(scroll>=15){
		name.style.opacity="1";
		menu.style.boxShadow="0 0 10px lightgray";
	}
	if(scroll<15){
		name.style.opacity="0";
		menu.style.boxShadow="0 0 0px lightgray";
	}
}

ShowRegForm = function(){
	reg_form.style.top="150px";
	log_form.style.top="-500px";
	back.style.opacity="1";
	back.style.zIndex="4";
}

ShowLogForm = function(){
	log_form.style.top="150px";
	reg_form.style.top="-500px";
	back.style.opacity="1";
	back.style.zIndex="4";
}

ShowAlert = function(message){
	alert.innerHTML=message;
	alert.style.bottom="0";
	setTimeout('document.querySelector(".alert").style.bottom="-100px"', 2000);
}

LoginSuccess = function(){
	dbody.style.opacity=0;
}

HideForm = function(){
	reg_form.style.top="-500px";
	log_form.style.top="-500px";
	back.style.opacity="0";
	setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
}