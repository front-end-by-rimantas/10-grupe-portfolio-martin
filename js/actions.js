renderMy_Services( my_services );
renderBlogsImages( My_blogs );
window.onscroll = function() {myFunction()};

// pirmas parode kur, antras kuriuos duomenis naudosime
renderPortfolio ( '#our-work > .row:nth-child(2)', portfolio );

document.querySelectorAll('.filter-items').forEach (item => { item.addEventListener('click', filterPortfolio) });