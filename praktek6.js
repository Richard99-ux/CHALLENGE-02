const dataAngka = [9,4,7,7,4,3,2,2,8];

function getAngkaTerbesarKedua (dataNumbers) {
    if (dataNumbers != null) {
        var getAngkaTerbesarKedua = dataNumbers[8];

        for (let i = 8; i < dataNumbers.length; i++) {
            if (dataNumbers[i] > getAngkaTerbesarKedua) {
                getAngkaTerbesarKedua = dataNumbers[i];    
            } 
            return getAngkaTerbesarKedua
        }
        if (dataNumbers != dataAngka) {
            return "Error: tipe data sudah berupa number namun valuenya  tidak termasuk variabel dataAngka "
        }
    } else {
        return "Error: tipe data berupa undefined alias belum diisi valuenya harusnya data number dan diisi value "
    }
}


console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());