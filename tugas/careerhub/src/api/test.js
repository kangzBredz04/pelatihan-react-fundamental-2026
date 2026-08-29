// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.filter(
//     (number) => number > 25
// );

// console.log(result);

// // [30, 40, 50]

// const bandungJobs = jobs.filter(
//     (job) => job.location === "Bandung"
// );

// console.log(bandungJobs);

// const availableJobs = jobs.filter(
//     (job) => job.status === true
// );

// // Fullstack Developer
// // Frontend Developer

// // Fullstack Developer → true
// // Backend Developer    → false
// // Frontend Developer   → true

// // Fullstack Developer
// // Backend Developer
// // Frontend Developer

// // Frontend
// // frontend
// // FRONTEND


// // [10, 20, 30, 40, 50]

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         a.jobName.localeCompare(b.jobName)
// );

// // Backend Developer
// // Frontend Developer
// // Fullstack Developer

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         b.jobName.localeCompare(a.jobName)
// );

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         a.company.localeCompare(b.company)
// );

// // PT. ABC Indonesia
// // PT. DEF Indonesia
// // PT. GHI Indonesia

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         a.location.localeCompare(b.location)
// );

// // Bandung
// // Jakarta
// // Medan

// a.salary - b.salary

// const getSalaryValue = (salary) => {
//     return Number(
//         salary
//             .replace("Rp. ", "")
//             .replaceAll(".", "")
//     );
// };

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         getSalaryValue(a.salary) -
//         getSalaryValue(b.salary)
// );

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         getSalaryValue(b.salary) -
//         getSalaryValue(a.salary)
// );

// const nama = "Budi";
// const jurusan = "Teknik Informatika";
// let semester = 4;

// semester = 5;

// console.log(nama); // Budi
// console.log(jurusan); // Teknik Informatika
// console.log(semester); // 5

// let nama = "Andi";
// nama = "Budi";
// console.log(nama); // Budi

// const kampus = "Universitas Nasional PASIM Bandung";
// kampus = "Universitas Nasional PASIM Jakarta"; // error

// function sapa() {
//     console.log("Halo");
// }

// function tambah(a, b) {
//     return a + b;
// }

// const tambah = (a, b) => {
//     return a + b;
// }

// const tambah = (a, b) => a + b;

// const home = () => {
//     return h1("Selamat Datang di CareerHub");
// }

// const hitungLuas = (panjang, lebar) => {
//     return panjang * lebar;
// }

// conole.log(hitungLuas(10, 5)); // 50

// const nama = "Andi";
// console.log("Halo, " + nama + "!"); // Halo, Andi!

// const nama = "Andi";
// console.log(`Halo, ${nama}!`); // Halo, Andi!

// const produk = "Laptop";
// const harga = 15000000;
// console.log(`Produk: ${produk}, Harga: Rp. ${harga.toLocaleString("id-ID")}`);
// // Produk: Laptop, Harga: Rp. 15.000.000

// const mahasiswa = {
//     nama: "Andi",
//     jurusan: "Teknik Informatika",
//     semester: 4
// };

// const nama = mahasiswa.nama;
// const jurusan = mahasiswa.jurusan;
// const semester = mahasiswa.semester;

// const { nama, jurusan, semester } = mahasiswa;

// const warna = ["Merah", "Hijau", "Biru"];
// const [warna1, warna2, warna3] = warna;

// const profile = ({ nama, jurusan, semester }) => {
//     return (
//         <div>
//             <h1>{nama}</h1>
//             <p>{jurusan}</p>
//             <p>{semester}</p>
//         </div>
//     )
// }

// props.nama
// props.jurusan
// props.semester

const mahasiwa = {
    nama = "Wahyu",
    pekerjaan = "Middleware Engineer",
    kota = "Bandung"
}

const { nama, pekerjaan, kota } = user;

console.log(nama);
console.log(pekerjaan);
console.log(kota);

const angka1 = [1, 2, 3];
const angka2 = [...angka1];

console.log(angka2); //Output: [1, 2, 3]
