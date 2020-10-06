document.querySelectorAll('.input-pattern').forEach((item, valor) => {

    item.addEventListener('focusin', () => {

        item.classList.add('input-effect');

    });

    item.addEventListener('focusout', () => {

        item.classList.remove('input-effect');

    });


});