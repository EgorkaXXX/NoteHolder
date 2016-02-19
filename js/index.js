function findFirstByClass (className) {
	return document.getElementsByClassName(className)[0];
}

window.onload = function () {

	var elements = {
		title: findFirstByClass('title'),
		right: findFirstByClass('right'),
		tagLine: findFirstByClass('tagline'),
		'login_btn': findFirstByClass('login_btn'),
	};

	//Appearance animations with delay
	setTimeout(function () {
		elements.title.style.color = "black";
		elements.right.style.top = 0;
	}, 1000);
	
	setTimeout(function () {
		elements.tagLine.style.color = "black";
	}, 2000);
	
	//login animation
	elements['login_btn'].onclick = function () {
		elements.title.style.color = "transparent";
		elements['right'].style.top = "-1000px";

		setTimeout(function () {
			elements.tagLine.style.color = "transparent";
		}, 1000);
	};
	
	console.log("script_loaded");
};