var inputCountry;
var i=0;
$(document).ready(function(){
    $('#sec2').hide();
  $("#btn1").on('click',function(){
    inputCountry=$('input').val();
    console.log("Country Code "+inputCountry);
    $.get("https://newsapi.org/v2/top-headlines", 
    {
     country: inputCountry,
     apiKey:"7085c7d8fbff412587f06cf14a8c41b5"
    },function(data){
      $('#sec2').show();
    console.log(data.articles[i]);
    console.log(data.articles[i].content);
    $('.card-title').text(data.articles[i].title);
    $('img').attr("src",data.articles[i].urlToImage);
    $('.card-text').text(data.articles[i].content).appendTo('h4');
    $('<p/>').addClass("font-weight-light").text(data.articles[i].description).appendTo('h4');
    $('<a/>').attr('href',data.articles[i].url).text(data.articles[i].url).appendTo('h4');
    $('#btn1').text("Next");
    
    i=i+1;

    })




  })



    })