/*for (let i=10; i>=0; i--){
    if (i%2===0){
      continue; 
    }
   prn(i); 
}

for (let i=9; i>=0; i-=2){
    prn1(i);
}*/
/*function prn(val){
document.write(val +'<br>');
}*/
/*let counter = 0;
while(counter<=10){
    prn(counter);
    counter++;
}
let counter = 0;
do {
     prn(counter);
     counter++;
}while (counter<=10)*/

/*let num =parseFloat(prompt('Enter a number'));
while(Number.isNaN(num)){
    alert('Pleace Enter a number');
    num=parseFloat(prompt('Enter a number'));
}*/
/*let num1;
do{
    num1=parseFloat(prompt('Enter a number'));
}while(Number.isNaN(num1));*/

function prn(val){
document.write(val +'<br>');
}
let products = [];
products[0] = 'Tesla Model X';
products[1] = 'Ferrari F430';
products.push ('Chevrolet Malibu');
products.push ('Fiat Punto');
prn(products.length);
/*for (let i = 0; i<products.length;i++){
    if (products[1]!==undefined){
prn(products[i]);
    }
}*/
/*products.forEach(prn);*/
/*products.forEach(function(el){
 prn(el);   
});
products.forEach(el => prn(el) )*/
let prices = [10,15, 25, 100,50];
prices.forEach(prn);
let sortedPrices=prices.sort((a,b)=> a-b );
sortedPrices.forEach(prn);

let total =prices.reduce((acc,el)=>acc+el);
prn("total:" +total);