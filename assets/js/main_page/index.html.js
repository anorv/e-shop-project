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
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav_links");

// NAV BAR start

// Kad ant mazo ekrano iskristu MediaElementAudioSourceNode, paspaudus ant burgerio
burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav_active");
});





// Parallax ant main container img

const image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});



