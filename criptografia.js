document.addEventListener('DOMContentLoaded', (event) => {
function criptografia(){
    const input = document.getElementById('meuInput');
    let palavraDescriptografada = input.value;
    

    palavraDescriptografada = palavraDescriptografada
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    console.log(palavraDescriptografada);
    input.value = palavraDescriptografada
}

function descriptografia(){
    const input = document.getElementById('meuInput');
    let palavraDescriptografada = input.value;
    
    palavraDescriptografada = palavraDescriptografada
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")
        .replace(/ai/g, "a");
    
    console.log(palavraDescriptografada)
    input.value = palavraDescriptografada;
}
document.getElementById('botaoCripto').addEventListener('click', criptografia);
document.getElementById('botaoDescripto').addEventListener('click', descriptografia)});
