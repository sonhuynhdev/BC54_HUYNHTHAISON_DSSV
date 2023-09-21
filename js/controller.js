function layThongTinTuForm() {
  //lấy thông tin từ form
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var matKhau = document.getElementById("txtPass").value;
  var email = document.getElementById("txtEmail").value;
  var toan = document.getElementById("txtDiemToan").value;
  var ly = document.getElementById("txtDiemLy").value;
  var hoa = document.getElementById("txtDiemHoa").value;

  // Tạo object
  var sv = {
    ma: ma,
    ten: ten,
    matKhau: matKhau,
    email: email,
    toan: toan,
    ly: ly,
    hoa: hoa,
    tinhDTB: function () {
      var dtb = (this.toan + this.ly + this.hoa) / 3;
      return dtb;
    },
  };
  return sv;
}

function renderDSSV(dssv) {
  var contentHTML = "";
  // duyệt mãng để update dữ liệu của contentHTML
  for (var index = 0; index < dssv.length; index++) {
    var sv = dssv[index];
    //tạo chuỗi tr
    var trString = `<tr>
          <td>${sv.ma}</td>
          <td>${sv.ten}</td>
          <td>${sv.email}</td>
          <td>${sv.tinhDTB()}</td>
          </tr>`;
    //cộng dồn chuỗi tr vào contentHTML
    contentHTML = contentHTML + trString;
  }
  document.querySelector("#tbodySinhVien").innerHTML = contentHTML;
  //dom vào tbody và show contentHTML
}
