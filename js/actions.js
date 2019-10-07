renderMy_Services( my_services );
renderBlogsImages( My_blogs );
window.onscroll = function() {myFunction()};

renderTestimonials('#testimonials > .row', testimonials);

document.querySelectorAll('.testimonials > .controls > .circle').forEach( arrow => {
    arrow.addEventListener('click', updateVisibleTestimonial);

})
// pirmas parode kur, antras kuriuos duomenis naudosime
renderPortfolio ( '#our-work > .row:nth-child(2)', portfolio );

document.querySelectorAll('.filter-items').forEach (item => { item.addEventListener('click', filterPortfolio) });
