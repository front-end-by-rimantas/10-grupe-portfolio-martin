
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

