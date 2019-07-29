class openweather{

constructor(){
    this.api='8bf8cf609cba55933164bbea08f37bf5';
}
 async search(cityName){
     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.api}`)
    const result= await response.json();
   return result;
   
}
}