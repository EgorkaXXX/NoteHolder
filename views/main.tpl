<!DOCTYPE HTML>

<head>
	<title>NoteHolder</title>
	<link rel="shortcut icon" href="/img/logo.png">
	<link rel="stylesheet" href="/scss/main.css">
	<script src="/js/main.js"></script>
	<script src="/js/main_php.js"></script>
	<script src="/js/jquery.js"></script>
	
</head>

<body>
	<!--	MENU-->
	<div class="menu">
		<div class="logo">
			<img src="/img/logo.png">
		</div>
		<div class="name">NoteHolder</div>
		<div class="email">Welcome, {$email}!</div>
		<div class="btn logout_menu_btn">Logout</div>
	</div>
<!--	FOLDERS-->
	<div class="folders"></div>
<!--	NOTES-->
	<div class="notes"></div>
	<div class="back"></div>
	<div class="add_note">
		<div class="vertical"></div>
		<div class="horizontal"></div>
	</div>
<!--	PLEASE SELECT YOUR FOLDER-->
	<div class="help">Please, select or create</br> your folder on</br>the left side menu.</div> 
<!--	ACTION BTNS-->
	<div class="buttons">
		<button class="add_folder">Add</button>
		<button class="remove_folder">Remove</button>
	</div>
<!--CONTEXT MENU-->
    <div class="itemName">
        <input type="hidden" name="item_name" id="item_name"></input>
    </div>
	
	
</body>