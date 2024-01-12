let a = parseFloat(prompt("Nhập điểm Toán"));
let b = parseFloat(prompt("Nhâp điểm Văn"));
let c = parseFloat(prompt("Nhập điểm Anh"));

let medium = (a + b + c)/3;
console.log("Điểm trung bình : "+ medium);

if(medium >= 8.0 && medium <= 10){
    console.log("Xếp loại GIỎI");
}else if(medium >= 6.5 && medium <= 7.9){
    console.log("Xếp loại KHÁ");
}else if(medium >= 5.0 && medium <= 6.4){
    console.log("Xếp loại TRUNG BÌNH");
}else {
    console.log("Xếp loại YẾU");
}