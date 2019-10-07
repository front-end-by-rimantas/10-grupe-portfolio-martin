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
// headerio spalvos keitimas scrolinant zemyn
let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function renderPortfolio ( target, data ) {
  let filter_HTML = ``;
  let unique_tags =[];

  for ( let i=0; i<data.length; i++ ) {
    let category = data[i].cat;
      if ( unique_tags.indexOf(category) === -1 ) {
        unique_tags.push (category);
        }
  }


  for ( let i=0; i<unique_tags.length; i++ ) {
   
    filter_HTML += `<div class="filter-items">${unique_tags[i]}</div>`
  }
  
let galery_HTML = ``
  for ( let i=0; i<data.length; i++ ){
    galery_HTML += `<div class="portfolio_images">
                      <div class="Portf_img">
                        <img class="Portf_img" src="./img/portfolio-images/${data[i].pic}"></img>
                        <div class="images-block">
                          <div class="images-txt"><span class="cat">${data[i].cat}</span></div>
                        </div>
                      </div>
                    </div>`;
  }

  let HTML = `<div class="filter">
                <div class="filter-items">All</div>
                ${filter_HTML}
              </div>
              ${galery_HTML}`;
  
  return document.querySelector(target).innerHTML = HTML;
}

function filterPortfolio( event ) {

  const category = event.target.textContent;

  const allBlocks = document.querySelectorAll ('.portfolio_images');

    if ( category === 'All' ){
      allBlocks.forEach( block => {
        block.classList.remove('hidden');
    })
    } else {
        allBlocks.forEach ( block => {
          if ( block.querySelector('span.cat').textContent === category ){
            block.classList.remove('hidden');
        } else {
        block.classList.add('hidden');
        }
      })
    }
return;
} 