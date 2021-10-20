function NhanVien(
    _taiKhoan,
    _name,
    _email,
    _pass,
    _date,
    _luong,
    _chucVU,
    _gioLam,
) {
    this.taikhoan = _taiKhoan;
    this.name = _name
    this.email = _email
    this.pass = _pass
    this.date = _date
    this.luong = _luong
    this.chucVU = _chucVU
    this.gioLam = _gioLam
    this.tongLuong = 0;
    this.xeploai = "";
    this.tinhTongLuong = function () {
        this.tongLuong = this.gioLam * this.luong;
    }
    this.tinhXepLoai = function () {
        if (this.gioLam >= 192) {
            this.xeploai = "nhan vien xuat sac";
        } else if (this.gioLam >= 176) {
            this.xeploai = "nhan vien gioi"
        } else if (this.gioLam >= 160) {
            this.xeploai = "nhan vien kha"
        } else {
            this.xeploai = "nhan vien trung binh"
        }
    }

}