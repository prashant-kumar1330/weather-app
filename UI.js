class UI{
   constructor(){
        this.displayinweb= document.getElementById('display');
   }
   insert(result){
    let output=`
    <div class="section no-pad-bot" id="index-banner" > 
    <div class="container">
    <br><br>
    <h1 class="header center teal-text darken-4" style="color: white">${result.city}&nbspWeather</h1>
    <div class="roe center">
    <p><b style="color: white">${result.condition}</b></p>
    <img src="${result.icon}" width="100" height="100">
    </div>
    <div class =" row center">
    <p class="flow-text" style="color: white">${result.degCr}\u00B0 C / ${result.degFr}\u00B0 F</p>
    </div>
    <div class="row center">
    <p class=" flow-text" style="color: white">Wind-speed ${result.windSpeed}| Wind-direction${result.wind_direction}</p>
    </div>
    <br><br>
    </div>
    </div>
    
    `;

    this.displayinweb.innerHTML=output;

    
    
   }
}