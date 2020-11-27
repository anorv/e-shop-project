const modalReturn = document.querySelector('#modal_return_main');
const modalDelivery = document.querySelector('#modal_delivery_main');
const footer = document.querySelector('footer');


// PRISTATYMO POLITIKOS MODALAS START
// kad atsidarytu grazinimo modalas modalas
footer.addEventListener('click', (e)=> {
    if(e.target.classList.contains('first_p')){
        modalDelivery.style.display ='block';
    }
})

// kad uzsidarytu grazinimo modalas
modalDelivery.addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal_exit')){
        modalDelivery.style.display = 'none';
    }
    
    });



// PRISTATYMO POLITIKOS MODALAS END
// GRAZINIMO POLITIKOS MODALAS START

// kad atsidarytu grazinimo modalas modalas
footer.addEventListener('click',(e)=>{
 if(e.target.classList.contains('second_p')){
     modalReturn.style.display = 'block';
  
 };

});

// kad uzsidarytu grazinimo modalas

modalReturn.addEventListener('click', (e)=>{
if(e.target.classList.contains('modal_exit')){
    modalReturn.style.display = 'none';
}

});
//  GRAZINIMO POLITIKOS MODALAS END