export const firstUnique = (str) => {
  // Loop tiap elemen 'str' (buat jadi acuan)
  for (let i = 0; i < str.length; i++) {
    // Set flag buat nandain kalo nanti ketemu karakter/huruf yg sama
    let isFound = false;
    // Loop buat compare huruf acuan dengan semua huruf lain
    for (let j = 0; j < str.length; j++) {
      // Jika indeks beda, tapi hurufnya sama, set flag jadi true, terus di-break (masuk iterator setelahnya)
      if (i !== j && str[i] === str[j]) {
        isFound = true;
        break;
      }
    }
    // Jika sampe akhir ngga ketemu huruf yg sama dengan acuan, langsung return si huruf yg jadi acuan
    if (!isFound) return str[i];
  }

  // Return string kosong kalo ngga ada elemen unik
  return "";
};