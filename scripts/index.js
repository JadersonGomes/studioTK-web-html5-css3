document.querySelectorAll('.input-pattern').forEach((item, valor) => {

    item.addEventListener('focusin', () => {

        item.classList.add('input-effect');

    });

    item.addEventListener('focusout', () => {

        item.classList.remove('input-effect');

    });


});



function showMenu(){

    let header = document.querySelector('header');
    let body = document.querySelector('body');

    if(header.classList == ""){
        header.classList.add('on');        
        body.classList.add('hidden-ovw');
    }        
    else{
        body.classList.remove('hidden-ovw');
        header.classList.remove('on');
    }        
    
}