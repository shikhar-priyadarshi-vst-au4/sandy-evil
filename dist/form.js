var retriever, inpVal1, inpVal2;
var i, inpp;
var k=0;
var colHead, colName, colAge, colLast, trr, index;
var firstName;
var lastName;
var numberString;
var flag=0;
var year;
var detect=0;
$(document).ready(function(){
$.ajax({
    method:"GET",
    url:"form.json",
    datatype:"json",
    success:function(data){
     retriever=JSON.parse(JSON.stringify(data));
     console.log(retriever);
     for(j=0;j<retriever.length;j++)
      { k=k+1  
       trr=$('<tr/>');
       colHead=$('<th/>').attr('scope',"row").html(k);
       colName=$('<td/>').html(retriever[j].name);
       colLast=$('<td/>').html(retriever[j].last);
       colAge=$('<td/>').html(retriever[j].age);
       trr.appendTo('tbody');
       colHead.appendTo(trr);
       colName.appendTo(trr);
       colLast.appendTo(trr);
       colAge.appendTo(trr);  
    }    
     
    $('a').on('click',function(){
      inpVal1=$('#inputField1').val()+" ";
      inpVal2=$('#inputField2').val();
      retriever=JSON.parse(JSON.stringify(retriever));
      
      console.log(inpVal1+ typeof inpVal1);
      
      console.log(retriever[0].name);
        if(inpVal1==" " && inpVal2=="")
      {   $('a').addClass('disabled');
        $('input').attr('disabled',true);   
      $('div #success').addClass('alert alert-info').html("huh! No response."); 
          
        }
      
        for(var b=0;b<inpVal1.length;b++)
        { var getter=inpVal1.toUpperCase();
          if(!((getter.charCodeAt(b)>64
          &&getter.charCodeAt(b)<91) ||(getter.charCodeAt(b)==32)))
          {
           $('a').addClass('disabled');
           $('input').attr('disabled',true);
            $('div #success').addClass('alert alert-info').html('Invalid inputs. Name can only have alphabets.');
            detect=1;
            break;  
          
          }
        }




        if(inpVal2<15 && inpVal2!=""&& detect==0){
           $('a').addClass('disabled');
        $('input').attr('disabled',true);
            $('div #success').addClass('alert alert-info').html("Age shouldn't be less than 15"); 
          
         }    
       for(var t=0;t<retriever.length;t++)
       { inpp=retriever[t].name+" "+retriever[t].last+" ";
         year=retriever[t].age; 
       console.log(retriever[t].name+" "+retriever[t].last);
        console.log(inpp);
        if(inpp.toUpperCase()==inpVal1.toUpperCase()){
            if(year==inpVal2){
                flag=1;
                break;
     
            }
                   }
    }
       if(inpVal1!=""&&(inpVal2!=""&&inpVal2>15)&&(flag==0)&&(detect==0)){
       $('a').addClass('disabled');
        $('input').attr('disabled',true);   
       $('div #success').addClass('alert alert-info').html("Successfully Listed");
        index=inpVal1.indexOf(" ");
         console.log(index);
         k=k+1;
         trr=$('<tr/>');
         colHead=$('<th/>').attr('scope',"row").html(k);
        firstName=inpVal1.substring(0,index);
        if(index!=-1){
            lastName=inpVal1.substring(index+1);
               
        }
        lastname="";
        colName=$('<td/>').html(firstName);
        colLast=$('<td/>').html(lastName);
        colAge=$('<td/>').html(inpVal2);
        trr.appendTo('tbody');
        colHead.appendTo(trr);
        colName.appendTo(trr);
        colLast.appendTo(trr);
        colAge.appendTo(trr); 
    }
    else if(flag==1){
      $('a').addClass('disabled');
      $('input').attr('disabled',true); 
      $('div #success').addClass('alert alert-info').html("Already Listed."); 
        
    }    
  });
    }
});

$('#Reset').on('click',function(){
  $('a').removeClass('disabled');
        $('input').removeAttr('disabled'); 
   
});
});