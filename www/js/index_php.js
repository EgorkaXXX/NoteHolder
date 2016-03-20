function getData(obj_form){
    var hData = {};
    $('input, textarea, select', obj_form).each(function(){
        if(this.name && this.name!=''){
            hData[this.name] = this.value;
        }
    });
    return hData;
}

function formHide(form){
    document.querySelector(form).style.top="-500px";
}

// регистрация нового пользователя
function registerNewUser(){
    var postData = getData('.reg_form');
    
    $.ajax({
        type:'POST',
        async: true,
        url:"?controller=user&action=register",
        data: postData,
        dataType: 'json',
        success: function(data){ 
            
        if(data['success']){ 
                HideForm();
                ShowAlert(data['message']);
               
            } else {
                ShowAlert(data['message']);
            }
        }
    });
}
//авторизация пользователя
function authoriseUser(){
    var postData = getData('.log_form');
    
    $.ajax({
        type:'POST',
        async: true,
        url:"?controller=user&action=authorise",
        data: postData,
        dataType: 'json',
        success: function(data){ 
            
        if(data['success']){ 
                LoginSuccess();
            } else {
                ShowAlert(data['message']);
            }
        }
    });
}