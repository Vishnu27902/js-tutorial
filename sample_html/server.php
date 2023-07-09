<?php
    $data=[];
    if(empty($_POST['name'])){
        $data['message']="Name Required";
        $data['status']=false;
    }
    else{
        $data['message']="Success";
        $data['status']=true;
    }
    echo json_encode($data);
?>