
createCarousel(5)
function createCarousel (slidesCount) {
    // точка входа
    let parentDiv = document.getElementById('carousel');
    // ul
    let slidesUl = document.createElement('ul');
    slidesUl.className = 'slides';
    // create indicators container
    let indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'indicators';
    // controls container 
    let controlsContainer = document.createElement('div');
    controlsContainer.className = 'controls';
    // STYLE
    let style = document.createElement('style');
    let putIn = document.querySelector(".carousel");

    // создаем li START SLIDES
    for (let i = 0; i < slidesCount; i++) {
      let slidesItem = document.createElement('li');
      slidesItem.className = 'slides__item'
      if (i === 0) {
        slidesItem.classList.add('active')
      }
      let link = document.createElement('a');
      link.setAttribute('href', '#')
      link.setAttribute('data-slide-to', i);
  
      slidesItem.appendChild(link)
      slidesUl.appendChild(slidesItem)
  
      // START INDICATORS
      let indicator = document.createElement('span');
      indicator.className = 'indicators__item';
      indicator.setAttribute('data-slide-to', i);
      indicator.innerText = i;
      if (i === 0) {
        indicator.classList.add('active');
      }
      indicator.addEventListener('click', eventListener);
      indicatorsContainer.appendChild(indicator);
    }

    // CONTROLS CONTAINER  
    for (let i = 0; i < 3; i++) {
      let controlsDiv = document.createElement('div');
      if (i === 0) {
        controlsDiv.className = 'controls__item controls__prev';
        let iFas = document.createElement('i');
        iFas.className = 'fas fa-chevron-left';
        controlsDiv.appendChild(iFas);
      }else if (i === 1) {
        controlsDiv.className = 'controls__item controls__next';
        let iFas = document.createElement('i');
        iFas.className = 'fas fa-chevron-right';
        controlsDiv.appendChild(iFas);
      }else if (i === 2) {
        controlsDiv.className = 'controls__item controls__pause';
        let iFas = document.createElement('i');
        iFas.className = 'fas fa-play';
        controlsDiv.appendChild(iFas);
      }
      controlsContainer.appendChild(controlsDiv);
    }
    style.innerHTML = '.slides {position: relative;} .controls {position: relative;}  .indicators {display: flex;}';
    
    parentDiv.appendChild(slidesUl);
    parentDiv.appendChild(indicatorsContainer);
    parentDiv.appendChild(controlsContainer);
    putIn.appendChild(style);
}

let pointer = null;
function eventListener(e) {
  let target = e.target;
  if (e.target.classList.contains('indicators__item') && e.target.tagName === 'SPAN') {
    if(pointer !== null) pointer.removeAttribute('style');
    e.target.classList.add('active');
    e.target.style.background = 'red';
    pointer = target;
  };
}




