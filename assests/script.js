
function Addfunction(){
    let a = Number(value1.value);
    let b = Number(value2.value);
    let c = a + b;
    main.innerHTML += a + " + " + b + " = " + c + "<br>";
}
function clearfunction(){
     value1.value = "";
     value2.value = "";
    main.innerHTML = "";
}
function Substractfunction(){
    let a = Number(value1.value);
    let b = Number(value2.value);
    let c = a - b;
    
    main.innerHTML += a + " - " + b + " = " + c + "<br>";
}
function perfunction(){
    let a = Number(value1.value);
    let b = Number(value2.value);
    let c = (a * b)/100;
    
    main.innerHTML += a + " % " + b + " = " + c + "<br>";
}
function Multiplyfunction(){
    let a = Number(value1.value);
    let b = Number(value2.value);
    let c = a * b;
    main.innerHTML += a + " * " + b + " = " + c + "<br>";
}
function Dividefunction(){
    let a = Number(value1.value);
    let b = Number(value2.value);
    let c = a / b;
    main.innerHTML += a + " / " + b + " = " + c + "<br>";
}