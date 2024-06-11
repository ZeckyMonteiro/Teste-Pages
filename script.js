
let frutas = [] //declaração de array de fruta
let precos = [] // declaração de array de preço
function cadastro() {  //declaração da função cadastro
    let fruta = document.getElementById('fruta').value //obtendo o valor do imput 'fruta'
    let preco = Number(document.getElementById('preco').value) //obtendo o valor do imput 'preço'
    if(fruta != ''&& preco != 0){
       if(frutas.indexOf(fruta) == -1){

    frutas.push(fruta) //inserindo o valor de fruta no array frutas
    precos.push(preco) //inserindo o valor de preço no array preços
    let mensagem = 'lista de frutas' //criando uma variável string para usar como saída
    for(let produto of frutas){  //para cada produto contido no array frutas,faça...
        let pos = frutas.indexOf(produto)  //criando variável pos para pegar o índice do produto
        mensagem += '<br>'+produto+'| preco: '+precos[pos] //concatenando  mensagem de saída
    }
     document.getElementById('lista').innerHTML = mensagem //atualizando o parágrafo
}
else{
    alert('essa fruta já foi cadastrada!')
}
}else{
    alert('preencha corretamente os dois campos')
}
}
 