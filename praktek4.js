function isValidPassword (givenPassword) {
    var re = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,}/g;
    
    if (givenPassword !== null) {
        if (typeof(givenPassword) == "string") {
            if (givenPassword.match(re)) {
                return "TRUE";
            } else {
                return "FALSE";
            }
        } else {
            return "Error: tipe data harus string dan memiliki 8 huruf, 1 hurf besar, 1 huruf kecil dan 1 angka tapii diisi number";
        } 
    }        
};


console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());