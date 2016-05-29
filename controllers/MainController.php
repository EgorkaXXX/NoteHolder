<?php

include_once '../models/FoldersModel.php';

function indexAction($smarty){
    
    $smarty->assign('user_id', getCurrentUser());
    $smarty->assign('folders', currentUserFolders(getCurrentUser()));
	$smarty->assign("email", $_SESSION['email']);
    loadTemplate($smarty, 'main');
}

