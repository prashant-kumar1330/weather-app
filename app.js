//search for city
 
// take the user input
window.onload=function(){
    var searchCity= document.getElementById("searchbar")
    searchCity.addEventListener("keyup",(event)=>{
        const usertext= event.target.value;
        
        console.log(usertext);
    })
}
