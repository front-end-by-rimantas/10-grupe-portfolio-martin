function renderMy_Services( data ) {
    let HTML = '';
    // let quality = 0;

    for ( let i=0; i<data.length; i++ ) {

        // if ( !data[i].icon ||
        //      !data[i].title ||
        //      !data[i].text ) {
        //     continue;
        // }

        // if ( quality === 6 ) {
        //     break;
        // }
        
        HTML += '<div class="block">\
                    <i class="fa fa-'+ data[i].icon +'"></i>\
                    <h4>'+ data[i].title +'</h4>\
                    <p>'+ data[i].text +'</p>\
                </div>';
        // quality++;
    }
    
    return document.getElementById('my_services').innerHTML = HTML;
}

function renderBlogsImages( data ) {
    let HTML = '';
    // let quality = 0;

    for ( let i=0; i<data.length; i++ ){
        const obj = data[i];
    
        HTML += `<div class="blogs_block">
        <a href="#" class="blogs-images">
        <img src="${obj.photo}" title="alt"> </a>
        <h6>${obj.date}</h6>
        <h6>${obj.name}</h6>
        <a href="#" target="_blank" class="Blogs-headline">
        ${obj.title_b}</a>
        <p> ${obj.par} </p> 
        <a href="#" target="_blank" class="Read">
        ${obj.last}</a>
        </div>`;
    }
    return document.getElementById('My_blogs').innerHTML = HTML;
}
