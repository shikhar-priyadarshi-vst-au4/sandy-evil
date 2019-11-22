$(document).ready(function(){
    $('.bookingcard').hide();
    $('.btn-outline-secondary').on('click',function(){
        console.log('Pay is clicked');
        window.location.href='/paymentgate/paytm/request';
    })
    $('.col').on('click',function(){
        if($(this).css("background-color")!="rgb(247, 136, 136)")
          {
            $('.bookingcard').show().css({
                "display":"flex",
                "justify-content":"center",
                "align-item":"center",
                "margin-top":"5%",
                

            });
            console.log($(this).text());
            $('input:eq(1)').val($(this).text());            
          }

    })
    $('.mini-container').hide();
    $('input:eq(4)').on('click',function(){
        $('.mini-container').show();
        
    });
    $('.btn-dark').on('click',()=>{
        window.location.href='/menu';
    })
    $('.leftarrow').on('click',()=>{
        console.log($(this));
        $.get('/booking/details',{
           notclicked:true
        },function(){
            console.log("done");
        })
    })
    $('.rightarrow').on('click',()=>{
        console.log($(this));
        $.get('/booking/details',{
            notclicked:false
         },function(){
             console.log("done");
         })
    })
    
    
    Signout=()=>{
        $.post('/logout');
    }
    
})