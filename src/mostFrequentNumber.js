export default function mostFreqNumber(){
    const datas = [4, 4, 2, 2];
    const hasilCount = {};

    for(let i = 0; i < datas.length; i++){
        
        //cek apakah value key[i] sudah ada atau blm, kalau blm maka diberikan nilai 1, kalau sudah tinggal increment objek dengan value dari key[i] tersebut sebesar 1
        if(hasilCount[datas[i]] === undefined){
            hasilCount[datas[i]] = 1;
        }else{
            hasilCount[datas[i]] += 1;
        }
    }

    let maxCount = 0; //variabel untuk menyimpan sementara nilai yang paling sering muncul
    let hasil = 0; //variabel untuk menyimpan si kunci mana yg 

    for(let k in hasilCount){ //untuk ekstraksi isi dari objek, kita bisa gunakan for loop in, kalau utk array bisa pakai indexing atau for loop of
        let key = 0;

        //validasi apakah key bertipe number ? continue : casting ke type number
        if(typeof k !== "number"){ //lalu key nya kita casting ke type number, karna soal minta return the smallest 'number'
            key = Number(k)
        }

        if(hasilCount[key] > maxCount ){ //apakah 'value key[i] = 2' lebih besar(>) dari pada 'maxCount = 0'
            maxCount = hasilCount[key]; //jika true ? maka kita ambil nilai dari key[i] dan masukkan ke maxCount
            hasil = key 
        }else if(hasilCount[key] === maxCount && key < hasil){// jika kondisi pertama salah, cek, apakah 'value key[i] === maxCount dan(&&) apakah key[i] < hasil
            maxCount = hasilCount[key];
            hasil = key
        }
    }

    console.log(hasilCount.length);    
    console.log(hasilCount, hasil);
}