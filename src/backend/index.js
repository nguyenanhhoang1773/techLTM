const express = require("express");
const mysql = require("mysql2");
var cors = require("cors");
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const connection = mysql.createConnection({
  host: "localhost", // Địa chỉ host MySQL (thường là localhost trong XAMPP)
  user: "root", // Tài khoản MySQL mặc định trong XAMPP
  password: "", // Mật khẩu mặc định thường để trống
  database: "techstore", // Tên cơ sở dữ liệu mà bạn đã tạo
});

// Kết nối tới MySQL
connection.connect((err) => {
  if (err) {
    console.error("Kết nối thất bại: ", err);
    return;
  }
  console.log("Kết nối thành công đến MySQL");
});
const handleAddCart = (id, title, price) => {
  const sql = `INSERT INTO products (id, title, price) VALUES (?, ?, ?)`;

  // Dữ liệu sẽ được thêm vào
  const userData = [id, title, price];

  connection.query(sql, userData, (err, result) => {
    if (err) {
      console.error("Có lỗi khi thêm dữ liệu:", err);
      return;
    }
    console.log(
      "Thêm dữ liệu thành công, ID của bản ghi mới:",
      result.insertId
    );
  });
};
const handleDeleteCart = (id) => {
  const sql = "DELETE FROM products WHERE id = ?"; // Thay 'products' bằng tên bảng của bạn
  const values = [id]; // ID của bản ghi bạn muốn xóa

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      return;
    }
    console.log(`Deleted ${results.affectedRows} row(s)`); // Số lượng bản ghi đã bị xóa
  });
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/addCart", (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const title = req.body.title;
  const price = req.body.price;
  console.log(id, title, price);
  handleAddCart(id, title, price);
});
app.get("/deleteCart/:id", (req, res) => {
  console.log(req.params.id);
  const itemId = req.params.id;
  handleDeleteCart(itemId);
});
// Ví dụ: Truy vấn dữ liệu từ bảng 'users'
// connection.query('SELECT * FROM users', (err, results, fields) => {
//   if (err) {
//     console.error('Truy vấn thất bại: ', err);
//     return;
//   }
//   console.log('Kết quả truy vấn:', results);
// });

// Đóng kết nối
// connection.end();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
