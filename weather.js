// const navBar=document.getElementById('input-box');
// navBar.addEventListener('keypress',(runner)=>{
//     if(event.keyCode == 13){
//         console.log(navBar.value)
//     }
// })

// var deatail=function weather_info(){
//     var navBar=document.getElementById('input-box');
//     navBar.addEventListener('keypress',(runner)=>{
//         if(event.keyCode == 13){
//             var vak=navBar.value;
//             console.log(navBar.value)
//             axios.get('http://api.openweathermap.org/data/2.5/weather?q='+vak+'&unitsew=metric&appid=a168998d603a53dd02f50a9166a46750')
//             .then(res =>{
//                 return res.json()})
//             .then(data=>console.log(data))
//             .catch(err =>alert("wrong city name!"))
//             }
//     })
// }
// console.log(deatail)
    // axios.get("http://api.openweathermap.org/data/2.5/weather?q="+navBar.value+"&units=metric&appid=a168998d603a53dd02f50a9166a46750")
    // .then(res => res.json())
    // .then(data=>console.log(data))

    // .catch(err => {
    //     console.log(err, "not found");
    // })
// weather_info()
// function myFunction() {
//     var x = document.getElementsByClassName("heading");
//     x[0].innerHTML = ;
    
// }
// const navBar=document.getElementById('input-box');
// navBar.addEventListener('keypress',(runner)=>{
//     if(event.keyCode == 13){
//         console.log(navBar.value)
//     }
// })


const navBar=document.getElementById("input-box");
navBar.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
        console.log(navBar.value);
        getdeatial(navBar.value)

    }
});
function getdeatial(city){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=a168998d603a53dd02f50a9166a46750')
    .then(res=>{
        return res.json();
    }).then(showweatherReport)
    .catch(err=>alert("not found"))
}
function showweatherReport(res){
    console.log(res)
    let city=document.getElementById("city");
    city.innerText=`${res.name}, ${res.sys.country}`;
    let temprature=document.getElementById('temp');
    temprature.innerHTML=`${Math.round(res.main.temp)}&deg;C`;
    let minMaxtemp=document.getElementById('min-max');
    minMaxtemp.innerHTML= `${Math.floor(res.main.temp_min)}&deg;C(min)/${Math.ceil(res.main.temp_max)}&deg;C (max)`;
    let weathertype=document.getElementById('weather');
     weathertype.innerHTML=`${res.weather[0].main}`;
}

