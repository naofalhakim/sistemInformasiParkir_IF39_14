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
formatter.match({
  "location": "DemoContext.data_user_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 4673788,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.memasukan_data_user_baru()"
});
formatter.result({
  "duration": 27220,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_baru_user_sudah_benar()"
});
formatter.result({
  "duration": 25881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register berhasil",
      "offset": 8
    }
  ],
  "location": "DemoContext.respon(String)"
});
formatter.result({
  "duration": 255688,
  "status": "passed"
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
formatter.match({
  "location": "DemoContext.data_user_yang_sudah_ada_di_dalam_sistem_dan_data_user_tidak_sesuai()"
});
formatter.result({
  "duration": 5819254,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.memasukkan_data_edit_user_yang_baru()"
});
formatter.result({
  "duration": 29451,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_edit_user_yang_baru_sudah_benar()"
});
formatter.result({
  "duration": 29451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update berhasil",
      "offset": 8
    }
  ],
  "location": "DemoContext.respon(String)"
});
formatter.result({
  "duration": 88353,
  "status": "passed"
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
formatter.match({
  "location": "DemoContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user()"
});
formatter.result({
  "duration": 75412,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_sama_benar()"
});
formatter.result({
  "duration": 45515,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.user_parkir_bisa_melakukan_pemantauan_kendaraan()"
});
formatter.result({
  "duration": 29451,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.menampilkan_visualisasi_dari_pemantauan_kendaraan()"
});
formatter.result({
  "duration": 25881,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_tidak_ditemukan_id_transaksi_user_salah()"
});
formatter.result({
  "duration": 27220,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.user_tidak_bisa_melakukan_pemantauan_kendaraan()"
});
formatter.result({
  "duration": 24542,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.akan_tampil_notofikasi_id_yang_di_inputkan_salah()"
});
formatter.result({
  "duration": 41499,
  "status": "passed"
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
formatter.match({
  "location": "DemoContext.data_user_dan_Data_Pemesanana_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 56224,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.memasukan_data_pemesanan()"
});
formatter.result({
  "duration": 29005,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_baru_pemesanan_sudah_benar()"
});
formatter.result({
  "duration": 27666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pemesanan spot parkir berhasil",
      "offset": 8
    }
  ],
  "location": "DemoContext.respon(String)"
});
formatter.result({
  "duration": 99955,
  "status": "passed"
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
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_sama_benar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoContext.bisa_melakukan_cek_spot_kendaraan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoContext.menampilkan_lokasi_spot_kendaraan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_tidak_ditemukan_id_transaksi_user_salah()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoContext.akan_tampil_notifikasi_id_yang_di_inputkan_salah()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "DemoContext.pengecekan_data_transaksi_pemesanan_spot_parkir_dan_data_user_parkir()"
});
formatter.result({
  "duration": 56225,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_sama_benar()"
});
formatter.result({
  "duration": 24096,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.user_parkir_bisa_parkir_sesuai_dengan_tempet_yang_dipesan()"
});
formatter.result({
  "duration": 620257,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_tidak_ditemukan_salah()"
});
formatter.result({
  "duration": 26774,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.user_parkir_berdasarkan_spot_tempat_parkir_yang_di_tentukan()"
});
formatter.result({
  "duration": 23650,
  "status": "passed"
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
formatter.match({
  "location": "DemoContext.data_parkir_user_masuk_dengan_status_parkir_di_sistem_dan_tidak_duplikat()"
});
formatter.result({
  "duration": 54886,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_sudah_masuk_ke_sistem_maka_countup_akan_di_mulai()"
});
formatter.result({
  "duration": 25882,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.countup_sudah_mulai_menghitung()"
});
formatter.result({
  "duration": 31236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user mulai parkir",
      "offset": 8
    }
  ],
  "location": "DemoContext.respon_dan_akan_mulai_dihitung_juga_untuk_biaya_parkir_user(String)"
});
formatter.result({
  "duration": 96831,
  "status": "passed"
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
formatter.match({
  "location": "DemoContext.data_durasi_parkir_pada_data_parkir()"
});
formatter.result({
  "duration": 49531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "DemoContext.data_durasi_user_lebih_dari_detik_biaya_parkir_awal(int)"
});
formatter.result({
  "duration": 203480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 27
    }
  ],
  "location": "DemoContext.perhitungan_biaya_parkir(int)"
});
formatter.result({
  "duration": 109772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "DemoContext.data_durasi_parkir_user_lebih_dari_jam(int)"
});
formatter.result({
  "duration": 108879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 70
    }
  ],
  "location": "DemoContext.biaya_parkir_menjadi_biaya_parkir_awal_n_biaya_parkir_tiap_jam_x(int)"
});
formatter.result({
  "duration": 105309,
  "status": "passed"
});
});