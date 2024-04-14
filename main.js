//tijd-voor-sunset-sunrise
const apikey = 'your-api-key';
const url = `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today&formatted=0&apikey=${apikey}`;
const textsun = document.getElementById("js--text");
const url2 = "http://worldtimeapi.org/api/timezone/Europe/Amsterdam"



fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    const sunrise = data.results.sunrise;
    const sunset = data.results.sunset;
    
    
    const sunriseEl = document.createElement('p');
    sunriseEl.textContent = `Sunrise ${sunrise}`;
    
    const sunsetEl = document.createElement('p');
    sunsetEl.textContent = `Sunset: ${sunset}`;
    
    
    let text = sunrise.substring(sunrise.lastIndexOf("T")+1,sunrise.lastIndexOf("+"));
    const textEl = document.createElement("p")
    textEl.textContent = ` ${text}`
    console.log(text)
    
    let text2 = sunset.substring(sunrise.lastIndexOf("T")+1,sunrise.lastIndexOf("+"));
    const text2El = document.createElement("p");
    text2El.textContent = ` ${text2}`
    console.log(text2)
    
    

    

    //document.body.appendChild(textEl);
    //document.body.appendChild(text2El);
    const widget1 = document.getElementById("js--widget--1");
const sun = document.getElementById("js--sun");
const moon = document.getElementById("js--moon")


fetch(url2)
.then(function(response){
    return response.json();
})
.then(function(data){
    const realtijd = data.datetime;
    let realtijdEL = realtijd.substring(realtijd.lastIndexOf("T")+1,realtijd.lastIndexOf("."));
    console.log(realtijdEL)


    textsun.innerText = text;

let realtime = realtijdEL;
let sunrise2 = textEl;
let sundown = text2El;


    
}) 
});


//sun/moon



//chart
const ctx2 = document.getElementById("myChart");
 
let data2 = {
    labels: ["jan-feb", "maart-april", "mei juni", "sep-okt", "nov-dec"],
    datasets:[{
        label: "KwH",
        data: [100, 80, 40, 65, 30],
        backgroundColor: [
            "rgb(30, 30, 200)",
            "rgb(0, 0, 255)",
            "rgb(120, 120, 150)",
            "rgb(70, 70, 70)",
            "rgb(200, 200, 20)"
        ],
        borderwidth: 0,
        offset: 20,
        hoverOffset: 60,
    }]
}
 
let config2 = {
    type: "bar",
    data: data2,
    options: {
        maintainAspectRatio: false
    }
}
 





//sun/moon
Chart.defaults.color = '#FFFFFF';


//chart
const ctx = document.getElementById("myChart");
 
let data = {
    labels: ["jan-feb", "maart-april", "mei juni", "sep-okt", "nov-dec"],
    datasets:[{
        label: "KwH",
        data: [100, 80, 40, 65, 30],
        backgroundColor: [
            "#35374B",
            "#344955",
            "#50727B",
            "#50727B",
            "#78A083"
        ],
        borderwidth: 0,
        offset: 20,
        hoverOffset: 60,
        borderColor: '#ffa600',
    }]
}
 
let config = {
    type: "bar",
    data: data,
    options: {
        maintainAspectRatio: false
    }
}
 
let myChart = new Chart(ctx, config)




const bulbSwitch = document.getElementById("js--bulb-switch");

bulbSwitch.onclick=function(){
    
    const bulb = document.getElementById("js--bulb");

    let isAnimationOn = true;

    bulbSwitch.onclick = function() {
        const bulb = document.getElementById("js--bulb");
    
        if (!isAnimationOn) {
            console.log("saad");
            bulb.style.animation = "flash 7s linear infinite";
            isAnimationOn = true;
        } else {
            console.log("saad2");
            bulb.style.animation = "none";
            isAnimationOn = false;
        }
    }
    
  
}

//moons sun


fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const sunrise = data.results.sunrise;
        const sunset = data.results.sunset;
        
        
        const sunriseEl = document.createElement('p');
        sunriseEl.textContent = `Sunrise ${sunrise}`;
        
        const sunsetEl = document.createElement('p');
        sunsetEl.textContent = `Sunset: ${sunset}`;
        
        
        let text = sunrise.substring(sunrise.lastIndexOf("T")+1,sunrise.lastIndexOf("+"));
        const textEl = document.createElement("p")
        textEl.textContent = ` ${text}`
       
        
        let text2 = sunset.substring(sunrise.lastIndexOf("T")+1,sunrise.lastIndexOf("+"));
        const text2El = document.createElement("p");
        text2El.textContent = ` ${text2}`

const sunSwitch = document.getElementById("js--sun-switch")

sunSwitch.onclick = function(){
    const sun = document.getElementById("js--sun");
    const moon = document.getElementById("js--moon")
    const widget1 = document.getElementById("js--widget--1")
    const suntext = document.getElementById("js--sun-text")
        
        


    if(moon.style.display === "flex"){
        sun.style.display = "flex"
        moon.style.display = "none"
        widget1.style.background = "linear-gradient(109.6deg, rgb(25, 170, 209) 11.3%, rgb(21, 65, 249) 69.9%)"
        console.log("moon")
        textsun.innerText = text
        suntext.innerHTML = "sunrise";
        suntext.style.color = "#211951"
    }else{
        sun.style.display = "none"
        moon.style.display = "flex"
        widget1.style.background = "linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%)"
        console.log("sun")
        textsun.innerText = text2;
        suntext.innerHTML = "sunset";
        suntext.style.color = "#211951"
    }
}
    })
