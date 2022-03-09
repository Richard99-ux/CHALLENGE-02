function checkEmail (email) {
    let re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g;

    if (email != null) {
        if (typeof(email) == 'string') {
            if (email.match(re)) {
                return "VALID"
            } else {
                let re1 = new RegExp('[a-z\d\.-]+@[a-z\d-]');
                if (re1.test(email)) {
                    return "INVALID"
                } else {
                    return "Error: hanya berupa nama saja tidak ada simbol @, domain dan extension"
                }
            }
        } else {
            return "Error: tipe data berupa number bukan string dan bukan email juga"
        }
    } else {
        return "Error: tipe data berupa undefined alias belum diisi valuenya "
    }
}



console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
console.log((checkEmail(3322)))
console.log(checkEmail())