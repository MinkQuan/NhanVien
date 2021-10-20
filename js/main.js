function getEle(id) {
    return document.getElementById(id);
} var dsnv = new DanhSachNhanVien();
var Validation = new Validation();
GetLocalStore();
function layThongTinNguoiDung(isAdd) {

    var _taiKhoan = getEle("tknv").value;
    var _name = getEle("name").value;
    var _email = getEle("email").value;
    var _pass = getEle("password").value;
    var _date = getEle("datepicker").value;
    var _luong = getEle("luongCB").value;
    var _chucVu = getEle("chucvu").value;
    var _gioLam = getEle("gioLam").value;
    var isValid = true;

    if (isAdd) {
        isAdd &= Validation.kiemTraRong(_taiKhoan, "tbTKNV", " ko dc rỗng");
        isAdd &= Validation.kiemTraRong(_name, "tbTen", " ko dc rỗng");
        isAdd &= Validation.kiemTraRong(_email, "tbEmail", " ko dc rỗng");
        isAdd &= Validation.kiemTraRong(_pass, "tbMatKhau", " ko dc rỗng");
        isAdd &= Validation.kiemTraRong(_date, "tbNgay", " ko dc rỗng");
        isAdd &= Validation.kiemTraRong(_luong, "tbLuongCB", " ko dc rỗng");
        isAdd &= Validation.KiemTraChucVu("chucvu", "tbChucVu", " ko dc rỗng");
        isAdd &= Validation.kiemTraRong(_gioLam, "tbGiolam", " ko dc rỗng");

    }
    var nhanVien = new NhanVien(
        _taiKhoan,
        _name,
        _email,
        _pass,
        _date,
        _luong,
        _chucVu,
        _gioLam,

    );
    return nhanVien





}





function themNhanVien(event) {
    event.preventDefault();
    var nhanVien = layThongTinNguoiDung(true);

    if (nhanVien !== null) {
        nhanVien.tinhTongLuong();
        nhanVien.tinhXepLoai();
        dsnv.themNhanVien(nhanVien);
        taoBang(dsnv.arr);
        console.log(dsnv);
        SetLocalStore()
    }
}



function taoBang(arr) {
    getEle("tableDanhSach").innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var tagTR = document.createElement("tr");



        var tagTD_TaiKhoan = document.createElement("td");
        var tagTD_Name = document.createElement("td");
        var tagTD_Email = document.createElement("td");
        var tagTD_GioLam = document.createElement("td");
        var tagTD_ChucVu = document.createElement("td");
        var tagTD_TongLuong = document.createElement("td");
        var tagTD_XepLoai = document.createElement("td");
        var tagTD_Button_delete = document.createElement("td");
        var tagTD_Button_Edit = document.createElement("td");


        tagTD_TaiKhoan.innerHTML = arr[i].taikhoan;
        tagTD_Name.innerHTML = arr[i].name;
        tagTD_Email.innerHTML = arr[i].email;
        tagTD_GioLam.innerHTML = arr[i].gioLam;
        tagTD_ChucVu.innerHTML = arr[i].chucVU;
        tagTD_TongLuong.innerHTML = arr[i].tongLuong;
        tagTD_XepLoai.innerHTML = arr[i].xeploai;
        tagTD_Button_delete.innerHTML = '<button class="btn btn-danger" onclick="xoaNhanVien(\'' + arr[i].taikhoan + "')\">xóa</button>"
        tagTD_Button_Edit.innerHTML = '<button class="btn btn-success" data-toggle="modal"data-target="#myModal" onclick="suaNhanVien(\'' + arr[i].taikhoan + "')\">sửa</button>"


        tagTR.appendChild(tagTD_TaiKhoan);
        tagTR.appendChild(tagTD_Name);
        tagTR.appendChild(tagTD_Email);
        tagTR.appendChild(tagTD_GioLam);
        tagTR.appendChild(tagTD_ChucVu);
        tagTR.appendChild(tagTD_TongLuong);
        tagTR.appendChild(tagTD_XepLoai);
        tagTR.appendChild(tagTD_Button_delete);
        tagTR.appendChild(tagTD_Button_Edit);


        getEle("tableDanhSach").appendChild(tagTR);
    }
}

function xoaNhanVien(maNV) {
    dsnv._xoaNhanVien(maNV)
    taoBang(dsnv.arr)
    SetLocalStore()

}



function suaNhanVien(maNV) {
    var nhanVien = dsnv.layThongTinNhanVien(maNV);

    getEle("btnCapNhat").style.display = "inline-block"

    getEle("tknv").value = nhanVien.taikhoan
    getEle("tknv").disabled = true
    getEle("name").value = nhanVien.name
    getEle("email").value = nhanVien.email
    getEle("password").value = nhanVien.pass
    getEle("datepicker").value = nhanVien.date
    getEle("luongCB").value = nhanVien.luong
    getEle("chucvu").value = nhanVien.chucVU
    getEle("gioLam").value = nhanVien.gioLam




}



getEle("btnCapNhat").addEventListener("click", function (event) {
    event.preventDefault()
    var nhanVien = layThongTinNguoiDung();
    nhanVien.tinhTongLuong();
    nhanVien.tinhXepLoai();
    dsnv.updateNV(nhanVien)
    taoBang(dsnv.arr)
})
getEle("btnReset").addEventListener("click", function (event) {
    event.preventDefault()
    getEle("formNV").reset();
    getEle("btnCapNhat").style.display = "none"
    getEle("tknv").disabled = false

})


getEle("searchName").addEventListener("keyup", function (event) {
    event.preventDefault()

    var keyword = getEle("searchName").value;
    var mangTimKiem = dsnv.timKiemNhanVien(keyword);
    taoBang(mangTimKiem)


})



function SetLocalStore() {
    var arrString = JSON.stringify(dsnv.arr);
    localStorage.setItem("DSNV", arrString);
}



function GetLocalStore() {

    if (localStorage.getItem("DSNV")) {
        var data = localStorage.getItem("DSNV");
        dsnv.arr = JSON.parse(data)
        taoBang(dsnv.arr)
    }
}