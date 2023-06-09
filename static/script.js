function receberDados () {
    const dadosNome = document.getElementById('nome').value;
    const dadosMail = document.getElementById('email').value;
    const dadosTelefone = document.getElementById('telefone').value;
    const dadosSenha = document.getElementById('senha').value;
    const dadosData = document.getElementById('data_nascimento').value;
    
    console.log(dadosNome, dadosMail, dadosTelefone, dadosSenha, dadosData);
}