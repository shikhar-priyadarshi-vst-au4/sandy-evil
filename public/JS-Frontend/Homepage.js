$(document).ready(function(){
    $('.logout').on('click',function(){
        console.log('logout clicked');
        $.post('/logout')
    })
    $('.btn-light').on('click',function(){
        console.log("menu");
        window.location.href="/menu";
    })
})