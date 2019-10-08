var result;
var inpVal1,inpVal2;
$(document).ready(function(){
   $.get(('CurrencyExchange.json'),function(data){
   
   data.forEach(function(value)
   {
    $('<a/>').addClass("dropdown-item").text(value).appendTo(".dropdown-menu");
    $('<option/>').attr('value',value).text(value).appendTo('select');
   }
   
   )
   $('.jumbotron').hide();
   






   })
   
$('.switch').on('click',function(){

    inpVal1=$('#currencyOne').val();
    inpVal2=$('#currencyTwo').val();
    console.log(inpVal1);
if(inpVal1.toString()!=inpVal2.toString()){
    $.get("https://api.exchangeratesapi.io/latest",{
    base:inpVal1.toString()
}, function(retriever){
 //var data2=JSON.parse(JSON.stringify(retriever));
 result=retriever.rates[inpVal2];
 console.log(result);
 $('.jumbotron').show();
 $('#result').text(result);
 $('#currencyFirst').text("1"+" "+inpVal1);
 $('#currencySecond').text(inpVal2);
 $('#eq').text("=");
 $('#result #eq #currencyFirst #currencySecond').appendTo('.lead');
})
}
else{
    $('.jumbotron').show();
    $('#result').text("Error: Inputs can't be similar.").appendTo('#errorStat');
    $('.jumbotron').fadeOut(5000);
}  
})});