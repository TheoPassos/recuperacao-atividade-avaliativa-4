function contarConsoantes(texto) {

    const consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (consoantes.includes(texto[i])) {
            contador++;
        }
    }
    
    return contador;
}

function iniciarContagem() {
    let texto = prompt("Digite um texto ou palavra:");
    let numeroDeConsoantes = contarConsoantes(texto);
    alert(`O número de consoantes no texto é: ${numeroDeConsoantes}`);
}

iniciarContagem();
