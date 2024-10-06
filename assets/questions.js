let correctCounter= (0);
let falseCounter= (0);

let qFirst= prompt('4 ile 6 toplamı kaçtır?' );
if (qFirst==='10') {

  correctCounter++;
  console.log('doğru cevap!');
}
else {

  console.log('yanlış cevap!');
  falseCounter--;
  
}

let qSecond= prompt('4 ile 6nın çarpımı kaçtır?');
if (qSecond==='24') {

  correctCounter++;
  console.log('doğru cevap!');

}
else {

  console.log('yanlış cevap!');
  falseCounter--;
  
}

let qThird= prompt('4 ile 0ın çarpımı kaçtır?');
if (qThird==='0') {

  correctCounter++;
  console.log('doğru cevap!');

}
else {

  console.log('yanlış cevap!');
  falseCounter--;
  
}
let qFourth= prompt('10dan 5 çıkarsa sonuç kaç olur?');
if (qFourth==='5') {

  correctCounter++;
  console.log('doğru cevap!');

}
else {

  console.log('yanlış cevap!');
  falseCounter--;
  
}
let qFifth= prompt('1 ile 1in toplamı kaçtır?');
if (qFifth==='2') {

  correctCounter++;
  console.log('doğru cevap!');

}
else {

  console.log('yanlış cevap!');
  falseCounter--;
  
}

let qSixth= prompt('10 ile 8in çarpımı kaçtır?');
if (qSixth==='80') {

  correctCounter++;
  console.log('doğru cevap!');

}
else {

  console.log('yanlış cevap!');
  falseCounter--;
  
}

let qSeventh= prompt('8i 4e bölersen sonuç kaç olur?');
if (qSeventh==='2') {

  correctCounter++;
  console.log('doğru cevap!');

}
else {

  console.log('yanlış cevap!');
  falseCounter--;
  
}

let qEight= prompt('9u 9a bölersen sonuç kaç olur?');
if (qEight==='1') {

  correctCounter++;
  console.log('doğru cevap!');

}
else {

  console.log('yanlış cevap!');
  falseCounter--;
  
}

let qNineth= prompt('25i 5e bölersen sonuç kaç olur?');
if (qNineth==='5') {

  correctCounter++;
  console.log('doğru cevap!');

}
else {

  console.log('yanlış cevap!');
  falseCounter--;
  
}
let qTenth= prompt('50yi 5e bölersen sonuç kaç olur?');
if (qNineth==='10') {

  correctCounter++;
  console.log('doğru cevap!');

}
else {

  console.log('yanlış cevap!');
  falseCounter--;
  
}

console.log(correctCounter);
console.log(falseCounter);
