// let dan const
let nama = "Andi";
nama = "Budi";
console.log(nama); // Output: Budi

const kampus = "Universitas Nasional PASIM"; // Nilai dari const tidak bisa diubah
// kampus = "Universitas Gadjah Mada"; // Akan menghasilkan error karena const tidak bisa diubah
console.log(kampus); // Output: Universitas Nasional PASIM

// ------------------------------------------------------

// arrow function
// sebelum ada ES6
function sapa() {
    console.log("Halo, selamat datang!");
}

// penulisan biasa
function tambah(a, b) {
    return a + b;
}

// ditulis menjadi
const tambah = (a, b) => {
    return a + b;
};
// lebih singkat lagi
const tambah = (a, b) => a + b;

// ------------------------------------------------------

// template literal
const namaDepan = "Andi";
// tanpa menggunakan template literal
console.log("Halo" + namaDepan + ", selamat datang"); // Output: Halo Andi, selamat datang
// menggunakan template literal
console.log(`Halo ${namaDepan}, selamat datang`); // Output: Halo Andi, selamat datang

// ------------------------------------------------------

// destructuring assignment
const mahasiswa = {
    nama: "Andi",
    umur: 20,
    jurusan: "Teknik Informatika"
};

// cara biasa
const nama = mahasiswa.nama;
const umur = mahasiswa.umur;
// cara ES6
const { nama, umur } = mahasiswa;

// destructuring array
const warna = ["merah", "hijau", "biru"];
const [merah, hijau, biru] = warna;

// ------------------------------------------------------

// spread operator & rest operator
// spread operator
const angka1 = [1, 2, 3];
const angka2 = [...angka1, 4, 5, 6]; // spread operator
console.log(angka2); // Output: [1, 2, 3, 4, 5, 6]

// menggabungkan dua array
const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Express", "MongoDB"];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack); // Output: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"]

// menggabungkan dua objek
const mahasiswa1 = {
    nama: "Andi",
    umur: 20
};
const mahasiswa2 = {
    jurusan: "Teknik Informatika",
    kampus: "Universitas Nasional PASIM"
};
const dataMahasiswa = { ...mahasiswa1, ...mahasiswa2 };
console.log(dataMahasiswa); // Output: { nama: "Andi", umur: 20, jurusan: "Teknik Informatika", kampus: "Universitas Nasional PASIM" }

// rest operator
const jumlahKan = (...angka) => {
    let total = 0;
    for (let nilai of angka) {
        total += nilai;
    }
    return total;
}
console.log(jumlahKan(1, 2, 3, 4, 5)); // Output: 15