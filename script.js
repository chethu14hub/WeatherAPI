let city=document.querySelector("#cityInput");
let btn=document.querySelector("#submit");
let place=document.querySelector("#place");
let temp=document.querySelector("#Temperature");
let userError=document.querySelector("#usrError")
let condition=document.querySelector("#Condition");
let Humidity=document.querySelector("#Humidity");
let WindSpeed=document.querySelector("#Wind");
let Pressure=document.querySelector("#pressure");
const api="abe94a4ac2c0d3b324997a8f4b4af70b";

async function getWeather(event){
    event.preventDefault();
    console.log("weather api fteching");
    let cityname=city.value;
    
    
    if(cityname==""){
       let error="Enter the city name!";
       userError.innerHTML=error;
        return
    }
   try{
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api}`);
    let data=await response.json();
    console.log(data);
    console.log(cityname);
    temp.innerHTML="temprature is"+data.main.temp;
    place.innerHTML=cityname;
    condition.innerHTML="Condition: "+data.main.feels_like;
    Humidity.innerHTML="Humidity: "+data.main.humidity;
    WindSpeed.innerHTML="Wind Speed: "+data.wind.speed;
    Pressure.innerHTML="Pressure: "+data.main.pressure;

   }catch(err){
    console.log(err);
   }
    
   
    
}
btn.addEventListener("click",getWeather);

   
    


