$(document).ready(function(){
    $('.dashboard-elem').hide(); 
    $('.createorder-elem').hide()
    $('#dashboard').on('click',function(){
        console.log("Dashboard was clicked.");
        $('.dashboard-elem').show();
        $('.createorder-elem').hide();    
        
             
        
    })
    $('#createorder').on('click',function(){
        console.log("Createorder was clicked.");
        $('.createorder-elem').show();

             $('.dashboard-elem').hide();
        
    })
    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Indian', 'Chinese', 'Italian', 'Mexican', 'Japanese', 'Korean'],
                datasets: [{
                    label: '# Supply',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }



    });    
      
    $('.badge').on('click',function(){
        if($(this).hasClass('badge-success'))
        {
            $(this).removeClass('badge-success').addClass('badge-danger').text('Offline');
        }
        else{
            $(this).removeClass('badge-danger').addClass('badge-success').text('Online');
        }
         
       })
               

                    


})
