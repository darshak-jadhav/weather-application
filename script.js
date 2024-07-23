 const inputbox = document.querySelector('.input_box');
 const searchbtn = document.querySelector('#search_btn');
 const weatherimg = document.querySelector('.weather_img');
 const temp = document.querySelector('.temp');
 const desc = document.querySelector('.desc');
 const humi = document.querySelector('#humidity_data');
 const wind = document.querySelector('#wind_data');
 const locationnotfound = document.querySelector('.error_location');
 const weatherbody = document.querySelector('.weatherbox');
 const theme = document.getElementById('themebtn'); 

async function checkwea(city){
    const api = "7fd5d0fc846c85684e4974cd4df1cd48";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
     console.log(weather_data);
    if(weather_data.cod === `404`){
        locationnotfound.style.display = "grid";
        weatherbody.style.display = "none";
        return; 
    }


    locationnotfound.style.display = "none" ;
    weatherbody.style.display = "grid";
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}C`;
    desc.innerHTML = `${weather_data.weather[0].description}`;
    humi.innerHTML = `${weather_data.main.humidity} %`;
    wind.innerHTML = `${weather_data.wind.speed} Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherimg.src = "cloud.png";
            break;
        case 'Clear':
            weatherimg.src = "clear.png";
            break;
        case 'Rain':
            weatherimg.src = "rain.png";
            break;
        case 'Mist':
            weatherimg.src = "mist.png";
            break;
        case 'Snow':
            weatherimg.src = "snow.png";
            break;

            
    }
}

 searchbtn.addEventListener('click', ()=>{
    checkwea(inputbox.value);
 });

 theme.onclick = function (){
    document.body.classList.toggle("darktheme");
    this.classList.toggle("fa-sun");
    this.classList.toggle("fa-moon");
    if(this.classList.contains("fa-sun")){
        document.body.style.backgroundImage = "url('lightbg.png')";
    }
    else{
        document.body.style.backgroundImage = "url('darkbg.png')";
   
    }
    
 }

 
 