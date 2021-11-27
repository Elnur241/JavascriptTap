//fesilleri cap etmek
function myFunction(){
    var num = prompt("Please enter number between 1and four");
    var num1 = parseInt(num);
switch(num1) {
    case 1:
     alert("This seaseon spring");
      break;
    case 2:
        alert("This seaseon summer");
      break;
      case 3:
        alert("This seaseon autumn");
      break;
      case 4:
        alert("This seaseon winter");
      break;
    default:
      alert("number must be between 1-4");
  }
}
//bolenleri tapmaq
function myfuntion2(){
 var num = prompt("Please enter number ");
 var num1 = parseInt(num);
 for(let i=0; i<=num1; i++){
  if(num%i==0){
     //  console.log("bolenler"+i);
    alert("bolenler"+i);
  }
 }
}

//big number 
function myfunction3(){
    let arr=[1,2,3,9,8,20]
let big=arr[0];
    for(let i=0; i<=arr.length-1; i++){
if(big>arr[i]){
   big=big;
}else{
    big=arr[i];
}
    }
    alert("big:"+big);
}

//faktorial
function myfunction4(){
    var num = prompt("Please enter number ");
    var num1 = parseInt(num);
    let fakt=1;
    for(let i=1; i<=num1; i++)
    {
fakt*=i;
    }
    alert("faktorial="+fakt)
}
//CREDIT TAPSIRIGI
function myfunction5(){
    var value = parseInt(prompt("Please enter credit value "));
    var month = parseInt(prompt("Please enter credit for much month "));
    for(let i=1; i<=month; i++){
if(value%month>0){
    if(i<month){
        alert(i+"-ci ay" +((value-value%month)/month));
    }
      
        if(i==month){
            alert(i+"-ci ay" +(parseInt((value-value%month)/month)+parseInt(value%month)));
        }
}
else{
    alert(i+"-ci ay" +value/month);
}
    }
}