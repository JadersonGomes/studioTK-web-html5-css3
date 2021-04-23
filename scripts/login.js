function AplicaEstiloInput(){
    let inputLogin = document.querySelector('#input-login');

    if(inputLogin.classList.contains('active-input')){
        inputLogin.classList.remove('active-input');
        console.log('entrou')

    }
    else
        inputLogin.classList.add('active-input');
    
}