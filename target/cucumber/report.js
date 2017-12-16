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
<<<<<<< HEAD
<<<<<<< HEAD
  "duration": 21642570,
=======
  "duration": 1738047,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 100222534,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.memasukan_data_user_baru()"
});
formatter.result({
<<<<<<< HEAD
<<<<<<< HEAD
  "duration": 30344,
=======
  "duration": 10931,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 24988,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_baru_user_sudah_benar()"
});
formatter.result({
<<<<<<< HEAD
<<<<<<< HEAD
  "duration": 21419,
=======
  "duration": 7758,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 22758,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
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
<<<<<<< HEAD
<<<<<<< HEAD
  "duration": 7701919,
=======
  "duration": 529630,
=======
  "duration": 1161974,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
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
  "duration": 41053,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.memasukkan_data_edit_user_yang_baru()"
});
formatter.result({
  "duration": 43730,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_edit_user_yang_baru_sudah_benar()"
});
formatter.result({
  "duration": 24096,
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
<<<<<<< HEAD
  "duration": 72639,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 1562240,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
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
<<<<<<< HEAD
  "line": 2,
=======
  "line": 3,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
  "name": "Pemantauan spot parkir",
  "description": "      Mengetahui kondisi kendaraan melalui kamera",
  "id": "pemantauan-spot-parkir",
  "keyword": "Fitur"
});
formatter.scenario({
<<<<<<< HEAD
  "line": 6,
=======
  "line": 7,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
  "name": "Validasi Id parkir user benar",
  "description": "",
  "id": "pemantauan-spot-parkir;validasi-id-parkir-user-benar",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 5,
=======
      "line": 6,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
      "name": "@Normal"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 7,
=======
  "line": 8,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
  "name": "pengecekan data transaksi parkir dan data inputan berupa id user ditemukan",
  "keyword": "Dengan "
});
formatter.step({
<<<<<<< HEAD
  "line": 8,
=======
  "line": 9,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
  "name": "data hasil pengecekan sama( benar )",
  "keyword": "Ketika "
});
formatter.step({
<<<<<<< HEAD
  "line": 9,
  "name": "respone pantau berhasil \"munculkan visualisasi dari pemantauan kendaraan\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PantauParkirContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_ditemukan()"
});
formatter.result({
  "duration": 2434627,
  "status": "passed"
});
formatter.match({
  "location": "PantauParkirContext.data_hasil_pengecekan_sama_benar()"
});
formatter.result({
  "duration": 36145,
=======
  "line": 10,
  "name": "user parkir bisa melakukan pemantauan kendaraan",
  "keyword": "Maka "
});
formatter.step({
  "line": 11,
  "name": "menampilkan \"visualisasi dari pemantauan kendaraan\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "DemoContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_ditemukan()"
});
formatter.result({
  "duration": 49085,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_sama_benar()"
});
formatter.result({
  "duration": 23650,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.user_parkir_bisa_melakukan_pemantauan_kendaraan()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 7757,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 26774,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "munculkan visualisasi dari pemantauan kendaraan",
      "offset": 25
    }
  ],
  "location": "PantauParkirContext.respone_pantau_berhasil(String)"
});
formatter.result({
  "duration": 85676,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
=======
      "val": "visualisasi dari pemantauan kendaraan",
      "offset": 13
    }
  ],
  "location": "DemoContext.menampilkan(String)"
});
formatter.result({
  "duration": 120035,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
  "name": "Validasi Id parkir user salah",
  "description": "",
  "id": "pemantauan-spot-parkir;validasi-id-parkir-user-salah",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 11,
=======
      "line": 14,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
      "name": "@Sekunder"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 13,
=======
  "line": 16,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
  "name": "pengecekan data transaksi parkir dan data inputan berupa id user tidak ditemukan",
  "keyword": "Dengan "
});
formatter.step({
<<<<<<< HEAD
  "line": 14,
=======
  "line": 17,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
  "name": "data hasil pengecekan tidak ditemukan id transaksi user( salah )",
  "keyword": "Ketika "
});
formatter.step({
<<<<<<< HEAD
  "line": 15,
  "name": "respone pantau gagal \"tidak bisa melakukan pemantauan kendaraan, id yang di inputkan salah\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PantauParkirContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_tidak_ditemukan()"
});
formatter.result({
  "duration": 78090,
  "status": "passed"
});
formatter.match({
  "location": "PantauParkirContext.data_hasil_pengecekan_tidak_ditemukan_id_transaksi_user_salah()"
});
formatter.result({
  "duration": 31236,
=======
  "line": 18,
  "name": "user tidak bisa melakukan pemantauan kendaraan",
  "keyword": "Maka "
});
formatter.step({
  "line": 19,
  "name": "akan tampil notofikasi \"id yang di inputkan salah\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "DemoContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_tidak_ditemukan()"
});
formatter.result({
  "duration": 96831,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_tidak_ditemukan_id_transaksi_user_salah()"
});
formatter.result({
  "duration": 37483,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.user_tidak_bisa_melakukan_pemantauan_kendaraan()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 8110,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 30790,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "tidak bisa melakukan pemantauan kendaraan, id yang di inputkan salah",
      "offset": 22
    }
  ],
  "location": "PantauParkirContext.respone_pantau_gagal(String)"
});
formatter.result({
  "duration": 87907,
=======
      "val": "id yang di inputkan salah",
      "offset": 24
    }
  ],
  "location": "DemoContext.akan_tampil_notofikasi(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 49719,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 10159245,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
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
<<<<<<< HEAD
  "name": "Memasukan Data Pemesanan Spot Parkir Berhasil",
  "description": "",
  "id": "pesan-spot-parkir;memasukan-data-pemesanan-spot-parkir-berhasil",
=======
  "name": "Memasukan Data Pemesanan Spot Parkir",
  "description": "",
  "id": "pesan-spot-parkir;memasukan-data-pemesanan-spot-parkir",
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
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
<<<<<<< HEAD
  "name": "respon pesan berhasil \"pemesanan spot parkir berhasil\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PesanSpotParkirContext.data_user_dan_Data_Pemesanana_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 1671575,
  "status": "passed"
});
formatter.match({
  "location": "PesanSpotParkirContext.memasukan_data_pemesanan()"
});
formatter.result({
  "duration": 36144,
  "status": "passed"
});
formatter.match({
  "location": "PesanSpotParkirContext.data_baru_pemesanan_sudah_benar()"
});
formatter.result({
  "duration": 37037,
=======
  "name": "respon \"pemesanan spot parkir berhasil\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "DemoContext.data_user_dan_Data_Pemesanana_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 43730,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.memasukan_data_pemesanan()"
});
formatter.result({
  "duration": 26774,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_baru_pemesanan_sudah_benar()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 8110,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 22758,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pemesanan spot parkir berhasil",
<<<<<<< HEAD
      "offset": 23
    }
  ],
  "location": "PesanSpotParkirContext.respon_pesan_berhasil(String)"
});
formatter.result({
  "duration": 90584,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Memasukan Data Pemesanan Spot Parkir Gagal",
  "description": "",
  "id": "pesan-spot-parkir;memasukan-data-pemesanan-spot-parkir-gagal",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sekunder"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Data user, dan Data Pemesanana baru dimasukan dan duplikat dengan data yang sudah ada di sistem",
  "keyword": "Dengan "
});
formatter.step({
  "line": 16,
  "name": "Memasukan data pemesanan",
  "keyword": "Ketika "
});
formatter.step({
  "line": 17,
  "name": "Data baru pemesanan duplikat",
  "keyword": "Dan "
});
formatter.step({
  "line": 18,
  "name": "respon pesan gagal \"pemesanan spot parkir gagal\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PesanSpotParkirContext.data_user_dan_Data_Pemesanana_baru_dimasukan_dan_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 62472,
  "status": "passed"
});
formatter.match({
  "location": "PesanSpotParkirContext.memasukan_data_pemesanan()"
});
formatter.result({
  "duration": 32575,
  "status": "passed"
});
formatter.match({
  "location": "PesanSpotParkirContext.data_baru_pemesanan_duplikat()"
});
formatter.result({
  "duration": 24989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pemesanan spot parkir gagal",
      "offset": 20
    }
  ],
  "location": "PesanSpotParkirContext.respon_pesan_gagal(String)"
});
formatter.result({
  "duration": 83445,
=======
      "offset": 8
    }
  ],
  "location": "DemoContext.respon(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 42666,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 78090,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.uri("com/mycompany/impal/test/Register.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Register Pengendara",
  "description": "      Pendataan dan Pengolahan Data Pengendara",
  "id": "register-pengendara",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Memasukan Data User Benar",
  "description": "",
  "id": "register-pengendara;memasukan-data-user-benar",
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
  "name": "pengecekan data user baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "Memasukan data user baru ke dalam sistem",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "Data baru user sudah benar",
  "keyword": "Dan "
});
formatter.step({
  "line": 11,
<<<<<<< HEAD
  "name": "respon register berhasil \"register berhasil\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "RegisterContext.pengecekan_data_user_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 65595,
  "status": "passed"
});
formatter.match({
  "location": "RegisterContext.memasukan_data_user_baru_ke_dalam_sistem()"
});
formatter.result({
  "duration": 36145,
=======
  "name": "respon \"register berhasil\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "DemoContext.pengecekan_data_user_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 48192,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.memasukan_data_user_baru_ke_dalam_sistem()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 9873,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 17403,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_baru_user_sudah_benar()"
});
formatter.result({
<<<<<<< HEAD
<<<<<<< HEAD
  "duration": 62026,
=======
  "duration": 9874,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 20526,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register berhasil",
<<<<<<< HEAD
      "offset": 26
    }
  ],
  "location": "RegisterContext.respon_register_berhasil(String)"
});
formatter.result({
  "duration": 112004,
=======
      "offset": 8
    }
  ],
  "location": "DemoContext.respon(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 55008,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 108433,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Memasukkan Data User Salah",
  "description": "",
  "id": "register-pengendara;memasukkan-data-user-salah",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sekunder"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Pengecekan data baru dimasukan dan terdapat duplikat dengan data yang sudah ada di sistem",
  "keyword": "Dengan "
});
formatter.step({
  "line": 16,
  "name": "Memasukan data user baru ke dalam sistem",
  "keyword": "Ketika "
});
formatter.step({
  "line": 17,
  "name": "Data baru user sudah benar tetap terdapat duplikasi",
  "keyword": "Dan "
});
formatter.step({
  "line": 18,
<<<<<<< HEAD
  "name": "respon register gagal \"register gagal, username sudah pernah terdaftar\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "RegisterContext.pengecekan_data_baru_dimasukan_dan_terdapat_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 62026,
  "status": "passed"
});
formatter.match({
  "location": "RegisterContext.memasukan_data_user_baru_ke_dalam_sistem()"
});
formatter.result({
  "duration": 33021,
  "status": "passed"
});
formatter.match({
  "location": "RegisterContext.data_baru_user_sudah_benar_tetap_terdapat_duplikasi()"
});
formatter.result({
  "duration": 29451,
=======
  "name": "respon \"register gagal, username sudah pernah terdaftarr\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "DemoContext.pengecekan_data_baru_dimasukan_dan_terdapat_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 52655,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.memasukan_data_user_baru_ke_dalam_sistem()"
});
formatter.result({
  "duration": 24543,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_baru_user_sudah_benar_tetap_terdapat_duplikasi()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 12694,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 21865,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "register gagal, username sudah pernah terdaftar",
      "offset": 23
    }
  ],
  "location": "RegisterContext.respon_register_gagal(String)"
});
formatter.result({
  "duration": 100848,
=======
      "val": "register gagal, username sudah pernah terdaftarr",
      "offset": 8
    }
  ],
  "location": "DemoContext.respon(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 43372,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 120481,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
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
  "name": "Validasi Id parkir user benar",
  "description": "",
  "id": "rekap-transaksi-parkir;validasi-id-parkir-user-benar",
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
  "name": "pengecekan data transaksi parkir dan data inputan berupa id user ditemukan",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "data hasil pengecekan ditemukan atau sama( benar )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
<<<<<<< HEAD
  "name": "respon berhasil menampilkan \"lokasi spot kendaraan\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PantauParkirContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_ditemukan()"
});
formatter.result({
  "duration": 53547,
  "status": "passed"
});
formatter.match({
  "location": "RekapAreaParkirContext.data_hasil_pengecekan_ditemukan_atau_sama_benar()"
});
formatter.result({
  "duration": 66042,
=======
  "name": "bisa melakukan cek spot kendaraan dan menampilkan \"lokasi spot kendaraan\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "DemoContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_ditemukan()"
});
formatter.result({
  "duration": 45962,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_ditemukan_atau_sama_benar()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 11636,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 26327,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lokasi spot kendaraan",
<<<<<<< HEAD
      "offset": 29
    }
  ],
  "location": "RekapAreaParkirContext.respon_berhasil_menampilkan(String)"
});
formatter.result({
  "duration": 121375,
=======
      "offset": 51
    }
  ],
  "location": "DemoContext.bisa_melakukan_cek_spot_kendaraan_dan_menampilkan(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 50072,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 154395,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validasi Id parkir user salah",
  "description": "",
  "id": "rekap-transaksi-parkir;validasi-id-parkir-user-salah",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 12,
      "name": "@Sekunder"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "pengecekan data transaksi parkir dan data inputan berupa id user tidak ditemukan",
  "keyword": "Dengan "
});
formatter.step({
  "line": 15,
  "name": "data hasil pengecekan tidak ditemukan id transaksi user( salah )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 16,
<<<<<<< HEAD
  "name": "respon rekap spot gagal menampilkan \"id yang di inputkan salah\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PantauParkirContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_tidak_ditemukan()"
});
formatter.result({
  "duration": 53547,
  "status": "passed"
});
formatter.match({
  "location": "PantauParkirContext.data_hasil_pengecekan_tidak_ditemukan_id_transaksi_user_salah()"
});
formatter.result({
  "duration": 37484,
=======
  "name": "akan tampil notifikasi \"id yang di inputkan salah\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "DemoContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_tidak_ditemukan()"
});
formatter.result({
  "duration": 41499,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_tidak_ditemukan_id_transaksi_user_salah()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 14105,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 20527,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id yang di inputkan salah",
<<<<<<< HEAD
      "offset": 37
    }
  ],
  "location": "RekapAreaParkirContext.respon_rekap_spot_gagal_menampilkan(String)"
});
formatter.result({
  "duration": 116466,
=======
      "offset": 24
    }
  ],
  "location": "DemoContext.akan_tampil_notifikasi(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 47956,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 95046,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
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
<<<<<<< HEAD
  "location": "TransaksiParkirContext.pengecekan_data_transaksi_pemesanan_spot_parkir_dan_data_user_parkir()"
});
formatter.result({
  "duration": 57563,
  "status": "passed"
});
formatter.match({
  "location": "PantauParkirContext.data_hasil_pengecekan_sama_benar()"
});
formatter.result({
  "duration": 118251,
  "status": "passed"
});
formatter.match({
  "location": "TransaksiParkirContext.user_parkir_bisa_parkir_sesuai_dengan_tempet_yang_dipesan()"
});
formatter.result({
  "duration": 22757,
  "status": "passed"
});
formatter.match({
  "location": "TransaksiParkirContext.data_hasil_pengecekan_tidak_ditemukan_salah()"
});
formatter.result({
  "duration": 17403,
  "status": "passed"
});
formatter.match({
  "location": "TransaksiParkirContext.user_parkir_berdasarkan_spot_tempat_parkir_yang_di_tentukan()"
});
formatter.result({
  "duration": 36145,
=======
  "location": "DemoContext.pengecekan_data_transaksi_pemesanan_spot_parkir_dan_data_user_parkir()"
});
formatter.result({
  "duration": 38822,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_sama_benar()"
});
formatter.result({
  "duration": 20080,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.user_parkir_bisa_parkir_sesuai_dengan_tempet_yang_dipesan()"
});
formatter.result({
  "duration": 18295,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_hasil_pengecekan_tidak_ditemukan_salah()"
});
formatter.result({
  "duration": 17850,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.user_parkir_berdasarkan_spot_tempat_parkir_yang_di_tentukan()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 8463,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 20527,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
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
<<<<<<< HEAD
  "location": "TransaksiParkirContext.data_parkir_user_masuk_dengan_status_parkir_di_sistem_dan_tidak_duplikat()"
});
formatter.result({
  "duration": 66488,
  "status": "passed"
});
formatter.match({
  "location": "TransaksiParkirContext.data_sudah_masuk_ke_sistem_maka_countup_akan_di_mulai()"
});
formatter.result({
  "duration": 21865,
  "status": "passed"
});
formatter.match({
  "location": "TransaksiParkirContext.countup_sudah_mulai_menghitung()"
});
formatter.result({
  "duration": 22312,
=======
  "location": "DemoContext.data_parkir_user_masuk_dengan_status_parkir_di_sistem_dan_tidak_duplikat()"
});
formatter.result({
  "duration": 43730,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_sudah_masuk_ke_sistem_maka_countup_akan_di_mulai()"
});
formatter.result({
  "duration": 23204,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.countup_sudah_mulai_menghitung()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 8462,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 23650,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user mulai parkir",
      "offset": 8
    }
  ],
<<<<<<< HEAD
  "location": "TransaksiParkirContext.respon_dan_akan_mulai_dihitung_juga_untuk_biaya_parkir_user(String)"
});
formatter.result({
  "duration": 78536,
=======
  "location": "DemoContext.respon_dan_akan_mulai_dihitung_juga_untuk_biaya_parkir_user(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 45840,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 82105,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
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
<<<<<<< HEAD
  "location": "TransaksiParkirContext.data_durasi_parkir_pada_data_parkir()"
});
formatter.result({
  "duration": 58902,
=======
  "location": "DemoContext.data_durasi_parkir_pada_data_parkir()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 26094,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 39268,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
<<<<<<< HEAD
  "location": "TransaksiParkirContext.data_durasi_user_lebih_dari_detik_biaya_parkir_awal(int)"
});
formatter.result({
  "duration": 226238,
=======
  "location": "DemoContext.data_durasi_user_lebih_dari_detik_biaya_parkir_awal(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 131526,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 282461,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 27
    }
  ],
<<<<<<< HEAD
  "location": "TransaksiParkirContext.perhitungan_biaya_parkir(int)"
});
formatter.result({
  "duration": 113342,
=======
  "location": "DemoContext.perhitungan_biaya_parkir(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 78986,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 99509,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
<<<<<<< HEAD
  "location": "TransaksiParkirContext.data_durasi_parkir_user_lebih_dari_jam(int)"
});
formatter.result({
  "duration": 113342,
=======
  "location": "DemoContext.data_durasi_parkir_user_lebih_dari_jam(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 71228,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 124497,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 70
    }
  ],
<<<<<<< HEAD
  "location": "TransaksiParkirContext.biaya_parkir_menjadi_biaya_parkir_awal_n_biaya_parkir_tiap_jam_x(int)"
});
formatter.result({
  "duration": 102633,
=======
  "location": "DemoContext.biaya_parkir_menjadi_biaya_parkir_awal_n_biaya_parkir_tiap_jam_x(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 706291,
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
=======
  "duration": 118696,
>>>>>>> e0cc2cdffd54de6f76a4a862f392a3cfbe6fb597
  "status": "passed"
});
});