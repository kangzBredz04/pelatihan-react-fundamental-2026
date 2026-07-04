// *📢 TUGAS PERTEMUAN 1 – JavaScript Modern (ES6)*
// Halo semuanya! 👋

// Setelah mempelajari materi JavaScript Modern (ES6), silakan mengerjakan tugas berikut untuk melatih pemahaman kalian mengenai materi yang telah dipelajari.

// *📚 Studi Kasus: Data Mahasiswa*
// Buatlah sebuah program JavaScript yang mengelola data seorang mahasiswa menggunakan fitur-fitur ES6 berikut:
// * ✅ let dan const
// * ✅ Arrow Function
// * ✅ Template Literals
// * ✅ Destructuring Assignment
// * ✅ Spread Operator
// * ✅ Rest Operator

// *📌 Ketentuan Tugas*
// 1. Gunakan object mahasiswa sesuai data yang telah diberikan.
// 2. Gunakan Destructuring Assignment untuk mengambil data dari object.
// 3. Buat Arrow Function untuk menghitung rata-rata nilai mahasiswa.
// 4. Gunakan Template Literals untuk menampilkan hasil output.
// 5. Gunakan Spread Operator untuk menambahkan properti status: "Aktif" tanpa mengubah object asli.
// 6. Buat Arrow Function menggunakan Rest Operator untuk menghitung total seluruh nilai.
// 7. Gunakan let dan const sesuai dengan fungsinya.

// *📤 Pengumpulan*
// Setelah repository selesai dibuat dan di-push ke GitHub:
// 1. Pastikan repository dapat diakses.
// 2. Kirim link repository GitHub ke grup WhatsApp sebagai bukti pengumpulan.

// *⏰ Deadline*
// Jumat, 10 Juli 2026 pukul 23.59 WIB


const mahasiswa = {
    nama: "Budi Santoso",
    nim: "23110001",
    prodi: "Teknik Informatasi",
    semester: 4,
    nilai: [85, 90, 78, 88]
};

// Destructuring Assignment
const { nama, nim, prodi, semester, nilai } = mahasiswa;

// Arrow Function untuk menghitung rata-rata nilai
const hitungRataRata = (nilai) => {
    const total = nilai.reduce((acc, curr) => acc + curr, 0);
    return total / nilai.length;
}

// Template Literals untuk menampilkan hasil output
const rataRata = hitungRataRata(nilai);
console.log(`=== Data Mahasiswa ===`);
console.log(`Nama: ${nama}`);
console.log(`NIM: ${nim}`);
console.log(`Prodi: ${prodi}`);
console.log(`Semester: ${semester}`);
console.log(`Rata-rata Nilai: ${rataRata}`);

// Spread Operator untuk menambahkan properti status: "Aktif" tanpa mengubah object asli
const mahasiswaAktif = { ...mahasiswa, status: "Aktif" };
console.log(`=== Mahasiswa Aktif ===`);
console.log(mahasiswaAktif);

// Arrow Function menggunakan Rest Operator untuk menghitung total seluruh nilai
const hitungTotalNilai = (...nilai) => {
    return nilai.reduce((acc, curr) => acc + curr, 0);
}
console.log(`Total Nilai: ${hitungTotalNilai(...nilai)}`);
