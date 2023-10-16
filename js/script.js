const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');
const item = document.createElement('p');


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

for(let x = 1; x <= listaSpesa.length; x++){
    let msg = listaSpesa[x];
    // document.getElementById('my-div').append(item);
    // item.innerHTML = msg;
    console.log(msg);
}
// resultEl.remove('d-none');
