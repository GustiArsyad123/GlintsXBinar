//Menghitung volume tabung
console.log('-->Program Calculate Volume of Tube<--'); //Print the title 
function tubeVolume(jari2, tinggi, phi){  //Function dan 3 parameter
     return phi * jari2 * jari2 * tinggi; //pengembalian nilai dengan argumen
}

let varTubeVol = tubeVolume(7, 24, 3.14); //deklarasi penyimpanan nila ke variable
console.log('Menghitung volume Tabung: ' + (varTubeVol)); //print dengan argumen memanggil variable

console.log('---------------');

//Menghitung luas tabung
console.log('-->Program Calculate Large of Tube<--');
function tubeLarge(jari2, tinggi, phi){
     return 2 * phi * jari2 * tinggi;
}

let varTubeLar = tubeLarge(7, 24, 3.14);
console.log('Menghitung Luas Tabung: ' + (varTubeLar));

console.log('=================');
//Menghitung luas Kerucut
console.log('-->Program Calculate surface area of Cone<--');
function coneLarge(jari2, z, phi){  //z = Panjang Garis Pelukis
     return phi * jari2 * (jari2 + z);
}

let varConeLar = coneLarge(7, 24, 3.14);
console.log('Menghitung Luas Permukaan Kerucut: ' + (varConeLar));

console.log('---------------');

//Menghitung Volume Kerucut
console.log('-->Program Calculate Volume of Cone<--');
function coneVolume(jari2, tinggi, phi){ 
     return (1.0 / 3.0) * (phi * jari2 * jari2) * tinggi;
}

let varConeVol = coneVolume(7, 24, 3.14);
console.log('Menghitung Volume Kerucut: ' + (varConeVol));