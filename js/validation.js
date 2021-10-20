function Validation() {
    this.kiemTraRong = function (input, divID, Mess) {
        if (input.trim() === "") {
            getEle(divID).innerHTML = Mess;
            getEle(divID).className = "alert alert-danger";
            return false;
        } else {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
    }
    this.KiemTraChucVu = function (idSelect, divID, mess) {
        if (getEle(idSelect).selectedIndex != 0) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        } else {
            getEle(divID).innerHTML = mess;
            getEle(divID).className = "alert alert-danger";
            return false;
        }
    }
    this.KiemTraMaSVTrung = function (input, divID, mess, arr) {
        var status = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].maSV === input) {
                status = false;
                break;
            }
        }
        if (status) {
            getEle(divID).className = ""
            return true
        }
        getEle(divID).innerHTML = mess;

        return false;
    }

}