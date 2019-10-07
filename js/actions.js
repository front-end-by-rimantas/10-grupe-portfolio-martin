renderMy_Services( my_services );
renderBlogsImages( My_blogs );
window.onscroll = function() {myFunction()};

//****************************** */
// TESTIMONIALS
//****************************** */

renderTestimonials('#testimonials > .row', testimonials);

document.querySelectorAll('.testimonials > .controls > .circle').forEach( arrow => {
    arrow.addEventListener('click', updateVisibleTestimonial);

})