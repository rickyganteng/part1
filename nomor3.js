var panjang = "aa"; 
if(typeof panjang  == 'number'){
    let hasil = '';
    for (let i = panjang; i >= 1; i--) {
        for (let j = 1; j <=i; j++) {
          hasil += j;    
        }
            hasil += '\n' ;
    }
    console.log( hasil);
  }else {
    console.log("mohon masukkan nilai angka !")
  }
