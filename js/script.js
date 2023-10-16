const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');



const listaSpesa = [];
let stop = false;
let i = 0;

while(!stop){
    let prodotto = prompt('Inserire prodotti da acquistare');
    if(prodotto === 'stop'){
        stop = true;
    }else{
        listaSpesa.push(prodotto);
        console.log(listaSpesa[i]);
    }
       
i++;
}
console.log(listaSpesa);

for(let x = 0; x < listaSpesa.length; x++){
    let item = document.createElement('p');
    let msg = listaSpesa[x];
    item.innerHTML = `${msg}`;
    resultEl.append(item);
}
