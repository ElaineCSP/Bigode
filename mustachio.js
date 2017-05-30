
var nome;
var endereço;
var telefone;
var email;
var mensagem;

function enviar() { 
     
    nome = document.form.nome.value;
    endereco = document.form.endereco.value;
    telefone = document.form.telefone.value;
    email = document.form.email.value;
    mensagem = document.form.mensagem.value;

    console.log(nome);
    console.log(endereco);
    console.log(telefone);
    console.log(email);
    console.log(mensagem)

    // document.formfeio.nome.value = nome;
    // document.formfeio.endereco.value = endereco;
    // document.formfeio.email.value = telefone;
    // document.formfeio.telefone.value = email;
    // document.formfeio.mensagem.value = mensagem;
    
    return false;
} 


