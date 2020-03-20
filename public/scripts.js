document
    .querySelector('header button')
    .addEventListener("click", function() {
        document
        .querySelector('.form')
        .classList.toggle('hide')/*adiciona e remove a class. Coloca e tira conforme tem ou não tem*/
    })