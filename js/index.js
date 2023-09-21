//tạo array dssv chứa object sv
var dssv = [];

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
  localStorage.setItem("DSSV_LOCAL", dataJson);
}
