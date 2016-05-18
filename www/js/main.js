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
	'notes': document.querySelector(".notes"),
	'help': document.querySelector(".help"),
	'create_note_btn': document.querySelector(".create_note"),
	'remove_note_btn': document.querySelector(".remove_note"),
	'create_folder_btn': document.querySelector(".create_folder"),
	'remove_folder_btn': document.querySelector(".remove_folder")
	
}
var folder = elems.folders.childNodes;
var folderName;

var note = elems.notes.childNodes;

//FUNCTIONS
InitFolders = function(){
        
	for(i=0; i < folder.length; i++){
			folder[i].addEventListener('click', SelectFolder);
			//console.log(folder[i]);
		}
}

ViewFolders = function(){
    var postData = true;
    
    $.ajax({
        type:'POST',
        async: true,
        url:"?controller=folder&action=vfolders",
        data: postData,
        dataType: 'json',
        success: function(data){           
            for(var i = 0; i < data.length; i++){
                f = document.createElement("div");
                f.className = "folder folder_" + data[i]['name'];
                f.innerHTML = '<img src="/img/icons/folder.png">' + data[i]['name']+'</img>';
                elems.folders.appendChild(f);
            }
            InitFolders();
        }
 
    });
}

//FOLDERS
CreateFolder = function(){
    f = document.createElement("div");
    f_name = prompt("Enter folder name (no longer than 7 symbols!)");
	
	for(i=0; i < folder.length; i++){
			if(f_name==folder[i].className.substring(folder[i].className.length - f_name.length)){
				alert("This folder is already exists!");
				f_name=null;
			}
		}
	
	if(f_name==""){alert("Please, enter folder name!");}
	else if(f_name.length>7){alert("Folder name is too long!");}
	else if(f_name!=null){
			f.className = "folder folder_"+f_name;
            f.innerHTML = '<img src="/img/icons/folder.png">'+f_name+'</img>';
            elems.folders.appendChild(f);
		document.getElementById('folder_name').value = f_name;
    	AddNewFolder();
	}
    InitFolders();
}

RemoveFolder = function(){
	elems.folders.removeChild(t);
	window.t = null;
	elems.help.style.display = "block";
	setTimeout(function(){
		elems.help.style.opacity=1;
	},500);
        
        DeleteFolder();
	InitFolders();
	InitNotes();
}

SelectFolder = function(){
	elems.help.style.opacity = 0;
	setTimeout(function(){
		elems.help.style.display="none";
	},500);
	
	if(t!=undefined){
		t.style.background = color.white;
	}
	window.t = this;
	this.style.background = color.light_indigo;
        var postData = this.innerHTML;
        folderName = postData.split("img src=\"/img/icons/folder.png\">");
        document.getElementById('folder_name').value = folderName[1];
	InitNotes();
        
}


//NOTES
InitNotes = function(){
	for(i=0; i<note.length; i++){
		if(t==null){
			note[i].style.display="none";
		}else if(t.className.substring(7)==note[i].className.substring(note[i].className.length - t.className.substring(7).length)){
			note[i].style.display="block";
		}else{
			note[i].style.display="none";
		}
	}
}

CreateNote = function(){
	if(t!=undefined){
		n = document.createElement("div");
		n_name = prompt("Please enter note name!");
		
		if(n_name==""){alert("Please, enter note name!");}
		else if(n_name.length>20){alert("Note name is too long!");}
		else if(n_name!=null){
			n.className = "note note_"+n_name+" "+t.className.substring(7);
			n.innerHTML = "<h1>"+n_name+"</h1><textarea></textarea>";
			elems.notes.appendChild(n);
		}
	}else{
		alert("Please select folder!");
	}
}

RemoveNote = function(){
	
}

//CONTEXT&OTHER
ContextMenu = function(){
	if(t!=null){
		console.log("yes");
	}
}

Logout = function(){
	var ans = confirm("Do you really want to logout?");
	LoggingOut();
	if(ans){
		elems.dbody.style.opacity=0;
	}
}	

	//PAGE ACTIONS
	//page load
	setTimeout(function(){elems.dbody.style.opacity=1;},500);
        ViewFolders();
        window.t = null;
	
	//settings&logout
	elems.logout_menu_btn.onclick = function(){Logout();};
	elems.settings_menu_btn.onclick = function(){Settings();};

	//Notes&Folders
	elems.create_note_btn.onclick = function(){CreateNote();};
	elems.remove_note_btn.onclick = function(){RemoveNote();};
	elems.create_folder_btn.onclick = function(){CreateFolder();};
	elems.remove_folder_btn.onclick = function(){RemoveFolder();};
	
	//context
	window.oncontextmenu = function(){ContextMenu();/*return false;*/};
	
	//	
	console.log("script_loaded");
	
}

