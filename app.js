const ameriko = document.querySelector('.ameriko');
const amerika = document.querySelector('.amerika');

const tony = document.querySelector('.tony');
const toniy = document.querySelector('.toniy');



ameriko.addEventListener('click', ()=> {
    if(amerika.classList.contains('action')){
        amerika.classList.remove('action')
        amerika.classList.add('amerika')
    }else{
        amerika.classList.add('action')
        amerika.classList.remove('amerika')
    }
})


toniy.addEventListener('click', ()=> {
    if(tony.classList.contains('section')){
        tony.classList.remove('section')
        tony.classList.add('tony')
    }else{
        tony.classList.add('section')
        tony.classList.remove('tony')
    }
})
