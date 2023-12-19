
alert("Hello, it'Muhammad ridho amiin");
function hitung() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Masukan angka yang valid");return;
        
    }

var hasil = bilangan1 + bilangan2;
alert("hasil penjumlahan: " + hasil);

}   

function hitungpengurangan () {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Masukan angka yang valid");return;
        
    }

var hasil = bilangan1 - bilangan2;
alert("hasil penjumlahan: " + hasil);

}   

function hitungperkalian() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Masukan angka yang valid");return;
        
    }

var hasil = bilangan1 * bilangan2;
alert("hasil penjumlahan: " + hasil);

}   

function hitungpembagian() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Masukan angka yang valid");return;
        
    }

var hasil = bilangan1 / bilangan2;
alert("hasil penjumlahan: " + hasil);

}   

function hitungpemangkatan() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Masukan angka yang valid");return;
        
    }

var hasil = bilangan1 ** bilangan2;
alert("hasil penjumlahan: " + hasil);

}   

function hitungsisabagi() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Masukan angka yang valid");return;
        
    }

var hasil = bilangan1 % bilangan2;
alert("hasil penjumlahan: " + hasil);

}