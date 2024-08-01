function gerarSenhaAleatoria(comprimento) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let senha = '';

    for (let i = 0; i < comprimento; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }

    return senha;
}

function solicitarTamanhoSenha() {
    let comprimento;
    while (true) {
        comprimento = parseInt(prompt("Digite o comprimento desejado para a senha (mínimo 1):"), 10);
        if (!isNaN(comprimento) && comprimento > 0) {
            break;
        } else {
            alert("Por favor, insira um número válido maior que 0.");
        }
    }

    return comprimento;
}

function gerarSenha() {
    const comprimento = solicitarTamanhoSenha();
    const senha = gerarSenhaAleatoria(comprimento);
    alert(`Sua senha aleatória é: ${senha}`);
}

gerarSenha();
