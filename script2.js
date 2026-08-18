console.log("Connected!");

let quote  = ["DONT BE SAD ALLAH IS WITH US",
     "ALLAH WILL FIX EVERYTHING ",
      "BUT BEAUTY LIES IN PATIENCE ",
     "EVERY SOUL WILL TASTE DEATH " ,
    "YOU ARE EXACTLY WHERE ALLAH WANTS YOU TO BE "
];

 const quoteBtn = document.getElementById('new-quote-btn');
quoteBtn.addEventListener('click', function(){

 let randomindex = Math.floor(Math.random() * quote.length);
let selectedquote = quote[randomindex];
document.getElementById("quoteBox").textContent = selectedquote;
alert(selectedquote);
});