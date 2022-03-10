const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];


var TotalKeuntungan = dataPenjualanNovel.filter((item) =>
    item.namaProduk === 'Pulang - Pergi' || item.namaProduk === 'Selamat Tinggal' || item.namaProduk === 'Garis Waktu' || item.namaProduk === 'Laskar Pelangi'
).reduce((accumulator, item) => {
    return accumulator + (item.hargaJual - item.hargaBeli) * (item.totalTerjual + item.sisaStok);
}, 0)


var rupiah1 = (number) =>{
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(number)
}


var TotalModal = dataPenjualanNovel.filter((item) => 
    item.namaProduk === 'Pulang - Pergi' || item.namaProduk === 'Selamat Tinggal' || item.namaProduk === 'Garis Waktu' || item.namaProduk === 'Laskar Pelangi'
).reduce((accumulator, item) => {
    return accumulator + item.hargaBeli * (item.totalTerjual + item.sisaStok);
}, 0)



var rupiah2 = (number) =>{
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(number)
}



var ProdukBukuTerlaris = dataPenjualanNovel.filter((item) => item.totalTerjual > 171).map(item => item.namaProduk);

var PenulisTerlaris = dataPenjualanNovel.filter((item) => item.totalTerjual > 171).map(item => item.penulis);


function hitungTotalPenjualan(dataPenjualan) {
    dataPenjualan1 = rupiah1(TotalKeuntungan);
    dataPenjualan2 = rupiah2(TotalModal);
    dataPenjualan3 = ProdukBukuTerlaris;
    dataPenjualan4 = PenulisTerlaris;

    return `{
        totalKeuntungan: ${dataPenjualan1},
        totalModal: ${dataPenjualan2},
        produkBukuTerlaris: ${dataPenjualan3},
        penulisTerlaris: ${dataPenjualan4}
    }`
}


console.log(hitungTotalPenjualan(dataPenjualanNovel))