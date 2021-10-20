function DanhSachNhanVien() {
    this.arr = [];
    this.themNhanVien = function (nv) {
        this.arr.push(nv)
    }
    this.timViTri = function (taikhoan) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].taikhoan === taikhoan) {
                index = i;
                break;
            }
        }
        return index;
    }
    this._xoaNhanVien = function (maNV) {
        var index = this.timViTri(maNV)

        //  xóa sinh viên 
        if (index !== -1) {
            this.arr.splice(index, 1)
            // splice : là hàm đã được javascirpt 
            // định nghĩa sẵn chỉ viejc lấy ra sài 
        }
    }
    this.layThongTinNhanVien = function (maNV) {
        //  lấy vị trí sinh viên 
        var index = this.timViTri(maNV);
        if (index !== -1) {
            return this.arr[index];
        }


    }
    this.updateNV = function (nhanVien) {
        var index = this.timViTri(nhanVien.taikhoan)
        if (index !== -1) {
            this.arr[index] = nhanVien
        }
    }
    DanhSachNhanVien.prototype.timKiemNhanVien = function (keyword) {
        var mangTimKiem = [];
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].taikhoan.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                mangTimKiem.push(this.arr[i])
            }
        }

        return mangTimKiem;

    }

}
