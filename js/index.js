//tạo array dssv chứa object sv
var dssv = [];

//render lại data từ localstorage khi user reload
const DSSV_LOCAL = "DSSV_LOCAL";
var dataJson = localStorage.getItem(DSSV_LOCAL);

if (dataJson != null) {
  //dataJson đang là json => convert sang array
  dssv = JSON.parse(dataJson);

  //render lại
  renderDSSV(dssv);
}

function themSV() {
  var sv = layThongTinTuForm();
  //lấy thông tin từ form

  //thêm sv vừa đc tạo vào array dssv
  dssv.push(sv);
  // show array dssv lên layout, mỗi item 1 thẻ tr
  renderDSSV(dssv);
  //convert array thành json để lưu xuống local
  //localStorage chỉ lưu đc thông tin dưới dạng JSON
  var dataJson = JSON.stringify(dssv);
  // lưu json vào localStorage
  localStorage.setItem(DSSV_LOCAL, dataJson);
}

function xoaSV(id) {
  //tìm vị trí sv nằm trong dssv có mã trùng với id
  var index;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].ma == id) {
      index = i;
    }
  }
  // xoá phần tử tại vị trí index trong dssv
  dssv.splice(index, 1);
  //gọi lại renderDSSV sau khi xoá  => tạo mới lại layout với data mới nhất
  renderDSSV(dssv);
}

function suaSV(id) {
  var index = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  var sv = dssv[index];
  // hiển thị thông tin lên form
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;
}
