window.onload=function(){
	
//VARIABLES
	
//scss vars
var color = {
'dark_indigo':   "#303F9F",
'indigo': 	 	"#3F51B5",
'light_indigo':  "#C5CAE9",
'white':    	 "#FFFFFF",
'orange':     	"#FF5722",
'dark':    		"#212121",
'gray':  		"#727272",
'light':     	"#B6B6B6"
}
	
//elements vars
var elems = {
	'dbody': document.body,
	'menu': document.querySelector(".menu"),
	'settings_menu_btn': document.querySelector(".settings_menu_btn"),
	'logout_menu_btn': document.querySelector(".logout_menu_btn"),
	'folders': document.querySelector(".folders"),
	

}
	
//FUNCTIONS
Logout = function(){
	var ans = confirm("Do you really want to logout?");
	if(ans){
		elems.dbody.style.opacity=0;
		setTimeout(function(){
		window.location.href = "/index/";
		}, 500);
	}
}	



	//PAGE ACTIONS
	//page load
	setTimeout(function(){elems.dbody.style.opacity=1;},500);
	
	//settings&logout
	elems.logout_menu_btn.onclick = function(){Logout();};
	
	//	
	console.log("script_loaded");
}
