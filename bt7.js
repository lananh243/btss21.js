let a = parseFloat(prompt("Nhập a"));
let b = parseFloat(prompt("Nhập b"));
let c = parseFloat(prompt("Nhập c"));

if(a > b && a > c){
    console.log("Số lớn nhất là -",+a);
}else if(b > a && b > c){
    console.log("Số lớn nhất là -",+b);
}else{
    console.log("Số lớn nhất là -",+c);
}