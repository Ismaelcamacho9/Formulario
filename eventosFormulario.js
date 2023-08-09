const formulario = document.forms['formulario-donacion'];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Enviando datos.');
});

formulario.pais.addEventListener('change', (e) => {
    console.log('El nuevo valor es: ' + e.target.value);
});