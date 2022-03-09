function getSplitName (givenNumber) {
    if (typeof(givenNumber) == 'string') {
        var nama = givenNumber.split(" ");

        if (nama.length <= 3) {
            if(nama.length == 3) {
                var firstName = nama[0]
                var middleName = nama[1] != null ? nama[1] : null
                var lastName = nama[2] != null ? nama[2] : null
                var obj = {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName
                };
                return obj

            } else if (nama.length == 2) {
                var firstName = nama[0]
                var middleName = null;
                var lastName = nama[1]
                var obj = {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName
                };
                return obj

            } else {
                var firstName = nama[0]
                var middleName = nama[1] != null ? nama[1]: null
                var lastName = nama[2] != null ? nama[2]: null
                var obj = {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName
                };
                return obj
            }
        } else {
            return "Error: This function is only for 3 characters name";
        }
    } else {
        return "Error: tipe data harus string tapi diisi number"
    }       
}



console.log(getSplitName("Aldi Daniela Pramata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));