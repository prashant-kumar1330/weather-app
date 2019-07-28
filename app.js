const weather = new openweather();
window.onload=function(){
   
    //search for city
    var searchCity= document.getElementById("searchbar")
    searchCity.addEventListener("keyup",(event)=>{
        // take the user input
        const cityName = event.target.value;
        //search for the weather
        weather.search(cityName);
        
       
    })
}
