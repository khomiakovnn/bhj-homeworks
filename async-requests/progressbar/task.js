const form = document.querySelector('#form');
const progress = document.getElementById( 'progress' );
const xhr = new XMLHttpRequest();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    const formData = new FormData(form);
    xhr.send(formData);
});

xhr.upload.addEventListener("progress", (event) => {
    progress.value = event.loaded;
});