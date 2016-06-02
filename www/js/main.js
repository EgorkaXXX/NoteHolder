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
	'logout_menu_btn': document.querySelector(".logout_menu_btn"),
	'folders': document.querySelector(".folders"),
	'notes': document.querySelector(".notes"),
	'back': document.querySelector(".back"),
	'help': document.querySelector(".help"),
	'add_note': document.querySelector(".add_note"),
	'remove_note': document.querySelector(".remove_note"),
	'add_folder': document.querySelector(".add_folder"),
	'remove_folder': document.querySelector(".remove_folder")
	
}
var folder = elems.folders.childNodes;
var folderName;

var note = elems.notes.childNodes;
var noteName;
	
//FUNCTIONS
InitFolders = function(){
        
	for(i=0; i < folder.length; i++){
			folder[i].addEventListener('click', SelectFolder);
		}
}

ViewFolders = function(){
    func = function(data){
        for(var i = 0; i < data.length; i++){
                f = document.createElement("div");
                f.id = data[i]['name'];
                f.className = "folder folder_" + data[i]['name'];
                f.innerHTML = '<img src="/img/icons/folder.png">' + data[i]['name']+'</img>';
                elems.folders.appendChild(f);
            }
            InitFolders();
    }
    
    AjaxFunc(true, "?controller=folder&action=vfolders", func);
}

ViewNotes = function(){
    func = function(data){
        for(var i = 0; i < data.length; i++){             
                n = document.createElement("div");
                n.id = data[i]['name'];
                n.className = "note note_"+data[i]['name']+" "+"folder_"+data[i]['folder_name'];
                n.innerHTML = "<h1>"+data[i]['name']+"</h1><textarea name='"+data[i]['name']+"' \n\
                onblur='GiveContent()'>"+data[i]['content']+"</textarea><div class='remove_note'><img src='../img/clear.svg'></div>";
                elems.notes.appendChild(n); 
            }
        DeselectNote();
	for(var i = 0; i < note.length; i++){
            note[i].addEventListener('click', SelectNote);
            note[i].style.display = "none";
        }
    }
    
    AjaxFunc(".itemName", "?controller=note&action=vnotes", func);
}

GiveContent = function(){    
    var test = $("textarea").serializeArray();
    for(var i = 0; i < test.length; i++){
        if(test[i].name.indexOf(noteName) != -1){
            document.getElementById("item_name").value +="&nbsp" + test[i].value;
        } 
    }
  
    AddContent();
}

//FOLDERS
CreateFolder = function(){
    f = document.createElement("div");
    f_name = prompt("Enter folder name (no longer than 7 symbols!)");
	
	for(i=0; i < folder.length; i++){
			f1 = folder[i].className.split(" ");
			f2 = f1[1].split("_");
		
			if(f_name==f2[1]){
				alert("This folder is already exists!");
				f_name=null;
			}
		}
	
	if(f_name==""){alert("Please, enter folder name!");}
	else if(f_name.length>50){alert("Folder name too long!");}
	else if(f_name!=null){
            f.id = f_name;
            f.className = "folder folder_"+f_name;
            f.innerHTML = '<img src="/img/icons/folder.png">'+f_name+'</img>';
            elems.folders.appendChild(f);
		document.getElementById('item_name').value = f_name;
    	AddNewFolder();
	}
	DeselectNote();
    InitFolders();
}

RemoveFolder = function(){
	elems.folders.removeChild(t);
	window.t = null;
	elems.help.style.display = "block";
    DeleteFolder();
	InitFolders();
	DeselectNote();
	InitNotes();
}

SelectFolder = function(){
	elems.help.style.display="none";
	
	if(t!=undefined){
		t.style.background = color.white;
	}
	window.t = this;
	this.style.background = color.light_indigo;
        folderName = this.id;
        document.getElementById('item_name').value = this.id;
        
        DeselectNote();
	InitNotes();
        
}

DeselectFolder = function(){
	if(t!=null){t.style.background=color.white;}
	window.t = null;
	InitNotes();
	elems.help.style.display = "block";
}

//NOTES
InitNotes = function(){
	for(i=0; i<note.length; i++){
		note[i].addEventListener('click', SelectNote);
		note[i].lastChild.addEventListener('click', RemoveNote);
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
        else if(document.getElementById(n_name)){alert("This note already exists");}
		else if(n_name!=null){
                        n.id = n_name;
			n.className = "note note_"+n_name+" "+t.className.substring(7);
			n.innerHTML = "<h1>"+n_name+"</h1><textarea name='"+n_name+"' \n\
                        onblur=GiveContent()></textarea><div class='remove_note'><img src='../img/clear.svg'></div>";
			elems.notes.appendChild(n);
                        var note_str = folderName + "&nbsp" + n_name;
                        document.getElementById('item_name').value = note_str;
                        AddNewNote();
                        DeselectNote();
                        InitNotes();
		}
	}else{
		alert("Please select folder!");
	}
        
	
}

RemoveNote = function(){
	elems.notes.removeChild(tn);
	window.tn=null;
        DeleteNote();
}

SelectNote = function(){
	if(tn!=null){
		tn.style.transform="scale(1,1)";
		tn.lastChild.style.display="none";
	}
	window.tn = this;
	tn.style.transform="scale(1.1,1.1)";
	tn.lastChild.style.display="block";
        noteName = this.id;
        var note_str = folderName + "&nbsp" + this.id;
        
        document.getElementById('item_name').value = note_str;
}

DeselectNote = function(){
	if(tn!=null){
		tn.style.transform="scale(1,1)";
		tn.lastChild.style.display="none";
	}
	window.tn = null;
}

Logout = function(){
	var ans = confirm("Do you really want to logout?");
	if(ans){
		LoggingOut();
		elems.dbody.style.opacity=0;
	}
}	

	//PAGE ACTIONS
	//page load
	setTimeout(function(){elems.dbody.style.opacity=1;},500);
        ViewFolders();
        ViewNotes();
        window.t = null;
		window.tn = null;
	
	//logout
	elems.logout_menu_btn.onclick = function(){Logout();};

	//Notes&Folders
	elems.add_note.onclick = function(){CreateNote();};
	elems.add_folder.onclick = function(){CreateFolder();};
	elems.remove_folder.onclick = function(){RemoveFolder();};

	elems.back.onclick = function(){DeselectNote();};
	elems.folders.onclick = function(){DeselectNote();};
	elems.menu.onclick = function(){DeselectNote();DeselectFolder();};
		
	//	
	console.log("script_loaded");
	

}

