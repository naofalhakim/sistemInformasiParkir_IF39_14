$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/mycompany/impal/test/DataUser.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Mengelola User Akun",
  "description": "      Megelola Data User",
  "id": "mengelola-user-akun",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Memasukan Data User",
  "description": "",
  "id": "mengelola-user-akun;memasukan-data-user",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Data user baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "Memasukan data user baru",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "Data baru user sudah benar",
  "keyword": "Dan "
});
formatter.step({
  "line": 11,
  "name": "respon \"register berhasil\"",
  "keyword": "Maka "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 14,
  "name": "Mengedit Data User",
  "description": "",
  "id": "mengelola-user-akun;mengedit-data-user",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 13,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Data user yang sudah ada di dalam sistem dan data user tidak sesuai",
  "keyword": "Dengan "
});
formatter.step({
  "line": 16,
  "name": "memasukkan data edit user yang baru",
  "keyword": "Ketika "
});
formatter.step({
  "line": 17,
  "name": "data edit user yang baru sudah benar",
  "keyword": "Dan "
});
formatter.step({
  "line": 18,
  "name": "respon \"update berhasil\"",
  "keyword": "Maka "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("com/mycompany/impal/test/PantauParkir.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Pemantauan spot parkir",
  "description": "      Mengetahui kondisi kendaraan melalui kamera",
  "id": "pemantauan-spot-parkir",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Validasi Id parkir user",
  "description": "",
  "id": "pemantauan-spot-parkir;validasi-id-parkir-user",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "pengecekan data\ttransaksi parkir dan data inputan berupa id user",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "data hasil pengecekan sama( benar )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "user parkir bisa melakukan pemantauan kendaraan",
  "keyword": "Maka "
});
formatter.step({
  "line": 11,
  "name": "menampilkan visualisasi dari pemantauan kendaraan",
  "keyword": "Dan "
});
formatter.step({
  "line": 12,
  "name": "data hasil pengecekan tidak ditemukan id transaksi user( salah )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 13,
  "name": "user tidak bisa melakukan pemantauan kendaraan",
  "keyword": "Maka "
});
formatter.step({
  "line": 14,
  "name": "akan tampil notofikasi id yang di inputkan salah",
  "keyword": "Dan "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("com/mycompany/impal/test/PesanSpotParkir.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Pesan Spot Parkir",
  "description": "      Memesan Spot parkir",
  "id": "pesan-spot-parkir",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Memasukan Data Pemesanan Spot Parkir",
  "description": "",
  "id": "pesan-spot-parkir;memasukan-data-pemesanan-spot-parkir",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Data user, dan Data Pemesanana baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "Memasukan data pemesanan",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "Data baru pemesanan sudah benar",
  "keyword": "Dan "
});
formatter.step({
  "line": 11,
  "name": "respon \"pemesanan spot parkir berhasil\"",
  "keyword": "Maka "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("com/mycompany/impal/test/RekapAreaParkir.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Rekap Transaksi Parkir",
  "description": "      Mengetahui tempat kendaraan melalui kamera",
  "id": "rekap-transaksi-parkir",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Validasi Id parkir user",
  "description": "",
  "id": "rekap-transaksi-parkir;validasi-id-parkir-user",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "pengecekan data transaksi parkir dan data inputan berupa id user",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "data hasil pengecekan sama( benar )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "bisa melakukan cek spot kendaraan",
  "keyword": "Maka "
});
formatter.step({
  "line": 11,
  "name": "menampilkan lokasi spot kendaraan",
  "keyword": "Dan "
});
formatter.step({
  "line": 12,
  "name": "data hasil pengecekan tidak ditemukan id transaksi user( salah )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 13,
  "name": "akan tampil notifikasi id yang di inputkan salah",
  "keyword": "Maka "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("com/mycompany/impal/test/TransaksiParkir.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Perhitungan Lama Parkir User",
  "description": "      Mengetahui biaya dan lama parkir user",
  "id": "perhitungan-lama-parkir-user",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Mengecek User Pesan Spot",
  "description": "",
  "id": "perhitungan-lama-parkir-user;mengecek-user-pesan-spot",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "pengecekan data transaksi pemesanan spot parkir dan data user parkir",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "data hasil pengecekan sama( benar )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "user parkir bisa parkir sesuai dengan tempet yang dipesan",
  "keyword": "Maka "
});
formatter.step({
  "line": 11,
  "name": "data hasil pengecekan tidak ditemukan( salah )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 12,
  "name": "user parkir berdasarkan spot tempat parkir yang di tentukan",
  "keyword": "Maka "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 15,
  "name": "Perhitungan waktu user",
  "description": "",
  "id": "perhitungan-lama-parkir-user;perhitungan-waktu-user",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 14,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "data parkir user masuk dengan status parkir di sistem dan tidak duplikat",
  "keyword": "Dengan "
});
formatter.step({
  "line": 17,
  "name": "data sudah masuk ke sistem, maka countup akan di mulai",
  "keyword": "Ketika "
});
formatter.step({
  "line": 18,
  "name": "countup sudah mulai menghitung",
  "keyword": "Ketika "
});
formatter.step({
  "line": 19,
  "name": "respon \"user mulai parkir\" dan akan mulai dihitung juga untuk biaya parkir user",
  "keyword": "Maka "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "Perhitungan biaya parkir",
  "description": "",
  "id": "perhitungan-lama-parkir-user;perhitungan-biaya-parkir",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 21,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "data durasi parkir, pada data parkir",
  "keyword": "Dengan "
});
formatter.step({
  "line": 24,
  "name": "data durasi user lebih dari 1 detik ( biaya parkir awal )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 25,
  "name": "perhitungan biaya parkir \u003d 2000",
  "keyword": "Maka "
});
formatter.step({
  "line": 26,
  "name": "data durasi parkir user lebih dari 1 jam",
  "keyword": "Ketika "
});
formatter.step({
  "line": 27,
  "name": "biaya parkir menjadi biaya parkir awal + n( biaya parkir tiap jam ) x 1000",
  "keyword": "Maka "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});