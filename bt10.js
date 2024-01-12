// switch-case là một cấu trúc điều kiện cho phép lựa chọn thực thi các khối lệnh khác
// nhau dựa trên kết quả của việc so sánh
// switch-case so sánh giá trị của một biến với lần lượt từng giá trị một, nếu có giá trị phù
// hợp với biến thì khối lệnh tương ứng sẽ được thực thi
// switch-case không thể thay thế if-else trong tất cả các trường hợp


vd:
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Quả là táo");
    break;
  case "banana":
    console.log("Quả là chuối");
    break;
  case "orange":
    console.log("Quả là cam");
    break;
  default:
    console.log("Quả không được xác định");
    break;
}

// Đánh giá một điều kiện và đưa ra lựa chọn thực thi một khối lệnh dựa trên điều kiện đó
//  Nếu điều kiện có giá trị đúng (true) thì khối lệnh bên trong if sẽ được thực thi
//  Nếu điều kiện có giá trị sai (false) thì khối lệnh bên trong else sẽ được thực thi
//  Luồng thực thi sẽ chuyển xuống ngay sau khối lệnh if

 vd:

let color = "blue";

if (color === "red") {
  console.log("Màu là đỏ");
} else if (color === "blue") {
  console.log("Màu là xanh");
} else if (color === "green") {
  console.log("Màu là xanh lá cây");
} else {
  console.log("Màu không được xác định");
}
