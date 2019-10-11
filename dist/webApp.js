var inputCity;
$(document).ready(function(){
   $('#clickCity').on('click',function(){
    inputCity=$('#cityName').val();
    inputCity=inputCity;
    console.log(inputCity);
    
    $.get("https://api.openweathermap.org/data/2.5/weather",
    {
        q:inputCity,
        appid:"e11b53420fc90df18758439e348325ab"

    },function(retriever){
     //retriever=JSON.parse(retriever.weather);
     //var header=$('<h1/>').html(retriever.weather[0].main);
     $('#weatherMain').append("<h4>"+"The weather is - "+retriever.weather[0].main+"</h4>");
     $('#lonlat').append("<h4>"+"The longitude- "+retriever.coord.lon+"</h4>");
     $('#lonlat').append("<h4>"+"The longitude- "+retriever.coord.lat+"</h4>");
     $('#lonlat').append("<h4>"+"The name of City - "+retriever.name+"</h4>");
     $('#lonlat').append("<h4>"+"The Current Temperature - "+(retriever.main.temp-273).toFixed(2)+" C</h4>");
     $('#lonlat').append("<h4>"+"City's Humidity - "+retriever.main.humidity+"</h4>");
     $('#lonlat').append("<h4>"+"Speed of Wind - "+retriever.wind.speed+"miles/hr</h4>");
     $('#lonlat').append("<h4>"+" Wind at degree - "+retriever.wind.deg+"deg</h4>");
     $('#reload').on('click',function(){
      location.reload(false); 
    })
     
     //header.appendTo('#weatherMain');

    })

    //{"coord":{"lon":77.22,"lat":28.65},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"}],"base":"stations","main":{"temp":295.15,"pressure":1011,
    //"humidity":78,"temp_min":295.15,"temp_max":295.15},"visibility":2500,"wind":{"speed":2.1,"deg":260},"clouds":{"all":0},"dt":1570752432,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1570754943,"sunset":1570796800},"timezone":19800,"id":1273294,"name":"Delhi","cod":200}



   })
    









})