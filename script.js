var title = document.querySelector('h1')
var img = document.getElementById('imagem')

function notquebrada(){
    return img.src.indexOf('quebrada') > -1
}
/* será retornado caso o caminho de img após ser examinado a procura do nome quebra, se não for encontrado será retornado -1, mas quero que se caso for maior que -1*/
function acender(){
    if (!notquebrada()){
         img.src= 'img/ligada.jpg'
    }
}
/*se caso a função notquebrada não encontar o nome quebrada no src de img, img recebera uma nova imagem chamada ligada*/
function desliga(){
    if (!notquebrada()){
         img.src= 'img/desligada.jpg'
    }
}
/*se caso a função notquebrada não encontar o nome quebrada no src de img, img recebera uma nova imagem chamada desligada*/
function quebra(){
   img.src= 'img/quebrada.jpg'
   title.innerHTML = 'Você quebrou a lâmpada!'
}
/*ao clicar duas vezes sobre a lampada, img recebera outra imagem com o nome de quebrada*/

img.addEventListener('mouseover', acender)/* ao passar o mouse por cima da lampada, será adicionado um evento de mouse em cima que retornará com a função acender*/
img.addEventListener('mouseleave', desliga)/* ao tirar o mouse de cima da lampada, será adicionado um evento de mouse saiu cima que retornará com a função acender*/
img.addEventListener('dblclick', quebra)/* ao clicar duas vezes com o  mouse em cima da lampada, será adicionado um evento de click duplo que retornará com a função quebra*/