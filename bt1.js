let year = 2024;
let old = prompt("Bạn sinh năm bao nhiêu");
console.log(old);
let birthday = year - old;

if(year > 0 || year < 2024){
    console.log("Tuổi", + birthday);
}else{
    console.log("Không hợp lệ");
}