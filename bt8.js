let weight = parseFloat(prompt("Nhập cân nặng"));
let height = parseFloat(prompt("Nhập chiều cao"));

let bmi = weight / (height ^ 2);
console.log("Kết quả theo chỉ số BMI: " ,+bmi);

if(bmi < 18.5){
    console.log("Cân nặng thấp (gầy");
}else if(bmi >= 18.5 && bmi < 24.9){
    console.log("Bình thường");
}else if(bmi >= 25 && bmi < 29.9){
    console.log("Thừa cân - Tiền béo phì");
}else if(bmi >= 30 && bmi < 34.9){
    console.log("Béo phì độ I")
}else if(bmi >= 35 && bmi < 39.9){
    console.log("Béo phì độ II");
}else if(bmi >= 40){
    console.log("Béo phì độ III");
}