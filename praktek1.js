const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

// Buatlah sebuah function dengan nama changeWord yang berfungsi untuk menggantikan sebuah kata didalam sebuah kalimat.
function changeWord (selectedText, changedText, Text){
    Text1 = kalimat1;
    Text2 = kalimat2;
    return Text.replace(selectedText, changedText);    
}

// panggil function tersebut dengan kalimat1
console.log(changeWord('mencintai','membenci', kalimat1));

// panggil function tersebut dengan kalimat2
console.log(changeWord('bromo','semeru', kalimat2));

