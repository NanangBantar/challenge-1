function showModal(val) {
    document.querySelector('.card-modal').classList.remove('display-none');

    document.querySelector('.card-modal .modal-content .text-h1').innerHTML = document.querySelector(`.${val} .card-text .text-h1`).textContent;
    document.querySelector('.card-modal .modal-content img').src = document.querySelector(`.${val} .card-image img`).getAttribute('src');
    if (document.querySelector(`.${val} .card-text p`)) {
        document.querySelector('.card-modal .modal-content p').textContent = document.querySelector(`.${val} .card-text p`).textContent;
    } else {
        document.querySelector('.card-modal .modal-content p').textContent = '';
    }
}

function closeModal() {
    document.querySelector('.card-modal').classList.add('display-none');
}