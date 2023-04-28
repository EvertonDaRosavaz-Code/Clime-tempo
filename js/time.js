let hora        = document.getElementById('hrs');
let minutos     = document.getElementById('min');


setInterval(()=>{
    let date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();

    hora.textContent = hrs
    minutos.textContent = min

    if(hrs <= 9){
        hora.textContent =  "0" + hrs; 
    }
    
    if(min <= 9){
        minutos.textContent = "0" + min        
    }
})

