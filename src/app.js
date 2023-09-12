const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//#ffdd44
const btn = document.getElementById('btn');
;
const cor = document.querySelector('.cor')

btn.addEventListener('click', function(){

 let hexColor = '#';
 
 for(let i = 0; i< 6; i++){
  hexColor += hex[gerarRandom()];
 }
 cor.textContent = hexColor
 document.body.style.backgroundColor = hexColor;

});
 
function gerarRandom(){
  return Math.floor(Math.random() * hex.length )
}