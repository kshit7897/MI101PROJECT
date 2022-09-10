let button = document.querySelector('.submitbtn')
let input = document.querySelector('#inputvalue')
let names = document.querySelector('.name')
let desc = document.querySelector('.desc')
let tempreture = document.querySelector('.temp')
let sun = document.querySelector('.sunrise')


button.addEventListener('click', function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    input.value + 
    "&appid=f7bdfcf9ffcbe1797bb600b215907ec8")

    .then((result)=>result.json())
    .then((data) =>{
        console.log(data);
        let namevalue = data["name"];
        let discri = data["weather"][0]["description"];
        let temp = data ["main"]["temp"];
        let sunrise = data["sys"]["sunrise"]

        names.textContent = namevalue;
        tempreture.textContent = temp;
        desc.textContent = discri;
        sun.textContent = sunrise;
    })
    .catch(()=> alert("Wrong City Name !."))
});
