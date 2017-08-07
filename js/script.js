$(document).ready(function(){

 $('.search-input').on('keyup', function(event) {
   event.preventDefault();
   
  if(event.which === 13) {
    var input = $(this);
    var inputValue = $(this).val();
       if(inputValue !== '') {
         var url = "https://api.apixu.com/v1/current.json?key=818c7f26205c47a2937192407171406&q="+ inputValue;
               getUrl(url);
                $(this).val('');
            } 
        }
       
   });  

if($('.search-input').val() === '') {
    var defaultUrl = "https://api.apixu.com/v1/current.json?key=818c7f26205c47a2937192407171406&q=auto:ip"; 
    getUrl(defaultUrl);

    }
             
function getUrl(url) {  
      console.log(url);        
    $.getJSON(url, function(data){
              var weatherType, icon, temperature, humidity, windSpeed, country,region,cityName,tempFah,tempCel,milesHr;
              var toggle = true;
            // weatherType = data.weather[0].description.toLowerCase();
              weatherType = data.current.condition.text;
            // icon = data.weather[0].icon;
              console.log(data);
              console.log(icon);
              icon = data.current.condition.icon;
              // temperature = data.main.temp;
             
              // humidity = data.main.humidity;
              humidity = data.current.humidity;
              // windSpeed = data.wind.speed;
              // windSpeed//
              milesHr = data.current.wind_mph;
              // country = data.sys.country;
              country = data.location.country;
              // cityName = data.name;
              cityName = data.location.name;
              region = data.location.region;

              tempFah = data.current.temp_f;
              tempCel =  data.current.temp_c;
              // milesHr =  (windSpeed * 2.23694). toFixed(1);



              $('.temperature').html(tempFah+'&#8457;');
              $('#location').html(cityName+",");
              $('#region').html(region+ ",");
              $('#country').html(country+".");
              $("#windSpeed").html(milesHr);
              $('.humidity').html(humidity);
              $('.description').html(weatherType);
/*--------------
Adding appropritate background images-------------*/
        
    if(weatherType.indexOf('clear') > -1 || weatherType.indexOf('sky') > -1) {
   $('body').css("background-image","url('https://s19.postimg.org/6gxoo9aqr/af9e7d4a0b90b896d074675cd05619f1.jpg')");
    } else if(weatherType.indexOf('clouds') > -1 || weatherType.indexOf('cloud') > -1  ) {
      $('body').css("background-image","url('https://s19.postimg.org/40vvaeso3/image.jpg')");
    } else if(weatherType.indexOf('rain') > -1) {
   $('body').css("background-image","url('https://s19.postimg.org/5h7dsjvkz/45e73a0e445a0fcbdfbf1febbbf6a560.jpg')");
    } else if(weatherType.indexOf('snow') > -1) {
      $('body').css("background-image","url('https://s19.postimg.org/6xiwaoyhv/88580847_88579891.jpg')");
    } else if(weatherType.indexOf('haze') > -1) {
      $('body').css("background-image","url('https://s19.postimg.org/56zv97gyr/fig_00091_haze_f10.gif')");
    }

              var $imageContainer = $('.icon');
                  $imageContainer.empty();
              var $img = $('<img id="pic">'); //Equivalent: $(document.createElement('img'))
                  // $img.attr('src', 'http://openweathermap.org/img/w/'+icon+'.png');
                  $img.attr('src', 'http://'+icon);
                  $img.appendTo($imageContainer);


                  $('.changeTemp').on('click',function(event){
                      event.preventDefault();
                     if(!toggle) {
                      $('.temperature').html(tempCel+""+'&#8451;');
                           $('.changeTemp').html('Change To'+" "+'&#8457;');
                             toggle = true;
                       } else {
                          $('.temperature').html(tempFah+"" +'&#8457;');
                           $('.changeTemp').html('Change To'+" "+'&#8451;');
                             toggle = false; 
                       }

               }); /* change temp end */

             
           });  /* Get Json ends here */

       }
  

}); /* Jquery ending */
