const userInterface= new UI();
const weather = new openweather();
window.onload=function(){
   
    //search for city
    var searchCity= document.getElementById("searchbar")
    searchCity.addEventListener("keyup",(event)=>{
        // take the user input
        const cityName = event.target.value;
        //search for the weather
        weather.search(cityName).then(data=>{
            
        // temprature conversion
        const degC= data.main.temp-273.15;
        const degCr=Math.floor(degC);
        degF= degC* 1.8+32;
        const degFr= Math.floor(degF);
        var wind_direction;
        if( 350<data.wind.deg &&data.wind.deg <10 ){
            wind_direction='North'
        }else{
             if(10 <data.wind.deg &&data.wind.deg < 80){
                wind_direction='Northeast'
            }else{ 
                if(80<data.wind.deg&&data.wind.deg<110){
                    wind_direction='East';
                }else{
                    if(110<data.wind.deg&&data.wind.deg<170){
                        wind_direction='Southeast'
                    }else{
                        if(170<data.wind.deg&&data.wind.deg<190){
                            wind_direction='South'
                        }else{
                            if(190<data.wind.deg&&data.wind.deg<260){
                                wind_direction='Southwest'
                            }
                            else{
                                if(260<data.wind.deg&&data.wind.deg<280){
                                    wind_direction='West'
                                }else{
                                    if(280<data.wind.deg&&data.wind.deg<350){
                                        wind_direction='Northwest'
                                    }
                                    
                                }
                                
                            }
                            
                        }
                        
                    }
                    
                }
                
            }
            
        }
        windSpeed= data.wind.speed+' m/s'


  result={
      condition: data.weather[0].main,
      icon: 'http://openweathermap.org/img/w/'+ data.weather[0].icon+'.png',
      degCr: Math.floor(degCr),
      degFr: Math.floor(degFr),
      city: data.name,
      wind_direction: wind_direction,
      windSpeed: windSpeed,
      
//delhi
  }
   userInterface.insert(result);

        })  
    })
}
