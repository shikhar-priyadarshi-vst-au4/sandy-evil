
$(document).ready(function(){


$('#imageClicker').on('click',function(){
    console.log($('#imageClicker'));
  toggleClass();    
});
function toggleClass(){


    if(!document.fullscreenElement){
        console.log(document.fullscreenElement);   
        document.documentElement.requestFullscreen();
    }
    else{
        if(document.exitFullscreen)
        {
            document.exitFullscreen();
        }
}

}
}
);