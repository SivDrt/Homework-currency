// assignment 1

function printSmaller (num1, num2){
    console.log(Math.min (num1, num2));
}

printSmaller (10, 20);

// assignment 2

function words (word1, word2, word3, word4) {
    let count = 0;

    if (word1.length>3) count++ ;
    if (word2.length>3) count++ ;
    if (word3.length>3) count++ ;
    if (word4.length>3) count++ ;

    console.log(count);
}

words("bloop", "fish", "sea", "turtle");


//assignment 3

function replaceA(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 65) { 
      result += String.fromCharCode(97); 
    } else {
      result += str[i];
    }
  }

  console.log(result);
}

replaceA("BALON"); 


// assignment 4

function checkNumber(num) {

  if (num > 0) {
    console.log("hiuvi");
  } else if (num < 0) {
    console.log("shlili");
  } else {
    console.log("num0");
  }

  if (num % 2 === 0) {
    console.log("zugi");
  } else {
    console.log("ezugi");
  }
}

checkNumber(10);   
checkNumber(-3);   
checkNumber(0);  

// assignment 5

function checkAndTrim(str1) {

  if (str1.length > 1) {
    let first = str1[0]; 
    let last = str1[str1.length - 1]; 

    if (first === last) {
    
      let newStr = str1.slice(1, str1.length - 1);
      console.log(newStr);
    } else {
      console.log(str1); 
    }
  } else {
    console.log("tooshort");
  }
}

checkAndTrim("aba");     
checkAndTrim("balonb");  
checkAndTrim("hello"); 


// assignment 6

function handleString(str) {
  if (str.includes("*")) {
    console.log(str.replace("*", ""));
  } 
  else if (str.includes("@")) {
    console.log("*" + str + "*");
  } 
  else if (str.includes("₪")) {
    console.log("new shekel");
  } 
  else {
    console.log(str);
  }
}

handleString("bal*on"); 
handleString("balon@");  
handleString("price₪");
handleString("hello"); 


// assignment 7

const RATES = {
  EUR: 4.2,
  USD: 3.9,
  GBP: 5.0
};

function normalizeCurrency(val){
  if(!val) return "";
  const v = val.trim().toLowerCase();
  if(["eur","euro"].includes(v)) return "EUR";
  if(["usd","dollar","dollars"].includes(v)) return "USD";
  if(["gbp","pound","pound sterling","sterling"].includes(v)) return "GBP";
  return ""; 
}

function convert(){
  const amountStr = document.getElementById("amount").value.trim();


  const sel = document.getElementById("currencySelect").value;
  const typed = document.getElementById("currency").value;
  const curCode = sel ? sel : normalizeCurrency(typed);


  const amount = Number(amountStr.replace(",", "."));
  if(!amountStr || Number.isNaN(amount)){
    alert("Error: Please enter a numeric amount in shekels (e.g. 100).");
    return;
  }


  if(!curCode || !RATES[curCode]){
    alert("Error: Invalid currency. Options: EUR/Euro, USD/Dollar, GBP/Pound.");
    return;
  }


  const rate = RATES[curCode];      
  const result = amount / rate;     
  const pretty = result.toLocaleString("en-US", {maximumFractionDigits: 2});

  alert(`Result: ${pretty} ${curCode}`);
}
