
//Script para verificar se as senhas corresponder
let senha           = document.getElementById('senha');
let confirmSenha    = document.getElementById('Confirmsenha');
let nome            = document.getElementById('nome');

document.getElementById('inBtn').addEventListener('click', ()=>{
    if(senha.value != confirmSenha.value){
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


      Toast.fire({
        icon: 'info',
        title: 'Passowrd do not macht'
    });
    }
});



let url = new URLSearchParams (location.search);
let Myparams = url.get('q');

let nomeParams = url.get('nome');
let senhaParams = url.get('senha');







if(Myparams == 'erroremail'){
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


      Toast.fire({
        icon: 'info',
        title: 'Este email já está em uso, tenten outro'
    });

    nome.value = nomeParams;
    senha.value = senhaParams;
    confirmSenha.value = senhaParams;
}

 