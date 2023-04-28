let conteinerInfo   = document.getElementById("conteinetInfo");
let ArrayElement    = document.querySelectorAll('#box');

let city    = document.getElementById('cidade');
let state   = document.getElementById('estado');
let country = document.getElementById('pais');


let temperatura         = document.getElementById('temperatura');
let humidade            = document.getElementById('humidade');
let descriTemperatura   = document.getElementById('descriTemperatura');
let vento               = document.getElementById('velocidadeVento');
let dayWeek             = document.getElementById('week');
let pais_Origem         = document.getElementById('country')

let loader              = document.getElementById('conteinerLoader') 
document.getElementById('Btn').addEventListener('click', ()=>{
    if(city.value == "" && state.value == "" && country.value == ""){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Nenhum campo preenchido'
          });
    
      }
  if(city.value != "" && state.value == ""){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'info',
        title: 'No minímo um estado!'
      });

  }

  if(city.value != "" && state.value != ""){
    conteinerInfo.style.height      = '210px';
    conteinerInfo.style.transition  = '0.5s';

    loader.style.display = 'flex';

    ArrayElement.forEach((elemento)=>{
        elemento.style.display = 'flex'

    });

    setTimeout(function(){
        conteinerInfo.style.height      = '55px';
        conteinerInfo.style.transition  = '0.5s'
    
        ArrayElement.forEach((elemento)=>{
            elemento.style.display = 'none'
    
        });

    },1000*40);
    
    
    
    
    
    
   let returnOfArray = Rename_space(city.value, state.value, country.value);

    let newCity      = returnOfArray[0]
    let newState     = returnOfArray[1];
    let newCountry   = returnOfArray[2];
    
    getData(newCity, newState, newCountry)
  }
 
});

let arrayValues = [];
function Rename_space (cidade, estado, pais){
    arrayValues.push(cidade, estado, pais);

    //Remover elementos vazios da array
    for(let i = 0; i < arrayValues.length; i++){
        if(arrayValues[i] == ""){
            arrayValues.splice(i, 1);
            i--; 
        }
    }

    
    for(let i = 0; i < arrayValues.length; i++){
        if(typeof arrayValues[i] === "string"){ 
            arrayValues[i] = arrayValues[i].split("");
        }
    }
    


   let array1 = arrayValues[0];
   let array2 = arrayValues[1];
   let array3 = arrayValues[2];

   let newArray = [];
   
   for(let i=0; i<= array1.length; i++){
        if(array1[i] == false){
            array1[i] = '+'
        }
    }
    newArray.push(array1.join(''))


    for(let i=0; i<= array2.length; i++){
        if(array2[i] == false){
            array2[i] = '+'
           
        }
    }
    newArray.push(array2.join(''))

   if(Array.isArray(array3)){
    for(let i=0; i<= array3.length; i++){
        if(array3[i] == false){
            array3[i] = '+'
        }  
    }
    newArray.push(array3.join(''))

   }

    arrayValues.length = 0
    return newArray;
}

let lat;
let long;

async function getData(cidade, estado, pais){
    /*Retornar lat e lon da cidade*/
    const keyOpencage = ''
    const linkOpencage = `https://api.opencagedata.com/geocode/v1/json?q=${cidade}%2C+${estado}%2C+${pais}&key=${keyOpencage}`;
    

    try{
        await fetch(linkOpencage) 
        .then((response) => response.json())
        .then((data) => {
          lat  = data.results[0]['geometry'].lat;
          long = data.results[0]['geometry'].lng;
        });
  
  
        /*Por a latitude e longitude no link*/
        const keyOpenWheter = '';
        const linkOpenWheter = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${keyOpenWheter}`
  
        await fetch(linkOpenWheter)
        .then((response)=> response.json())
        .then((data)=>{
  
          temperatura.textContent          = data.main.temp + "ºC"
          humidade.textContent             = data.main.humidity + "%"
          descriTemperatura.textContent    = data.weather[0].description
          vento.textContent                = data.wind.speed + "m/s"
          dayWeek.textContent              = getDayWeek()
          pais_Origem.textContent          = data.sys.country;
  
        });

        loader.style.display = 'none';
    }catch(Exception){
        conteinerInfo.style.height      = '55px';
        conteinerInfo.style.transition  = '0.5s'
    
        ArrayElement.forEach((elemento)=>{
            elemento.style.display = 'none'
    
        });

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'warning',
            title: 'Opa, verifique se há erro ortografico ou tente novamente!',
            text:'Se o erro perssistir entre em contato com o suporte.'
            
          });
    }
  }
  
function getDayWeek(){
    let data = new Date();

    const wekk = [
        'Sunday', 'Monday',
        'Tuesday', 'Wednesday',
        'Thursday', 'Friday',
        'Saturday'
    ]

    return wekk[data.getDay()]
}

