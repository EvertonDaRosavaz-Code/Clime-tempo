let  url    = new URLSearchParams (window.location.search);
let myParam = url.get("error");

let nomeParam  = url.get('nome');
let emailParam = url.get("email")
let senhaParam = url.get("senha");


let nome     = document.getElementById('nome');
let email    = document.getElementById('email');
let password = document.getElementById('senha');

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
  });


switch (myParam){

    case 'nome incorreto':
          
        Toast.fire({
            icon: 'error',
            title: 'Nome incorreto'
        });

        nome.style.borderColor = 'red';
        setInterval(() => {
            nome.style.transition = '.5s'
            nome.style.borderColor = 'black';
        }, 3000);


        email.value    = emailParam;
        password.value = senhaParam;

        break;

    case 'email incorreto':
     
    Toast.fire({
        icon: 'error',
        title: 'Email incorreto'
      });

      email.style.borderColor = 'red';
      setInterval(() => {
        email.style.transition = '.5s'
        email.style.borderColor = 'black';
      }, 3000);

      nome.value     = nomeParam;
      password.value = senhaParam;
      break;

    case 'senha incorreta':
        Toast.fire({
            icon: 'error',
            title: 'Email incorreto'
        });

        password.style.borderColor = 'red';
        setInterval(() => {
            password.style.transition = '.5s'
            password.style.borderColor = 'black';
        }, 3000);

        nome.value     = nomeParam;
        email.value   = emailParam;
}