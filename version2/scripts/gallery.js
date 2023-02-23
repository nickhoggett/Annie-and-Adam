function Gallery(gallery) {
    if (!gallery) {
        throw new Error ('No Gallery has been found');
    }

    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const previousButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentImage;
    
    function openModal(){
        console.info('opening modal');
        if (modal.matches('open')) {
            console.info('modal already open');
            return;
        }
        modal.classList.add('open');
        
        //event listeners for the open modal;

        window.addEventListener('keyup', handleKeyUp);
        previousButton.addEventListener('click', showPrevImage);
        nextButton.addEventListener('click', showNextImage);
    }

    function closeModal(){
        modal.classList.remove('open');
    }

    function showPrevImage(){
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    function showNextImage(){
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }

    function handleOutsideClick(e){
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    function handleKeyUp(e){
        if(e.key === 'Escape') closeModal();
        if(e.key === 'ArrowLeft') showPrevImage();
        if(e.key === 'ArrowRight') showNextImage();
    }

    function showImage(el){
        if(!el) {
            console.info('there is no image to show')
        }

        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }

    modal.addEventListener('click', handleOutsideClick);

    images.forEach(image => {image.addEventListener('keydown', e => {
            if(e.key === 'Enter') {
                showImage(e.currentTarget);
            }
        })
    })

    images.forEach(images => {
        images.addEventListener('click', e => showImage(e.currentTarget));
    });

}

const gallery = Gallery(document.querySelector('.gallery'));


//  **TO FIX**

//left and right arrow keys are opening modal when pushing, but only once the modal 
//has been opened