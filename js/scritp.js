let input           = document.getElementById('input');
let nameCity        = document.getElementById('nameCity');
let img             = document.getElementById('iconClima');
let temperatura     = document.getElementById('nameTemperatura');
let humidade        = document.getElementById('nameHumidade');
let description     = document.getElementById('nameDescription');
let SpeedWind       = document.getElementById('nameSpeedWind');
let DayofWek        = document.getElementById('DayofWeek');
let country         = document.getElementById('nameContry');

const loader        = document.getElementById('conteinerLoader')
/*-==-=-=-=-=-=--==Animação da pagina=-=-=-=-=-=-=-=-=-=-=-=-=*/
let conteinerInfoTempo = document.getElementById('infoTempoConteiner');
let conteinerInfo = document.getElementById('conteiterInfo');
let titleNameCity = document.getElementById('nameCity'); 
let conteinerIMG = document.getElementById('conteinerIMG');

document.body.addEventListener('click', ()=>{
    if(input.value == false){
        conteinerInfoTempo.style.height     = "10%";
        conteinerInfoTempo.style.transition = '.5s';
    
        conteinerIMG.style.display          = 'none';
        conteinerInfo.style.display         = 'none';
    
        titleNameCity.style.display         = 'none';

        loader.style.height = '10%'
       
    }
})
/*=--=-==-=--==-end=-=-=-=-==-=-=-=-=-==-=-=*/ 


async function getDate(){
    try{
        const key = '64e186beae52ae51be63f0866a18b787';
        let linkApi = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`;
        await fetch(linkApi)
        .then((response) => response.json())
        .then(data=>{   
            loader.style.display = 'none'       
            //Variaveis
            let cod             = data.cod;
            let codImg          = data['weather'][0]['icon'];
            let temp            = data['main']['temp'];
            let humidity        = data['main']['humidity'];
            let descri          = data['weather'][0]['description'];
            let Wind            = data['wind']['speed'];
            DayofWek.innerText  = getDayWeek(); 
            let pais            = data['sys']['country'];

            if(400 >= cod <= 503 && cod != 200){
                location.href = `../views/error.html?cod=${cod}`
            }

           
            let LinkAPIIMG = `https://openweathermap.org/img/wn/${codImg}@2x.png`;
            img.setAttribute('src', LinkAPIIMG);

            nameCity.innerText = input.value;
            temperatura.innerText = `${temp} ºC`
            humidade.innerText = `${humidity}%`
            description.innerText = descri
            SpeedWind.innerText = `${Wind} m/s`;

            country.innerText = pais;
        });
    }
    
    catch(e){
        console.log('Error ao solicitar dados da cidade');
        Swal.fire(
            'There was a problem, please try again.',
            `Se o erro persistir, entre em contato com o ${'<a target="_blank" href="https://api.whatsapp.com/send?phone=5551998057640&text=Ola%20meu%20nome%20%C3%A9">Suporte</a>'}`,
            'question'
          );  
    }

}



function ClickBtn(){
    conteinerInfoTempo.style.height     = "50%";
    conteinerInfoTempo.style.transition = '.5s';
    conteinerIMG.style.display          = 'flex';
    conteinerInfo.style.display         = 'grid';
    titleNameCity.style.display         = 'flex';

    loader.style.height = '50%';
    loader.style.transition = '.5s ease-in-out'
    loader.style.display = 'flex';
    getDate();
    
    
}

function getDayWeek(){
    let week = [
        'Sunday', 'Monday',
        'Tuesday', 'Wednesday',
        'Thursday','Friday',
        'Saturday'
    ];
    const today = new Date();
    const DayWeek = week[today.getDay()];
    return DayWeek;
}

