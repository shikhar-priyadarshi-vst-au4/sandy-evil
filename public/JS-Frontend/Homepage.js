$(document).ready(function(){
    $('.logout').on('click',function(){
        console.log('logout clicked');
        $.post('/logout')
    })
})