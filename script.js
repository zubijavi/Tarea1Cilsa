const body= document.querySelector('body');
const formulario = document.querySelector('form');
const botones=document.getElementById('botones')
const botonEstilo1 = document.getElementById('botonEstilo1');
const botonEstioAltoContraste= document.getElementById('botonEstioAltoContraste')


botonEstilo1.addEventListener('click', function() {
    body.className = 'body-estilo1';
    botones.className = 'botones-estilo1';
    formulario.className = 'estilo1';
});

botonEstioAltoContraste.addEventListener('click', ()=>{
    body.className = 'body-estilo-alto-contraste';
    botones.className = 'botones-estilo-alto-contraste';
    formulario.className = 'estilo-alto-contraste';
})